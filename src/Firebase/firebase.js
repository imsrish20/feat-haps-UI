// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATSNnJrNONAh5pMeoRIDC82_h0OTJwdKE",
    authDomain: "feat-haps-97e0f.firebaseapp.com",
    projectId: "feat-haps-97e0f",
    storageBucket: "feat-haps-97e0f.appspot.com",
    messagingSenderId: "481607322377",
    appId: "1:481607322377:web:0bec92666810d8d478e1d8",
    measurementId: "G-5FYGJMT5YQ"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
