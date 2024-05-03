// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIyp60VB-ki6cDycNH9S2BHLKrdOHsidM",
  authDomain: "webrtc-84d85.firebaseapp.com",
  projectId: "webrtc-84d85",
  storageBucket: "webrtc-84d85.appspot.com",
  messagingSenderId: "45214561599",
  appId: "1:45214561599:web:d1e9ae1abb3723ab34cf8a",
  measurementId: "G-FECNL0VX76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
