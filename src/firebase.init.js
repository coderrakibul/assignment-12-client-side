import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD3VkO93nUaTXAO8o-HuT31MGC8ewUmVRM",
    authDomain: "parts-car-11705.firebaseapp.com",
    projectId: "parts-car-11705",
    storageBucket: "parts-car-11705.appspot.com",
    messagingSenderId: "24261533386",
    appId: "1:24261533386:web:a5b9e5dec88c493684de33"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;