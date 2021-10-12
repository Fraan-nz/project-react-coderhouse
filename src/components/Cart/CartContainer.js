import React from "react";
import { useCart } from "../../context/CartContext";
import Cart from "./Cart";
import "./CartContainer.css";

function CartContainer() {
	const { deleteItem, cartTotal, cartClean, cartList } = useCart();

	return (
		<>
			{cartList.length > 0 ? (
				<div className="cart">
					<h2 className="cart__title">Carrito</h2>
					{cartList.map((item, key) => {
						return <Cart key={key} item={item} delete={deleteItem} />;
					})}
					<p>Total $ {cartTotal()}</p>
					<button className="cart__clean" onClick={cartClean}>
						Limpiar Carrito
					</button>
				</div>
			) : (
				<h2>Su carrito esta vacío</h2>
			)}
		</>
	);
}

export default CartContainer;
