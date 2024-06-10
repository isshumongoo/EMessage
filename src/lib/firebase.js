import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "claptalk-5cf0a.firebaseapp.com",
  projectId: "claptalk-5cf0a",
  storageBucket: "claptalk-5cf0a.appspot.com",
  messagingSenderId: "276318580765",
  appId: "1:276318580765:web:fcabd50b0d0462bab596f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();