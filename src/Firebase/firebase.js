// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "miquerencia-44f37.firebaseapp.com",
  projectId: "miquerencia-44f37",
  storageBucket: "miquerencia-44f37.firebasestorage.app",
  messagingSenderId: "1037340389831",
  appId: "1:1037340389831:web:0300707db99e7421df69e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)