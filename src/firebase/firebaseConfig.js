import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuracion
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Inicializo Firebase
const app = initializeApp(firebaseConfig);
// Inicializo Firestore
export const db = getFirestore(app);
// Inicializo Authentication
export const auth = getAuth(app);
