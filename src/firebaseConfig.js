// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA141CSrkD5zSJhR8lAWt_FgjyhvOXPg64",
  authDomain: "e-comerce-75915.firebaseapp.com",
  projectId: "e-comerce-75915",
  storageBucket: "e-comerce-75915.firebasestorage.app",
  messagingSenderId: "918169033170",
  appId: "1:918169033170:web:decf63969a01a60534900b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);