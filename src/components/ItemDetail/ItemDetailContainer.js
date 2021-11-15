import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useCart } from "../../context/CartContext";
import { getDataById } from "../../firebase/index";
import { Spinner } from "../Spinner/Spinner";
import { Helmet } from "react-helmet";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);
	const { cartList } = useCart();
	const { idProd } = useParams();

	useEffect(() => {
		setLoading(true);
		getDataById(idProd)
			.then((res) => {
				setProduct(res);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [idProd]);
	return (
		<>
			{loading ? (
				<>
					<Helmet>
						<title>Cargando...</title>
					</Helmet>
					<Spinner />
				</>
			) : (
				Object.keys(product).length !== 0 && (
					<>
						<ItemDetail product={product} cartList={cartList} />
						<Helmet>
							<title>NAIG | {product.title}</title>
						</Helmet>
					</>
				)
			)}
		</>
	);
}
export default ItemDetailContainer;
