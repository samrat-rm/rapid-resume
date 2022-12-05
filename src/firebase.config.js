// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7bhKuu32rp79pwKkaRLiCdSWeW4bvueM",
  authDomain: "rapid-res.firebaseapp.com",
  projectId: "rapid-res",
  storageBucket: "rapid-res.appspot.com",
  messagingSenderId: "883110129839",
  appId: "1:883110129839:web:d93a4fa957630d2edba45a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const firestore = getFirestore();

export { app, auth, firestore };
