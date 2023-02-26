import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJoz6huuykdfYEUL9MpGn5BgnTXuuwEfA",
  authDomain: "game-store-9addf.firebaseapp.com",
  projectId: "game-store-9addf",
  storageBucket: "game-store-9addf.appspot.com",
  messagingSenderId: "22431401997",
  appId: "1:22431401997:web:fafd3a3b005131f4fcad44",
  measurementId: "G-174TGEGE79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);