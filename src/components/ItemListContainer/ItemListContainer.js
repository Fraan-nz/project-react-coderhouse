import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsDb from "../../db/productsDb.json";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
	const [data, setData] = useState([]);
	const { category } = useParams();
	const getItems = () => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				if (productsDb.length > 0 && productsDb !== null) {
					if (category) {
						const filterCategory = productsDb.filter(
							(item) => item.category === category
						);
						res(filterCategory);
					} else {
						res(productsDb);
					}
				} else rej("Productos no existe o esta vacío");
			}, 2000);
		});
	};
	useEffect(() => {
		getItems()
			.then((res) => setData(res))
			.catch((error) => {
				console.log(error);
			});
	}, [category]);

	return <ItemList products={data} />;
}

export default ItemListContainer;
