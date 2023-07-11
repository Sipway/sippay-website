import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAroPepmZmtF6QoF0T3dcx8d-mtXww13VI",
    authDomain: "sippay-2ad1c.firebaseapp.com",
    projectId: "sippay-2ad1c",
    storageBucket: "sippay-2ad1c.appspot.com",
    messagingSenderId: "19198165715",
    appId: "1:19198165715:web:5e9e53d30e3ae0a7a78a26",
    measurementId: "G-XD2H0RDCFQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

