// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC25vIoNxW2NvLNEX7M6A9K7lnusvrHKrU",
  authDomain: "who-will-win-the-million-game.firebaseapp.com",
  projectId: "who-will-win-the-million-game",
  storageBucket: "who-will-win-the-million-game.appspot.com",
  messagingSenderId: "799373587056",
  appId: "1:799373587056:web:0582eef421c0963e43fab5",
  measurementId: "G-PKMG2KDDLC"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db, collection, getDocs, setDoc, doc, deleteDoc };
