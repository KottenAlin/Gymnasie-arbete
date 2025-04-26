// lora_transmitter.ino
// NodeMCU ESP8266 + DHT22 + Light Sensor + IR Sensor + LoRa SX1278
// Transmits sensor readings via LoRa

#include <DHT.h>
#include <SPI.h>
#include <LoRa.h>

#define DHTPIN D4       // DHT22 data pin
#define DHTTYPE DHT22
#define LIGHT_SENSOR_PIN A0
#define IR_SENSOR_PIN D5

#define LORA_SS D8
#define LORA_RST D0
#define LORA_DIO0 D2

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();

  // LoRa setup
  SPI.begin();
  LoRa.setPins(LORA_SS, LORA_RST, LORA_DIO0);
  if (!LoRa.begin(433E6)) {
    Serial.println("LoRa init failed!");
    while (1);
  }
  Serial.println("LoRa init succeeded.");
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  int light = analogRead(LIGHT_SENSOR_PIN);
  int ir = digitalRead(IR_SENSOR_PIN);

  // Compose payload
  String payload = String("{" + String("\"temp\":") + t + "," +
                        "\"hum\":" + h + "," +
                        "\"light\":" + light + "," +
                        "\"ir\":" + ir + "}");

  Serial.println("Sending: " + payload);
  LoRa.beginPacket();
  LoRa.print(payload);
  LoRa.endPacket();

  delay(5000); // Send every 5 seconds
}
