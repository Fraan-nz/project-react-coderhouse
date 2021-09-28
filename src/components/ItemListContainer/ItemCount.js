import React from "react";
import { useState } from "react";
import "./ItemCount.css";

function ItemCount(props) {
	const { name, initial, stock } = props;
	const [itemCount, setItemCount] = useState(initial);
	const countAdd = () => {
		if (itemCount < stock) setItemCount(itemCount + 1);
	};
	const countSub = () => {
		if (itemCount > 1) setItemCount(itemCount - 1);
	};
	return (
		<div className="item">
			<p className="item__name">{name}</p>
			<div className="item__input">
				<button className="item__minus" onClick={countSub}>
					-
				</button>
				<span className="item__count">{itemCount}</span>
				<button className="item__plus" onClick={countAdd}>
					+
				</button>
			</div>
			<button className="item__button">Agregar al carrito</button>
		</div>
	);
}

export default ItemCount;
