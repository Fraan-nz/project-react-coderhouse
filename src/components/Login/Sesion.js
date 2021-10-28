import React, { useState } from "react";
import { useHistory } from "react-router";
import useUser from "../../hooks/useUser";
import ModalPortal from "../Modal/Modal";
import Login from "./Login";
import "./SesionButton.css";

export function SesionButton() {
	const [showModal, setShowModal] = useState(false);
	const { isLogged, logout } = useUser();
	const history = useHistory();

	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(false);
		logout();
		history.push("/");
	};
	const handleShowModal = () => {
		if (!isLogged) return setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{isLogged ? (
				<button className="sesion__btn" onClick={handleClick}>
					Logout
				</button>
			) : (
				<>
					<button className="sesion__btn" onClick={handleShowModal}>
						Login
					</button>
					{showModal && (
						<ModalPortal onClose={handleCloseModal}>
							<Login />
						</ModalPortal>
					)}
				</>
			)}
		</>
	);
}
