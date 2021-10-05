import React from "react";
import "./ItemInput.css";

function ItemInput(props) {
	const { onAdd, onSub, count } = props;
	return (
		<>
			<div className="item__input">
				<button className="item__minus" onClick={onSub}>
					-
				</button>
				<span className="item__count">{count}</span>
				<button className="item__plus" onClick={onAdd}>
					+
				</button>
			</div>
			<button className="item__button">Agregar al carrito</button>
		</>
	);
}

export default ItemInput;
