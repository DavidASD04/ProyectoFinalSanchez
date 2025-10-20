import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCvNovx6f3Ic2SNFItZ7uJmqbRJ2IzjvY",
    authDomain: "ecommerce-react-e650f.firebaseapp.com",
    projectId: "ecommerce-react-e650f",
    storageBucket: "ecommerce-react-e650f.firebasestorage.app",
    messagingSenderId: "658776847723",
    appId: "1:658776847723:web:5c4015d619d5779e82082e",
    measurementId: "G-0VZ28M7F4M"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener referencia a Firestore
export const db = getFirestore(app);
