import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
	const { name, id, description, price, img } = props;
	return (
		<Link to={`/product/${id}`} className="item__link">
			<div className="item" id={id}>
				<p className="item__name">{name}</p>
				<img className="item__img" src={img} alt={name} />
				<p className="item__desc">{description}</p>
				<p className="item__price">$ {price}</p>
			</div>
		</Link>
	);
}

export default Item;
