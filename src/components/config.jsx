import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAMelXASpM-j2r6WEN-Arg1moq9ZAc7aCM",
  authDomain: "techmap-1faa5.firebaseapp.com",
  projectId: "techmap-1faa5",
  storageBucket: "techmap-1faa5.appspot.com",
  messagingSenderId: "133524108601",
  appId: "1:133524108601:web:037d692d1da772231524e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage}