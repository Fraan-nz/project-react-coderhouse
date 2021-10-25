import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import "./CartContainer.css";
import { setOrder, updateDb } from "../../firebase";
import user from "../../db/user.json";

function CartContainer() {
	const { deleteItem, cartTotal, cartClean, cartList } = useCart();

	return (
		<>
			{cartList.length > 0 ? (
				<div className="cart">
					<h2 className="cart__title">Carrito</h2>
					<div className="cart__details">
						<span className="cart__det-title">Producto</span>
						<span className="cart__det-price">Precio</span>
						<span className="cart__det-subt">Subtotal</span>
					</div>
					<div className="cart__list">
						{cartList.map((item, key) => {
							return <Cart key={key} item={item} delete={deleteItem} />;
						})}
					</div>
					<p className="cart__total">Total $ {cartTotal()}</p>
					<div className="cart__buttons">
						<button
							className="cart__btn cart__btn--clean"
							onClick={() => cartClean()}
						>
							Limpiar Carrito
						</button>
						<button
							className="cart__btn cart__btn--confirm"
							onClick={() => {
								setOrder(user, cartList, cartTotal());
								updateDb(cartList);
								cartClean();
							}}
						>
							Confirmar Compra
						</button>
					</div>
				</div>
			) : (
				<div className="cart__empty">
					<h2>Su carrito esta vacío</h2>
					<Link to="/">
						<FontAwesomeIcon icon={faArrowCircleLeft} className="cart__back" />
					</Link>
				</div>
			)}
		</>
	);
}

export default CartContainer;
