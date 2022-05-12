// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQEh2fK_xMCIs3NQ3oKQxZZuL8o6ym_VI",
  authDomain: "doctors-portal-1b1bb.firebaseapp.com",
  projectId: "doctors-portal-1b1bb",
  storageBucket: "doctors-portal-1b1bb.appspot.com",
  messagingSenderId: "942740392203",
  appId: "1:942740392203:web:8879ea815fbb74b34eba0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;