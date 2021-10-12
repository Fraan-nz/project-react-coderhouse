import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productsDb from "../../db/productsDb.json";
import { useCart } from "../../context/CartContext";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const { cartList } = useCart();
	const { idProd } = useParams();
	const getItem = () => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				const prodSelected = productsDb.find((prod) => prod.id == idProd);
				if (prodSelected !== undefined) {
					res(prodSelected);
				} else {
					rej("ID Producto no encontrado");
				}
			}, 2000);
		});
	};
	useEffect(() => {
		getItem()
			.then((res) => setProduct(res))
			.catch((error) => {
				console.log(error);
			});
	}, [idProd]);
	return (
		<>
			{Object.keys(product).length !== 0 && (
				<ItemDetail product={product} cartList={cartList} />
			)}
		</>
	);
}
export default ItemDetailContainer;
