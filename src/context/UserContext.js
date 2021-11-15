import React, { createContext, useEffect, useState } from "react";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
		});
	}, []);

	const regis = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password).catch((err) =>
			console.log(err.message)
		);
	};

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password).catch((err) =>
			console.log(err.message)
		);
	};

	const logout = () => {
		signOut(auth);
	};

	return (
		<UserContext.Provider value={{ user, regis, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}
