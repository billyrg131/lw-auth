import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDj94NQh2jvyMZe4zTpKc1rBfvJRJ9SqaE",
    authDomain: "lw-auth-c0aad.firebaseapp.com",
    projectId: "lw-auth-c0aad",
    storageBucket: "lw-auth-c0aad.appspot.com",
    messagingSenderId: "537972791513",
    appId: "1:537972791513:web:84edd2bbe79e41415d46c8",
    measurementId: "G-67F6Z6M3QY"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);