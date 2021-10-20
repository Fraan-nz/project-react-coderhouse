import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import productsDb from "../../db/productsDb.json";
import { getData, getDataCategory } from "../../firebase";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
	const [data, setData] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		category
			? getDataCategory(category)
					.then((res) => setData(res))
					.catch((error) => {
						console.log(error);
					})
			: getData()
					.then((res) => setData(res))
					.catch((error) => {
						console.log(error);
					});
	}, [category]);
	return <ItemList products={data} />;
}

export default ItemListContainer;
