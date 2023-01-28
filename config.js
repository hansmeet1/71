import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA2TAxRurCPL4rBSXcZH9sFZlx-KDyKp4c",
    authDomain: "e-ride-bcb0f.firebaseapp.com",
    projectId: "e-ride-bcb0f",
    storageBucket: "e-ride-bcb0f.appspot.com",
    messagingSenderId: "957418786597",
    appId: "1:957418786597:web:1e23490b5f5d533071d4cc"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
