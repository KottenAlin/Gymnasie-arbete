// lora_receiver_firebase.ino
// NodeMCU ESP8266 + LoRa SX1278
// Receives LoRa data and uploads to Firebase

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <SPI.h>
#include <LoRa.h>
#include <ArduinoJson.h>
#include <time.h>
#include <mavlink.h> // Make sure the MAVLink C library is in libraries/mavlink/

#define LORA_SS D8
#define LORA_RST D0
#define LORA_DIO0 D2

// Replace with your WiFi credentials
#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"

// Replace with your Firebase credentials
#define FIREBASE_HOST "YOUR_FIREBASE_PROJECT.firebaseio.com"
#define FIREBASE_AUTH "YOUR_FIREBASE_DB_SECRET_OR_TOKEN"

void setup() {
  configTime(0, 0, "pool.ntp.org", "time.nist.gov"); // NTP setup

  Serial.begin(9600);

  // WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  // Firebase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  // LoRa
  SPI.begin();
  LoRa.setPins(LORA_SS, LORA_RST, LORA_DIO0);
  if (!LoRa.begin(433E6)) {
    Serial.println("LoRa init failed!");
    while (1);
  }
  Serial.println("LoRa init succeeded.");
}

void loop() {
  // --- MAVLink Telemetry Parsing ---
  static uint8_t mavlink_buffer[300];
  static uint16_t mavlink_buffer_len = 0;
  mavlink_message_t msg;
  mavlink_status_t status;

  while (Serial.available()) {
    uint8_t c = Serial.read();
    if (mavlink_parse_char(MAVLINK_COMM_0, c, &msg, &status)) {
      // Message parsed!
      if (msg.msgid == MAVLINK_MSG_ID_HIGHRES_IMU) {
        // Acceleration, rotation, pressure, etc.
        mavlink_highres_imu_t imu;
        mavlink_msg_highres_imu_decode(&msg, &imu);
        // Compose JSON
        StaticJsonDocument<512> doc;
        time_t now = time(nullptr);
        struct tm *tmstruct = localtime(&now);
        char isoTime[25];
        strftime(isoTime, sizeof(isoTime), "%Y-%m-%dT%H:%M:%SZ", tmstruct);
        doc["timestamp"] = isoTime;
        doc["accel_x"] = imu.xacc;
        doc["accel_y"] = imu.yacc;
        doc["accel_z"] = imu.zacc;
        doc["gyro_x"] = imu.xgyro;
        doc["gyro_y"] = imu.ygyro;
        doc["gyro_z"] = imu.zgyro;
        doc["pressure"] = imu.abs_pressure;
        doc["altitude"] = imu.pressure_alt;
        // Add more fields as needed
        String outPayload;
        serializeJson(doc, outPayload);
        String path = "/drone_telemetry/imu_" + String(now);
        Firebase.setString(path, outPayload);
        if (Firebase.failed()) {
          Serial.print("Firebase set failed: ");
          Serial.println(Firebase.error());
        } else {
          Serial.println("Uploaded IMU to Firebase: " + path);
        }
      } else if (msg.msgid == MAVLINK_MSG_ID_BATTERY_STATUS) {
        mavlink_battery_status_t batt;
        mavlink_msg_battery_status_decode(&msg, &batt);
        StaticJsonDocument<256> doc;
        time_t now = time(nullptr);
        struct tm *tmstruct = localtime(&now);
        char isoTime[25];
        strftime(isoTime, sizeof(isoTime), "%Y-%m-%dT%H:%M:%SZ", tmstruct);
        doc["timestamp"] = isoTime;
        doc["battery_remaining"] = batt.battery_remaining;
        doc["current_consumed"] = batt.current_consumed;
        doc["energy_consumed"] = batt.energy_consumed;
        doc["voltage"] = batt.voltages[0]/1000.0;
        String outPayload;
        serializeJson(doc, outPayload);
        String path = "/drone_telemetry/battery_" + String(now);
        Firebase.setString(path, outPayload);
        if (Firebase.failed()) {
          Serial.print("Firebase set failed: ");
          Serial.println(Firebase.error());
        } else {
          Serial.println("Uploaded Battery to Firebase: " + path);
        }
      } else if (msg.msgid == MAVLINK_MSG_ID_ESC_TELEMETRY_1_TO_4) {
        mavlink_esc_telemetry_1_to_4_t esc;
        mavlink_msg_esc_telemetry_1_to_4_decode(&msg, &esc);
        StaticJsonDocument<256> doc;
        time_t now = time(nullptr);
        struct tm *tmstruct = localtime(&now);
        char isoTime[25];
        strftime(isoTime, sizeof(isoTime), "%Y-%m-%dT%H:%M:%SZ", tmstruct);
        doc["timestamp"] = isoTime;
        doc["rpm1"] = esc.rpm[0];
        doc["rpm2"] = esc.rpm[1];
        doc["rpm3"] = esc.rpm[2];
        doc["rpm4"] = esc.rpm[3];
        String outPayload;
        serializeJson(doc, outPayload);
        String path = "/drone_telemetry/esc_" + String(now);
        Firebase.setString(path, outPayload);
        if (Firebase.failed()) {
          Serial.print("Firebase set failed: ");
          Serial.println(Firebase.error());
        } else {
          Serial.println("Uploaded ESC to Firebase: " + path);
        }
      } else if (msg.msgid == MAVLINK_MSG_ID_RADIO_STATUS) {
        mavlink_radio_status_t radio;
        mavlink_msg_radio_status_decode(&msg, &radio);
        StaticJsonDocument<256> doc;
        time_t now = time(nullptr);
        struct tm *tmstruct = localtime(&now);
        char isoTime[25];
        strftime(isoTime, sizeof(isoTime), "%Y-%m-%dT%H:%M:%SZ", tmstruct);
        doc["timestamp"] = isoTime;
        doc["rssi"] = radio.rssi;
        doc["remrssi"] = radio.remrssi;
        doc["noise"] = radio.noise;
        String outPayload;
        serializeJson(doc, outPayload);
        String path = "/drone_telemetry/radio_" + String(now);
        Firebase.setString(path, outPayload);
        if (Firebase.failed()) {
          Serial.print("Firebase set failed: ");
          Serial.println(Firebase.error());
        } else {
          Serial.println("Uploaded Radio to Firebase: " + path);
        }
      }
      // Add more MAVLink message handling as needed
    }
  }

  // --- LoRa Sensor Data ---
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    String payload = "";
    while (LoRa.available()) {
      payload += (char)LoRa.read();
    }
    Serial.println("Received: " + payload);

    // Get current time
    time_t now = time(nullptr);
    struct tm *tmstruct = localtime(&now);
    char isoTime[25];
    strftime(isoTime, sizeof(isoTime), "%Y-%m-%dT%H:%M:%SZ", tmstruct);

    // Parse payload and add timestamp
    StaticJsonDocument<256> doc;
    DeserializationError error = deserializeJson(doc, payload);
    if (!error) {
      doc["timestamp"] = isoTime;
      String outPayload;
      serializeJson(doc, outPayload);
      String path = "/drone_data/" + String(now);
      Firebase.setString(path, outPayload);
      if (Firebase.failed()) {
        Serial.print("Firebase set failed: ");
        Serial.println(Firebase.error());
      } else {
        Serial.println("Uploaded to Firebase: " + path);
      }
    } else {
      Serial.println("JSON parse failed, not uploading.");
    }
  }
}
