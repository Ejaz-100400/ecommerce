// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZZ2bLgsRvT3ulkZEJlxFXHCIBXjbRQfU",
  authDomain: "ecommerce-bd533.firebaseapp.com",
  projectId: "ecommerce-bd533",
  storageBucket: "ecommerce-bd533.appspot.com",
  messagingSenderId: "300161192467",
  appId: "1:300161192467:web:4e94ea6eeb5182170a65e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = app.auth
export default app