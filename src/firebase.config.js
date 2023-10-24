import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCuWN1CujkSVvo-wycwfkClWBLk0gG3Z0M",
  authDomain: "auth-moha-milon-495e0.firebaseapp.com",
  projectId: "auth-moha-milon-495e0",
  storageBucket: "auth-moha-milon-495e0.appspot.com",
  messagingSenderId: "722949523318",
  appId: "1:722949523318:web:a4c7e1e74aadabd9b2dc57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
