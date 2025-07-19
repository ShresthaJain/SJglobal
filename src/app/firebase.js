// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTt-e6vgaEX3ov9JUrzG4rkSGPwqcvuo",
  authDomain: "sjglobal-56a14.firebaseapp.com",
  projectId: "sjglobal-56a14",
  storageBucket: "sjglobal-56a14.firebasestorage.app",
  messagingSenderId: "1038477740427",
  appId: "1:1038477740427:web:c0bdfcf0d2656aa7ae478e",
  measurementId: "G-QG1KEQYBRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };