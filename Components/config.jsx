// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRClpB19p53qrUAf2Omcvu6nlIOsLEWVY",
  authDomain: "nbts-db.firebaseapp.com",
  projectId: "nbts-db",
  storageBucket: "nbts-db.appspot.com",
  messagingSenderId: "1084248170958",
  appId: "1:1084248170958:web:9ccf14926abb435bda4b9f",
  measurementId: "G-3WGRJSNC0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore initialize
export const db = getFirestore(app);