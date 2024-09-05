import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDt_3pMKx4I6t4pDiTTtsFvZtvXJVWJFb0",
    authDomain: "smit-hackathon-14245.firebaseapp.com",
    projectId: "smit-hackathon-14245",
    storageBucket: "smit-hackathon-14245.appspot.com",
    messagingSenderId: "828441625961",
    appId: "1:828441625961:web:27cc8627f562f75c8f69f8"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export default app;

export const db = getFirestore();