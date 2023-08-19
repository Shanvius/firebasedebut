// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAixwG8l4dNzjSMOf5jtR_zbZEb413gUqM",
  authDomain: "debutfirebase-4d2a7.firebaseapp.com",
  projectId: "debutfirebase-4d2a7",
  storageBucket: "debutfirebase-4d2a7.appspot.com",
  messagingSenderId: "689316875724",
  appId: "1:689316875724:web:cf88c09def6cc42a5d2169",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
