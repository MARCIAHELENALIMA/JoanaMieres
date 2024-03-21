// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFzUXJ5TyRo0HOnW3SN4Z-GPVw4eBT1NQ",
    authDomain: "joanemieres.firebaseapp.com",
    projectId: "joanemieres",
    storageBucket: "joanemieres.appspot.com",
    messagingSenderId: "394963474179",
    appId: "1:394963474179:web:0bddc532acb94f0dbb7b36"
};

// Initialize Firebase
const App = () => { initializeApp(firebaseConfig); }


export default App;