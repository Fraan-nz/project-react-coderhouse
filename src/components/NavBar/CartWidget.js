import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
	const { cartTotalQuantity } = useCart();
	return (
		<div className="menu-cart">
			<FontAwesomeIcon icon={faShoppingCart} className="menu-cart__icon" />
			<span className="menu-cart__count">{cartTotalQuantity()}</span>
		</div>
	);
}

export default CartWidget;
