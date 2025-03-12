// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Import other Firebase services as needed

export default defineNuxtPlugin(() => {

    // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4Zf1Voe3DHW9broHihiIYxovjF-g4vs",
  authDomain: "drones-75132.firebaseapp.com",
  projectId: "drones-75132",
  storageBucket: "drones-75132.firebasestorage.app",
  messagingSenderId: "298616140479",
  appId: "1:298616140479:web:766a140c2b975fcceccc0a",
  measurementId: "G-0P7NXCNXN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

// Export the database for components to use

return {
  provide: {
    firbaseapp: app,
    db,
    auth
  }
}

})