import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfWh2BAyRIWpHVZWvpytjR6o8Og56cNLU",
  authDomain: "netflix-adeae.firebaseapp.com",
  projectId: "netflix-adeae",
  storageBucket: "netflix-adeae.appspot.com",
  messagingSenderId: "583106635333",
  appId: "1:583106635333:web:d187a530e8df9bbe39652c",
  measurementId: "G-5GMQ16V305"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth };
export default db;