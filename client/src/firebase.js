// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSegnCU2-tPQTyLnx2X18IPJBAIDaO9QE" ,
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-d17ad.firebaseapp.com",
  projectId: "mern-estate-d17ad",
  storageBucket: "mern-estate-d17ad.appspot.com",
  messagingSenderId: "833133264424",
  appId: "1:833133264424:web:d18e00e1ed3a2832177f1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);