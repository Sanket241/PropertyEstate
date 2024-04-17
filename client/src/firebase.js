
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertypulse-77518.firebaseapp.com",
  projectId: "propertypulse-77518",
  storageBucket: "propertypulse-77518.appspot.com",
  messagingSenderId: "291334242005",
  appId: "1:291334242005:web:4e028df5b1065171c56c5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);