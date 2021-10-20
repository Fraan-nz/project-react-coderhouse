//Importo Firebase y Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuracion
const firebaseConfig = {
	apiKey: "AIzaSyD7vlBOciEh31m1MXvzSqlVbc15FpFQRqk",
	authDomain: "project-react-coderhouse.firebaseapp.com",
	projectId: "project-react-coderhouse",
	storageBucket: "project-react-coderhouse.appspot.com",
	messagingSenderId: "925407180026",
	appId: "1:925407180026:web:30157cffe2039b65144543",
};

// Inicializo Firebase
const app = initializeApp(firebaseConfig);
// Inicializo Firestore
const db = getFirestore(app);

export default db;
