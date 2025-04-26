import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Import other Firebase services as needed

export default defineNuxtPlugin(() => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAn4Zf1Voe3DHW9broHihiIYxovjF-g4vs",
    authDomain: "drones-75132.firebaseapp.com",
    projectId: "drones-75132",
    storageBucket: "drones-75132.firebasestorage.app",
    messagingSenderId: "298616140479",
    appId: "1:298616140479:web:766a140c2b975fcceccc0a",
    measurementId: "G-0P7NXCNXN0",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Function to add drone data
  const addDroneData = async (customData = {}) => {
    const droneData = {
      timestamp: serverTimestamp(), // Use Firebase server timestamp
      drone_id: "weatherdrone-001",
      position: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
      temperature: 25.5,
      humidity: 60.2,
      light: {
        visible: 500,
        ir: 120,
      },
      power_consumption: 1.2,
      battery_status: 85,
      acceleration: {
        x: 0.1,
        y: -0.2,
        z: 9.8,
      },
      calculated: {
        cloudiness: 0.7,
        wind_speed: 15.3,
        wind_direction: 225,
      },
      ...customData, // Allow custom data to override defaults
    };

    try {
      const collectionRef = collection(db, "drone_readings");
      const docRef = await addDoc(collectionRef, droneData);
      console.log("Document written with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document:", error);
      throw error;
    }
  };

  // Write drone data to a JSON file (server-side only)
  const writeDataToJsonFile = async (data, filePath = './drone_readings.json') => {
    if (process.server) {
      const fs = await import('fs/promises');
      let existing = [];
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        existing = JSON.parse(content);
      } catch (e) {
        // If file doesn't exist or is invalid, start fresh
        existing = [];
      }
      existing.push(data);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    } else {
      // No-op on client
      console.warn('writeDataToJsonFile is only available server-side.');
    }
  };

  // Export the database and functions for components to use
  return {
    provide: {
      firebaseApp: app,
      db,
      auth,
      addDroneData,
      writeDataToJsonFile,
    },
  };
});

