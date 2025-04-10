import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx3Df5BgQvgPjYP0muv4KXkOp7thfPI7o",
  authDomain: "prepwise-815d7.firebaseapp.com",
  projectId: "prepwise-815d7",
  storageBucket: "prepwise-815d7.firebasestorage.app",
  messagingSenderId: "957444985318",
  appId: "1:957444985318:web:37b9ec659e944530834627",
  measurementId: "G-VH3M47LLSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);