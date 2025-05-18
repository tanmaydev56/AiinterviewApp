
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyD0hfZ1WsQKK8-sZGeTGzd97E6N6tlaQ0k",
  authDomain: "aiprep-7b9b1.firebaseapp.com",
  projectId: "aiprep-7b9b1",
  storageBucket: "aiprep-7b9b1.firebasestorage.app",
  messagingSenderId: "48593691009",
  appId: "1:48593691009:web:2c5ed19a6fe055792a4880",
  measurementId: "G-R8LXGCBY40"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);