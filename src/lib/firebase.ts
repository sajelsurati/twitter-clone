// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browser } from "$app/environment";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIQijLEJingWs13p4qL-b-hPwz0Juu4E",
  authDomain: "twitter-clone-dc8a5.firebaseapp.com",
  projectId: "twitter-clone-dc8a5",
  storageBucket: "twitter-clone-dc8a5.appspot.com",
  messagingSenderId: "119128827207",
  appId: "1:119128827207:web:f9a7540baee4a87a851862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (browser) {
    const analytics = getAnalytics(app);
}

// For authentification
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);