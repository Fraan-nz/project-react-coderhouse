import React from "react";
import { useState } from "react";
import "./Item.css";

function Item(props) {
	const { name, initial, stock, id, description, price, img } = props;
	const [itemCount, setItemCount] = useState(initial);
	const countAdd = () => {
		if (itemCount < stock) setItemCount(itemCount + 1);
	};
	const countSub = () => {
		if (itemCount > 1) setItemCount(itemCount - 1);
	};
	return (
		<div className="item" id={id}>
			<p className="item__name">{name}</p>
			<img className="item__img" src={img} alt={name} />
			<p className="item__desc">{description}</p>
			<p className="item__price">$ {price}</p>
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

export default Item;
