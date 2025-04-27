import functions_framework
from flask import jsonify, request
import numpy as np

def interpolate_calibration(calibration_curve, v_ground):
    """
    Linear interpolation of the calibration curve.
    calibration_curve: list of dicts with 'v' and 'P' keys
    v_ground: ground speed to look up
    """
    curve = sorted(calibration_curve, key=lambda x: x['v'])
    v_list = [pt['v'] for pt in curve]
    P_list = [pt['P'] for pt in curve]
    if v_ground <= v_list[0]:
        return P_list[0]
    if v_ground >= v_list[-1]:
        return P_list[-1]
    for i in range(1, len(v_list)):
        if v_ground < v_list[i]:
            # Linear interpolation
            v0, v1 = v_list[i-1], v_list[i]
            P0, P1 = P_list[i-1], P_list[i]
            return P0 + (P1 - P0) * (v_ground - v0) / (v1 - v0)
    return P_list[-1]

from google.cloud import firestore
import os

@functions_framework.http
def estimate_cloudiness(request):
    data = request.get_json(silent=True)
    db = None
    if not data:
        return jsonify({'error': 'No input data'}), 400

    try:
        # Option 1: Direct input
        if 'light_intensity' in data and 'ir_intensity' in data:
            light = float(data['light_intensity'])
            ir = float(data['ir_intensity'])
        # Option 2: Fetch from Firestore
        elif 'cloud_doc_id' in data:
            db = firestore.Client()
            doc_ref = db.collection('cloudiness').document(data['cloud_doc_id'])
            doc = doc_ref.get()
            if not doc.exists:
                return jsonify({'error': 'Cloudiness document not found'}), 404
            doc_data = doc.to_dict()
            light = float(doc_data['light_intensity'])
            ir = float(doc_data['ir_intensity'])
        else:
            return jsonify({'error': 'Missing required fields'}), 400
    except Exception as e:
        return jsonify({'error': f'Failed to parse input: {str(e)}'}), 400

    # Estimate cloudiness: 0 = clear, 1 = fully cloudy
    if ir <= 0:
        cloudiness = 1.0
    else:
        ratio = light / ir
        cloudiness = 1.0 - ratio  # Simple model
        cloudiness = max(0.0, min(1.0, cloudiness))

    return jsonify({
        'cloudiness': cloudiness,
        'light_intensity': light,
        'ir_intensity': ir
    })

@functions_framework.http
def estimate_wind(request):
    data = request.get_json(silent=True)
    if not data or 'flight_doc_id' not in data:
        return jsonify({'error': 'Missing flight_doc_id in request'}), 400

    # Initialize Firestore client (relies on default credentials in Cloud Functions)
    db = firestore.Client()

    # Fetch flight data
    try:
        flight_doc_id = data['flight_doc_id']
        flight_ref = db.collection('flights').document(flight_doc_id)
        flight_doc = flight_ref.get()
        if not flight_doc.exists:
            return jsonify({'error': 'Flight document not found'}), 404
        flight_data = flight_doc.to_dict()
        P_measured = float(flight_data['P_measured'])
        v_ground = float(flight_data['v_ground'])
        track = float(flight_data['track'])
        heading = float(flight_data['heading'])
        # Calibration curve: can be in flight doc or separate
        if 'calibration_curve' in flight_data:
            calibration_curve = flight_data['calibration_curve']
        elif 'calibration_doc_id' in data:
            cal_ref = db.collection('calibrations').document(data['calibration_doc_id'])
            cal_doc = cal_ref.get()
            if not cal_doc.exists:
                return jsonify({'error': 'Calibration document not found'}), 404
            calibration_curve = cal_doc.to_dict().get('calibration_curve', [])
        else:
            return jsonify({'error': 'No calibration data found'}), 400
    except Exception as e:
        return jsonify({'error': f'Firestore fetch failed: {str(e)}'}), 500

    # 1. Lookup calibrated power at current ground speed
    P_cal = interpolate_calibration(calibration_curve, v_ground)
    delta_P = P_measured - P_cal

    # 2. Estimate wind component along flight direction
    if P_cal <= 0 or v_ground <= 0:
        wind_along = 0.0
    else:
        v_air = (P_measured / P_cal) ** (1/3) * v_ground
        wind_along = v_air - v_ground

    # 3. Estimate wind direction
    wind_angle = (track - heading + 360) % 360
    wind_x = wind_along * np.cos(np.radians(wind_angle))
    wind_y = wind_along * np.sin(np.radians(wind_angle))
    wind_speed = np.sqrt(wind_x**2 + wind_y**2)
    wind_from = (heading + np.degrees(np.arctan2(wind_y, wind_x)) + 360) % 360

    return jsonify({
        'wind_speed': wind_speed,
        'wind_from': wind_from,
        'delta_P': delta_P,
        'P_calibrated': P_cal,
        'wind_along_track': wind_along,
        'wind_angle': wind_angle
    })
