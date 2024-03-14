import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_vBzgymypAsRp_iemg15fMbewO04ii3Y",
  authDomain: "emailpasswordlogin-82c98.firebaseapp.com",
  projectId: "emailpasswordlogin-82c98",
  storageBucket: "emailpasswordlogin-82c98.appspot.com",
  messagingSenderId: "14711304926",
  appId: "1:14711304926:web:94b2bd11576cd9d7e1084f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)