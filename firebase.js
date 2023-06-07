// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDBNI7LmjeQCavl6vTU8jVZZEQhFM5BGgo",
  authDomain: "movie-hubz.firebaseapp.com",
  projectId: "movie-hubz",
  storageBucket: "movie-hubz.appspot.com",
  messagingSenderId: "422797405447",
  appId: "1:422797405447:web:e7370effe7b421ee6269a2",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// import.meta.env.REACT_APP_FIREBASE_API_KEY,
//   import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   import.meta.env.REACT_APP_MESSAGE_SENDER,
//  import.meta.env.REACT_APP_APP_ID,
