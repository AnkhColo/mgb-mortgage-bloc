// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWxMF7Iu1sw8xzp4RH3f6FNZhFtyok_w",
  authDomain: "banking-lender.firebaseapp.com",
  projectId: "banking-lender",
  storageBucket: "banking-lender.appspot.com",
  messagingSenderId: "611197394026",
  appId: "1:611197394026:web:86006d4de7ed1af4c37e13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);