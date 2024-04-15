
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_RdlWoSlpkOPOuIbDXGwg_CzPDBnYi0o",
  authDomain: "phenomenalwt-e0065.firebaseapp.com",
  projectId: "phenomenalwt-e0065",
  storageBucket: "phenomenalwt-e0065.appspot.com",
  messagingSenderId: "773165307443",
  appId: "1:773165307443:web:8f70eb11c0402bb1c5b546",
  measurementId: "G-7YVR6QP3DJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);