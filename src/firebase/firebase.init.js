// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXUEzCM_6nHxs6bBubSHqO1iJP-XMn060",
    authDomain: "my-first-project-1a9b1.firebaseapp.com",
    projectId: "my-first-project-1a9b1",
    storageBucket: "my-first-project-1a9b1.appspot.com",
    messagingSenderId: "240933451250",
    appId: "1:240933451250:web:6e06255fe518dd751f676b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;