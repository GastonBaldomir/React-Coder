// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJSrDADopQMQ_5AAxDVRjrviFzsNT8mo0",
  authDomain: "reactjs-cc392.firebaseapp.com",
  projectId: "reactjs-cc392",
  storageBucket: "reactjs-cc392.appspot.com",
  messagingSenderId: "347897541906",
  appId: "1:347897541906:web:2ce6b416a0afcda214afcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);