import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

function CartWidget({ count = 3 }) {
	return (
		<div className="menu-cart">
			<FontAwesomeIcon icon={faShoppingCart} className="menu-cart__icon" />
			<span className="menu-cart__count">{count}</span>
		</div>
	);
}

export default CartWidget;
