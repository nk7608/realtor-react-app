// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlwoKDdKQOQgs1RvUTFFzVenbegpzza4k",
  authDomain: "realtor-react-2d0d9.firebaseapp.com",
  projectId: "realtor-react-2d0d9",
  storageBucket: "realtor-react-2d0d9.appspot.com",
  messagingSenderId: "52752172945",
  appId: "1:52752172945:web:26560d9d9af7a8bad87c30"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()