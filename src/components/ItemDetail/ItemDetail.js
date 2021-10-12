import React from "react";
import ItemInput from "./ItemInput";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail(props) {
	const { product, cartList } = props;
	const actualiceStock = cartList.find((element) => product.id === element.id);
	return (
		<div className="detail">
			<img className="detail__img" src={product.imgUrl} alt={product.title} />
			<div className="detail__container">
				<h2 className="detail__title">{product.title}</h2>
				<p className="detail__desc">{product.description}</p>
				<p className="detail__price">$ {product.price}</p>
				<ItemInput product={product} />
				<Link to="/cart">
					<button className="item__button">Ir al carrito</button>
				</Link>
				<span className="detail__stock">
					stock:
					{actualiceStock
						? product.stock - actualiceStock.quantity
						: product.stock}
				</span>
			</div>
		</div>
	);
}

export default ItemDetail;
