# Gymnasieprojekt väderdrönare

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
