import math

# --- Hjälpfunktioner ---

def degrees_to_radians(deg):
  """Konverterar grader till radianer."""
  return deg * math.pi / 180.0

def radians_to_degrees(rad):
  """Konverterar radianer till grader."""
  return rad * 180.0 / math.pi

def polar_to_cartesian(magnitude, angle_degrees):
  """
  Konverterar polära koordinater (magnitud, riktning) till kartesiska (Nord, Öst).
  0 grader = Norr, medurs.
  """
  if magnitude < 0:
      # Om magnituden är negativ (t.ex. från felaktig beräkning),
      # vänd riktningen 180 grader och gör magnituden positiv.
      magnitude = abs(magnitude)
      angle_degrees = (angle_degrees + 180) % 360

  angle_radians = degrees_to_radians(90 - angle_degrees) # Konvertera till matematisk vinkel (0 grader = Öst)
  vn = magnitude * math.sin(angle_radians) # Nordlig komponent
  ve = magnitude * math.cos(angle_radians) # Östlig komponent
  return vn, ve

def cartesian_to_polar(vn, ve):
  """
  Konverterar kartesiska koordinater (Nord, Öst) till polära (magnitud, riktning).
  Returnerar magnitud (m/s) och riktning (grader från Norr, 0-360).
  """
  magnitude = math.sqrt(vn**2 + ve**2)
  # Använd atan2 för korrekt kvadrant och hantering av ve=0
  angle_radians = math.atan2(vn, ve)
  # Konvertera från matematisk vinkel till meteorologisk (0=N, medurs)
  angle_degrees = (90 - radians_to_degrees(angle_radians)) % 360
  return magnitude, angle_degrees

# --- Kalibreringsfunktion ---

def get_airspeed_from_power(power, coeffs):
  """
  Uppskattar lufthastigheten baserat på effektförbrukning.
  Använder inversen av Effekt = a*V^2 + b*V + c.
  Löser a*V^2 + b*V + (c - Effekt) = 0 för V med pq-formeln eller abc-formeln.
  Returnerar den positiva, reella roten om den finns.
  """
  a, b, c = coeffs
  delta_p = c - power # Termen (c - P) i ekvationen

  # Beräkna diskriminanten
  discriminant = b**2 - 4*a*delta_p

  if discriminant < 0:
    # Kan hända om uppmätt effekt är lägre än lägsta kalibrerade effekt (c).
    # Kan indikera stark medvind, nedstigning eller mätfel.
    # Returnerar 0 eller hanterar som ett specialfall. Här returnerar vi 0.
    # print(f"Varning: Diskriminant < 0 ({discriminant:.2f}) för P={power:.2f}. Kan inte beräkna reell lufthastighet. Returnerar 0.")
    return 0.0
  elif a == 0:
      # Om 'a' är noll (linjärt samband P = bV + c)
      if b == 0:
          # Om både a och b är noll (konstant effekt) - ogiltig kalibrering för detta syfte
          return None # Eller kasta ett fel
      airspeed = -delta_p / b
      return max(0, airspeed) # Hastighet kan inte vara negativ
  else:
      # Använd abc-formeln: V = (-b ± sqrt(diskriminant)) / (2a)
      # Vi antar att lufthastigheten ska vara positiv och att effekt ökar med hastighet,
      # så vi väljer den positiva roten som ger positiv hastighet.
      sqrt_discriminant = math.sqrt(discriminant)
      airspeed1 = (-b + sqrt_discriminant) / (2 * a)
      airspeed2 = (-b - sqrt_discriminant) / (2 * a)

      # Välj den fysiskt rimliga (icke-negativa) lösningen
      if airspeed1 >= 0 and airspeed2 < 0:
            return airspeed1
      elif airspeed2 >= 0 and airspeed1 < 0:
            return airspeed2
      elif airspeed1 >= 0 and airspeed2 >= 0:
            # Om båda är positiva, välj den som är mest rimlig
            # (oftast den mindre om kalibreringen är vettig, men kan bero på a och b)
            # Här väljer vi den som kommer från "+ sqrt" som oftast är den relevanta.
            # Detta kan behöva justeras baserat på hur a,b,c ser ut.
            return airspeed1
      else:
            # Båda negativa, orimligt
            # print(f"Varning: Båda beräknade lufthastigheterna är negativa för P={power:.2f}. Returnerar 0.")
            return 0.0


# --- Huvudberäkningsfunktion ---

