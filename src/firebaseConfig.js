// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAqVqxWnBvhWcKzVQyBv5bS0V30Mw7C5Ic",
  authDomain: "privacy-shop.firebaseapp.com",
  projectId: "privacy-shop",
  storageBucket: "privacy-shop.appspot.com",
  messagingSenderId: "128797529057",
  appId: "1:128797529057:web:a489daa57974282cd9f8a0",
  measurementId: "G-NVN27HDP97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app