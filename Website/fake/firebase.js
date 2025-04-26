// plugins/firebase.js
/*import { initializeApp } from "firebase/app";
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

  // Export the database and functions for components to use
  return {
    provide: {
      firebaseApp: app,
      db,
      auth,
      addDroneData,
    },
  };
}); */
let a = 1;