def calculate_wind(power_measured, ground_speed_mag, track_degrees, heading_degrees, calibration_coeffs):
  """
  Beräknar vindvektorn baserat på uppmätta värden och kalibrering.
  """
  # 1. Uppskatta lufthastighetsmagnituden från effekten
  airspeed_mag_estimated = get_airspeed_from_power(power_measured, calibration_coeffs)

  if airspeed_mag_estimated is None:
      print("Fel: Ogiltig kalibrering (a=0, b=0).")
      return None, None

  # print(f"  Uppmätt effekt: {power_measured:.2f} W -> Uppskattad lufthastighet: {airspeed_mag_estimated:.2f} m/s")

  # 2. Konvertera markhastighet till kartesiska komponenter (Vn, Ve)
  vn_ground, ve_ground = polar_to_cartesian(ground_speed_mag, track_degrees)
  # print(f"  Markhastighet: {ground_speed_mag:.2f} m/s @ {track_degrees:.1f} deg -> (N: {vn_ground:.2f}, E: {ve_ground:.2f})")


  # 3. Konvertera uppskattad lufthastighet till kartesiska komponenter (Vn, Ve)
  #    Använd drönarens KURS (heading) för lufthastighetens riktning
  vn_air, ve_air = polar_to_cartesian(airspeed_mag_estimated, heading_degrees)
  # print(f"  Lufthastighet: {airspeed_mag_estimated:.2f} m/s @ {heading_degrees:.1f} deg -> (N: {vn_air:.2f}, E: {ve_air:.2f})")

  # 4. Beräkna vindvektorn: Wind = Ground Speed - Air Speed
  vn_wind = vn_ground - vn_air
  ve_wind = ve_ground - ve_air
  # print(f"  Vindvektor (kartesisk): (N: {vn_wind:.2f}, E: {ve_wind:.2f})")

  # 5. Konvertera vindvektorn till polära koordinater (magnitud, riktning)
  wind_magnitude, wind_direction_degrees = cartesian_to_polar(vn_wind, ve_wind)

  return wind_magnitude, wind_direction_degrees

# --- Exempelanvändning ---

# ANTAGNA Kalibreringskoefficienter (Effekt = a*V^2 + b*V + c)
# Dessa MÅSTE bestämmas från faktiska flygningar i vindstilla!
# Exempelvärden (helt påhittade):
# c = Effekt vid V=0 (hovring)
# a, b bestämmer hur effekten ökar med hastigheten
hover_power = 80.0 # Watt vid stillastående
power_at_10mps = 150.0 # Antagen effekt vid 10 m/s lufthastighet
power_at_5mps = 100.0 # Antagen effekt vid 5 m/s lufthastighet

# Försök hitta a, b, c (här sätter vi bara några rimliga värden)
# Detta är en grov förenkling, normalt gör man en kurvanpassning (fit)
# P = aV^2 + bV + c
# Låt oss anta en enkel modell för illustration:
# c = 80
# b = 3   (ger 30W extra vid 10 m/s från linjär term)
# a = 0.4 (ger 0.4*100 = 40W extra vid 10 m/s från kvadratisk term -> 80+30+40 = 150W)
# Kontroll 5 m/s: 0.4*25 + 3*5 + 80 = 10 + 15 + 80 = 105W (nära antagna 100W)
coeffs = (0.4, 3.0, 80.0) # (a, b, c)

# Uppmätta värden under flygning i vind (Exempel)
power_measured = 130.0      # Watt
ground_speed_mag = 8.0       # m/s
track_degrees = 45.0         # Färdriktning NÖ (45 grader från Norr)
heading_degrees = 55.0       # Drönaren pekar lite mer åt Öst för att kompensera vind från NNV

print("--- Beräkning ---")
print(f"Indata:")
print(f"  Uppmätt effekt: {power_measured:.1f} W")
print(f"  Markhastighet: {ground_speed_mag:.1f} m/s")
print(f"  Färdriktning (Track): {track_degrees:.1f} grader")
print(f"  Drönarens kurs (Heading): {heading_degrees:.1f} grader")
print(f"  Kalibreringskoefficienter (a,b,c): {coeffs}")

# Beräkna vinden
wind_mag, wind_dir = calculate_wind(power_measured, ground_speed_mag, track_degrees, heading_degrees, coeffs)

if wind_mag is not None:
  print("\n--- Resultat ---")
  print(f"Beräknad vindhastighet: {wind_mag:.2f} m/s")
  print(f"Beräknad vindriktning (från): {wind_dir:.1f} grader från Norr") # Vindriktning anges oftast från var den kommer
else:
  print("\nKunde inte beräkna vindhastighet.")

print("\nOBS: Resultatet beror helt på de antagna kalibreringskoefficienterna!")
print("     En noggrann kalibrering är avgörande.")