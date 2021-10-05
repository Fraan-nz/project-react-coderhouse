import React, { useState } from "react";
import ItemInput from "./ItemInput";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
	const { name, stock, id, description, price, img } = props;
	const [itemCount, setItemCount] = useState(1);
	const countAdd = () => {
		if (itemCount < stock) setItemCount(itemCount + 1);
	};
	const countSub = () => {
		if (itemCount > 1) setItemCount(itemCount - 1);
	};
	return (
		<div className="item" id={id}>
			<Link to={`/product/${id}`} className="item__link">
				<p className="item__name">{name}</p>
				<img className="item__img" src={img} alt={name} />
				<p className="item__desc">{description}</p>
				<p className="item__price">$ {price}</p>
			</Link>
			<ItemInput onAdd={countAdd} onSub={countSub} count={itemCount} />
		</div>
	);
}

export default Item;
