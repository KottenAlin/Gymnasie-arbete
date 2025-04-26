# Gymnasieprojekt väderdrönare

**This is a weather drone (väderdrönare) project for the Gymnasiearbete at Hitachi Gymnasiet.**

The goal is to build and program a drone platform that collects weather and telemetry data using onboard sensors and MAVLink telemetry from the flight controller. The system transmits data via LoRa and WiFi, logs it to Firebase, and visualizes it on a Nuxt3 web dashboard. Features include:
- Real-time collection of temperature, humidity, light, and IR data
- Integration with drone telemetry (acceleration, propeller speed, battery, altitude, etc) via MAVLink
- Wireless transmission using LoRa and WiFi
- Cloud data storage (Firebase)
- Interactive dashboard for data visualization

[Website](https://weatherdrones.netlify.app/dashboard)



## Setup

Make sure to install dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build


```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

# NodeMCU ESP8266 + LoRa + DHT22 + Firebase

This project demonstrates how to use a NodeMCU ESP8266 board with a DHT22 temperature/humidity sensor, a light sensor, an IR sensor, and a LoRa SX1278 module to wirelessly transmit sensor data. Another NodeMCU board receives the data via LoRa and uploads it to Firebase.

## Hardware Required
- 2x NodeMCU ESP8266 boards
- 2x LoRa SX1278 (Ai-Thinker Ra-01 433MHz)
- DHT22 sensor
- Light sensor (LDR + 10kΩ resistor)
- IR sensor (digital output)
- Jumper wires, breadboard

## Wiring
### Transmitter NodeMCU
- DHT22 Data → D4
- Light sensor (LDR):
  - One end to 3V3
  - Other end to A0 (with 10kΩ to GND)
- IR sensor OUT → D5
- LoRa SX1278:
  - MISO → MISO (D6)
  - MOSI → MOSI (D7)
  - SCK → SCK (D5)
  - NSS/CS → D8
  - RESET → D0
  - DIO0 → D2
  - 3.3V and GND accordingly

### Receiver NodeMCU
- LoRa SX1278: Same as above

## Arduino Libraries Needed
- DHT sensor library
- Adafruit Unified Sensor
- LoRa by Sandeep Mistry
- ESP8266WiFi
- FirebaseArduino

Install via Arduino Library Manager.

## Setup
1. Flash `lora_transmitter.ino` to the transmitter NodeMCU.
2. Flash `lora_receiver_firebase.ino` to the receiver NodeMCU.
3. Edit `lora_receiver_firebase.ino`:
   - Replace `YOUR_WIFI_SSID` and `YOUR_WIFI_PASSWORD` with your WiFi credentials.
   - Replace `YOUR_FIREBASE_PROJECT` and `YOUR_FIREBASE_DB_SECRET_OR_TOKEN` with your Firebase project info.
4. Power both boards.

## Firebase Setup
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project (if needed)
- Go to Realtime Database > Create Database
- In Project Settings > Service Accounts, generate a database secret (or use a legacy token)
- Set rules to allow write access for testing

## Usage
- The transmitter will read sensors and send data every 5 seconds via LoRa.
- The receiver will listen for LoRa packets and upload received JSON payloads to Firebase under `/drone_data/<timestamp>`.
- You can visualize the data in your Nuxt3 dashboard by reading from this Firebase path.

## File Overview
- `lora_transmitter.ino`: Reads sensors, sends data via LoRa
- `lora_receiver_firebase.ino`: Receives LoRa, uploads to Firebase

## Troubleshooting
- Ensure both LoRa modules use the same frequency (433E6 Hz)
- Check wiring and power (LoRa modules can be power-hungry)
- Monitor serial output for debug info

---
For integration with your Nuxt3 web dashboard, use the `/drone_data` path in Firebase Firestore/Realtime Database as your data source.

---

# Drone Telemetry via MAVLink

This system can receive and log drone telemetry data using the MAVLink protocol, commonly used by ArduPilot, PX4, and other flight controllers.

## Supported Telemetry Fields
- **Acceleration:** x, y, z axes
- **Gyroscope (Rotation):** x, y, z axes
- **Pressure** (absolute)
- **Altitude** (pressure-based)
- **Propeller (ESC) speeds:** 4 propellers (RPM)
- **Energy consumption:** Current and total energy
- **Battery percentage**
- **Signal strength:** RSSI, remote RSSI, noise

## Data Structure
Telemetry is parsed from MAVLink messages and uploaded to Firebase under `/drone_telemetry/` with a timestamp. Example fields:

```json
{
  "timestamp": "2025-04-26T20:00:00Z",
  "accel_x": 0.12,
  "accel_y": -0.03,
  "accel_z": 9.81,
  "gyro_x": 0.01,
  "gyro_y": 0.00,
  "gyro_z": -0.02,
  "pressure": 1013.25,
  "altitude": 120.5,
  "rpm1": 8000,
  "rpm2": 8050,
  "rpm3": 7990,
  "rpm4": 8005,
  "battery_remaining": 85,
  "current_consumed": 1200,
  "energy_consumed": 5000,
  "voltage": 11.1,
  "rssi": 200,
  "remrssi": 190,
  "noise": 35
}
```

## Wiring
- Connect the flight controller's telemetry TX (MAVLink output) to NodeMCU RX (usually D7 or D9, check your board)
- Connect GND to GND
- (Optional) Use a logic level shifter if MAVLink TX is 5V and NodeMCU is 3.3V

## Software Setup
- Place the [MAVLink C library](https://github.com/mavlink/c_library_v2) in `libraries/mavlink/` in your Arduino sketch folder
- The receiver code parses messages over `Serial` and uploads supported fields to Firebase

## Usage
- Power the flight controller and NodeMCU
- Telemetry will be parsed and uploaded automatically
- Data appears in Firebase under `/drone_telemetry/`

---
