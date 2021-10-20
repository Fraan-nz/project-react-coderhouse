import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useCart } from "../../context/CartContext";
import { getDataById } from "../../firebase/index";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const { cartList } = useCart();
	const { idProd } = useParams();

	useEffect(() => {
		getDataById(idProd)
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
