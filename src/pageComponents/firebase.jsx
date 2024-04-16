// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3QmPupIeJulI69P7S5I1V4OkwhxPpHTA",
  authDomain: "phenomenalwt-a8846.firebaseapp.com",
  projectId: "phenomenalwt-a8846",
  storageBucket: "gs://phenomenalwt-a8846.appspot.com",
  messagingSenderId: "323451614115",
  appId: "1:323451614115:web:298050e9cb5bd8600d6016",
  measurementId: "G-J0QTJS55VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, app as default };
