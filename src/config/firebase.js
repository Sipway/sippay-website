import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5oztQbgrupKpoLGhAzMy1g4io1DnwUq4",
  authDomain: "goldbee-30578.firebaseapp.com",
  projectId: "goldbee-30578",
  storageBucket: "goldbee-30578.appspot.com",
  messagingSenderId: "496216774885",
  appId: "1:496216774885:web:dc923d1e17950f4df05c0c",
  measurementId: "G-X4S34Z8WLL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

