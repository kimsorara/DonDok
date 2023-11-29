import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLJ8E54XyGClROlelpiHd1YWFWK2q5o0g",
  authDomain: "don-dok.firebaseapp.com",
  projectId: "don-dok",
  storageBucket: "don-dok.appspot.com",
  messagingSenderId: "433554116799",
  appId: "1:433554116799:web:67dfb61adaf6eb2f9bf60a",
  measurementId: "G-EDEVHQ08NP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const dbService = getFirestore(firebaseApp);
