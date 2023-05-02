// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import { FirebaseApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
import { Firestore, getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcWC2lcoBMPL5PrbP_nBJIo5aTn8_-Z-E",
  authDomain: "saedsa-905ad.firebaseapp.com",
  projectId: "saedsa-905ad",
  storageBucket: "saedsa-905ad.appspot.com",
  messagingSenderId: "95224214039",
  appId: "1:95224214039:web:ebce85555cdf5405d3a252",
  measurementId: "G-XFRG0XXZEY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const dataRef = firebase.database();
export default firebaseConfig;
