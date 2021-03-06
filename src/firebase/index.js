// import { initializeApp } from "firebase/compact/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwY07UA1iWKRji8OaoHweVsQPlm2pilxM",
  authDomain: "odysseyfilm-ca6e0.firebaseapp.com",
  projectId: "odysseyfilm-ca6e0",
  storageBucket: "odysseyfilm-ca6e0.appspot.com",
  messagingSenderId: "421187598544",
  appId: "1:421187598544:web:bec0b78d60adfa2b5a86d5",
  measurementId: "G-9Y5GE4C03D",
};
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
export const auth = firebase.initializeApp(firebaseConfig).auth();
