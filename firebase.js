// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBNI7LmjeQCavl6vTU8jVZZEQhFM5BGgo",
  authDomain: "movie - hubz.firebaseapp.com",
  projectId: "movie - hubz",
  storageBucket: "movie - hubz.appspot.com",
  messagingSenderId: "422797405447",
  appId: " 1:422797405447:web:e7370effe7b421ee6269a2",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
