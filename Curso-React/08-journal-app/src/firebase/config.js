// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt88IXT6id4CrE0wsxqn5cnBJRuu5D5zY",
  authDomain: "react-curso-bb9e7.firebaseapp.com",
  projectId: "react-curso-bb9e7",
  storageBucket: "react-curso-bb9e7.appspot.com",
  messagingSenderId: "557469497039",
  appId: "1:557469497039:web:a48831076cb5ba36dbe9ba"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

