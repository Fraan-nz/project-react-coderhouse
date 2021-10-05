import React, { useState } from "react";
import ItemInput from "../ItemListContainer/ItemInput";
import "./ItemDetail.css";

function ItemDetail({ product }) {
	const [itemCount, setItemCount] = useState(1);
	const countAdd = () => {
		if (itemCount < product.stock) setItemCount(itemCount + 1);
	};
	const countSub = () => {
		if (itemCount > 1) setItemCount(itemCount - 1);
	};
	return (
		<div className="detail">
			<img className="detail__img" src={product.imgUrl} alt={product.title} />
			<div className="detail__container">
				<h2 className="detail__title">{product.title}</h2>
				<p className="detail__desc">{product.description}</p>
				<p className="detail__price">$ {product.price}</p>
				<ItemInput onAdd={countAdd} onSub={countSub} count={itemCount} />
				<span className="detail__stock">stock: {product.stock}</span>
			</div>
		</div>
	);
}

export default ItemDetail;
