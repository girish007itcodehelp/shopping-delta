// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_zKAZ0VZ138BO6RPKuPiGTvNUPc8Q8Rw",
    authDomain: "delta-6f610.firebaseapp.com",
    projectId: "delta-6f610",
    storageBucket: "delta-6f610.appspot.com",
    messagingSenderId: "76051683960",
    appId: "1:76051683960:web:9f75b4a2a82476bb6feb8d",
    measurementId: "G-SD20B1DBK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);