import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7HtpI2TfD3RpN7gA0tyvPsV6Qwje7_yI",
  authDomain: "tiktik-clone.firebaseapp.com",
  projectId: "tiktik-clone",
  storageBucket: "tiktik-clone.appspot.com",
  messagingSenderId: "267348621285",
  appId: "1:267348621285:web:1e8991f64362fa9353a10c",
  measurementId: "G-HL9CVWXNEF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
