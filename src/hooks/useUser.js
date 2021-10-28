import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUser() {
	const { user, regis, login, logout } = useContext(UserContext);

	return {
		isLogged: Boolean(user),
		user,
		regis,
		login,
		logout,
	};
}
