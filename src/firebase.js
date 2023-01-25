// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP59hzz4Yl3Nrl12ZrEpgKxrfiPYc0Xb0",
  authDomain: "clone-f8d17.firebaseapp.com",
  projectId: "clone-f8d17",
  storageBucket: "clone-f8d17.appspot.com",
  messagingSenderId: "688522697673",
  appId: "1:688522697673:web:a0c81e37ea0a7d1191e618",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
