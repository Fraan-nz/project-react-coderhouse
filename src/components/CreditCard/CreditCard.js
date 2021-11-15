import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function CreditCard({ onValidate }) {
	const [number, setNumber] = useState("");
	const [name, setName] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvc, setCvc] = useState("");
	const [focus, setFocus] = useState("");
	const validate = /^[0-9\b]+$/;

	const handleChangeNum = (e) => {
		if (e.target.value.length < 17) {
			if (e.target.value === "" || validate.test(e.target.value)) {
				setNumber(e.target.value);
			}
		}
	};
	const handleChangeExp = (e) => {
		if (e.target.value.length < 5) {
			if (e.target.value === "" || validate.test(e.target.value)) {
				setExpiry(e.target.value);
			}
		}
	};
	const handleChangeCvc = (e) => {
		if (e.target.value.length < 5) {
			if (e.target.value === "" || validate.test(e.target.value)) {
				setCvc(e.target.value);
			}
		}
	};

	useEffect(() => {
		if (
			number.length === 16 &&
			name.length !== 0 &&
			cvc.length > 2 &&
			cvc.length < 5 &&
			expiry.length === 4
		) {
			onValidate(true);
		} else {
			onValidate(false);
		}
	}, [number, name, cvc, expiry, onValidate]);

	return (
		<>
			<Cards
				number={number}
				name={name}
				expiry={expiry}
				cvc={cvc}
				focused={focus}
			/>

			<form className="card__form">
				<div className="card__data">
					<label className="checkout__label checkout__label--mid">
						Número tarjeta
						<input
							type="text"
							name="number"
							value={number}
							onChange={(e) => handleChangeNum(e)}
							onFocus={(e) => setFocus(e.target.name)}
							className="checkout__input"
							required
						/>
					</label>

					<label className="checkout__label checkout__label--mid">
						Nombre tarjeta
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							onFocus={(e) => setFocus(e.target.name)}
							className="checkout__input"
							required
						/>
					</label>
				</div>

				<div className="card__data">
					<label className="checkout__label checkout__label--small">
						Vencimiento
						<input
							type="text"
							name="expiry"
							value={expiry}
							onChange={(e) => handleChangeExp(e)}
							onFocus={(e) => setFocus(e.target.name)}
							className="checkout__input"
							required
						/>
					</label>

					<label className="checkout__label checkout__label--small">
						CVV
						<input
							type="text"
							name="cvc"
							value={cvc}
							onChange={(e) => handleChangeCvc(e)}
							onFocus={(e) => setFocus(e.target.name)}
							className="checkout__input"
							required
						/>
					</label>
				</div>
			</form>
		</>
	);
}
