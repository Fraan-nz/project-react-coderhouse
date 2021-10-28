import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import "./Login.css";

export default function Login() {
	const [register, setRegister] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, regis } = useUser();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (register) {
			regis(email, password);
		} else {
			login(email, password);
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2 className="form__title">
				{register ? "Regístrate" : "Inicia Sesión"}
			</h2>
			<label className="form__label">
				Email
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form__input"
				/>
			</label>
			<label className="form__label">
				Contraseña
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="form__input"
				/>
			</label>
			<div className="form__buttons">
				<button type="submit" className="form__button">
					{register ? "Registrarme" : "Iniciar Sesión"}
				</button>
				<button
					className="form__button"
					onClick={() => setRegister(!register)}
					type="button"
				>
					{register ? "Ya tengo cuenta" : "Quiero registrarme"}
				</button>
			</div>
		</form>
	);
}
