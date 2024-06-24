// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getF} from '@firebase/firestore'
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfPkbXz0iT0wg_6xyxz_8PPO7pnEpKzM",
  authDomain: "fatimacenterwebsite.firebaseapp.com",
  projectId: "fatimacenterwebsite",
  storageBucket: "fatimacenterwebsite.appspot.com",
  messagingSenderId: "777247064093",
  appId: "1:777247064093:web:cf8c4d08ba5047cf1546f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)