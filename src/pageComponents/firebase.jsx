// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDEPoIWIGyGrs2W0GWOYTV1M86Bqga6v7s",
  authDomain: "phenomenalwt-65cad.firebaseapp.com",
  projectId: "phenomenalwt-65cad",
  storageBucket: "gs://phenomenalwt-65cad.appspot.com",
  messagingSenderId: "486426077376",
  appId: "1:486426077376:web:d999e843a1c5c39a512525",
  measurementId: "G-JDE3C4QY1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

onAuthStateChanged(auth, (user) => {
  console.log('ADMIN LOGGED IN')
})


export { storage, dbase, auth, app, analytics as default };
