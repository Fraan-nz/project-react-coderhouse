import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemInput.css";

function ItemInput(props) {
	const { product } = props;
	const [itemCount, setItemCount] = useState(1);
	const countAdd = () => {
		if (itemCount < product.stock) setItemCount(itemCount + 1);
	};
	const countSub = () => {
		if (itemCount > 1) setItemCount(itemCount - 1);
	};
	const { addCart } = useCart();
	return (
		<>
			<div className="item__input">
				<button className="item__minus" onClick={countSub}>
					-
				</button>
				<span className="item__count">{itemCount}</span>
				<button className="item__plus" onClick={countAdd}>
					+
				</button>
			</div>
			<button
				className="item__button"
				onClick={() => {
					addCart(product, itemCount);
					setItemCount(1);
				}}
			>
				Agregar al carrito
			</button>
		</>
	);
}

export default ItemInput;
