// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqje0lLnTQ5k-kaIsjsdKqXOW5WpZyExo",
  authDomain: "learning-website-53a28.firebaseapp.com",
  projectId: "learning-website-53a28",
  storageBucket: "learning-website-53a28.firebasestorage.app",
  messagingSenderId: "991282912838",
  appId: "1:991282912838:web:0a8ddc3baaf5b3d6927447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// .......... Auth Added . ........

export const auth = getAuth(app);