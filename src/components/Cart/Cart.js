import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

function Cart(props) {
	const { item, delete: deleteItem } = props;
	return (
		<div className="cart__item">
			<img className="cart__item-img" src={item.imgUrl} alt={item.title} />
			<p className="cart__info">{item.title}</p>
			<p className="cart__info">{item.description}</p>
			<p className="cart__info">$ {item.price}</p>
			<p className="cart__info">x{item.quantity}</p>
			<p className="cart__info">$ {item.price * item.quantity}</p>
			<FontAwesomeIcon
				icon={faMinusCircle}
				onClick={() => deleteItem(item)}
				className="cart__item-icon"
			/>
		</div>
	);
}

export default Cart;
