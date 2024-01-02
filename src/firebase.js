// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1DlckTyIb_ATLGZl51YYyFs0XHjerEsE",
    authDomain: "react-disney-plus-app-1c885.firebaseapp.com",
    projectId: "react-disney-plus-app-1c885",
    storageBucket: "react-disney-plus-app-1c885.appspot.com",
    messagingSenderId: "435588639774",
    appId: "1:435588639774:web:bb275e83dd5d074210920f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;