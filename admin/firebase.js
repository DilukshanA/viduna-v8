// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCynnHgYIkAkz5S14GHIjXHBf1v5Kv4as",
  authDomain: "viduna-image.firebaseapp.com",
  projectId: "viduna-image",
  storageBucket: "viduna-image.appspot.com",
  messagingSenderId: "811335351247",
  appId: "1:811335351247:web:eb00c27c2d582497e3f0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;