// lora_receiver_firebase.ino
// NodeMCU ESP8266 + LoRa SX1278
// Receives LoRa data and uploads to Firebase

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <SPI.h>
#include <LoRa.h>

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
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    String payload = "";
    while (LoRa.available()) {
      payload += (char)LoRa.read();
    }
    Serial.println("Received: " + payload);
    // Upload to Firebase
    String path = "/drone_data/" + String(millis());
    Firebase.setString(path, payload);
    if (Firebase.failed()) {
      Serial.print("Firebase set failed: ");
      Serial.println(Firebase.error());
    } else {
      Serial.println("Uploaded to Firebase: " + path);
    }
  }
}
