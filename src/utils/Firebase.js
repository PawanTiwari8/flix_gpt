// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOVcsIHkfvMnkPBCCbgp7ZMOiMJjsQltg",
  authDomain: "flixgpt-9e90a.firebaseapp.com",
  projectId: "flixgpt-9e90a",
  storageBucket: "flixgpt-9e90a.appspot.com",
  messagingSenderId: "645853167172",
  appId: "1:645853167172:web:b537ccb0a31d42c01b4611",
  measurementId: "G-P7BJ9D9X0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();