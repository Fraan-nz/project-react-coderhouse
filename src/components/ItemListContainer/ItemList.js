import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";

const productos = [
	{
		id: 1,
		title: "Heineken",
		description: "Lata 710ml",
		price: 180,
		stock: 210,
		imgUrl:
			"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/heineken-7101-fa592411d4156daa5c16205731791588-640-0.jpg",
	},
	{
		id: 2,
		title: "Stella Artois",
		description: "Lata 473ml",
		price: 120,
		stock: 153,
		imgUrl:
			"https://img.alvearsupermercados.com.ar/Productos/Bebidas/Cervezas/stellaartois-602-1.png",
	},
	{
		id: 3,
		title: "Stella Artois Noire",
		description: "Lata 473ml",
		price: 130,
		stock: 78,
		imgUrl: "https://cepadevinos.com/wp-content/uploads/2021/02/00498337.jpg",
	},
	{
		id: 4,
		title: "Corona",
		description: "Botella 330ml",
		price: 170,
		stock: 111,
		imgUrl:
			"https://porter.com.py/image/cache/catalog/806/80660956411-500x500.jpg",
	},
];

function ItemList() {
	const [data, setData] = useState(productos);
	useEffect(() => {
		const promise = new Promise((res, rej) => {
			setTimeout(() => {
				if (productos !== "" && productos !== null) {
					res(productos);
				} else rej("Productos no existe o esta vacío");
			}, 2000);
		});
		promise
			.then((resolve) => setData(resolve))
			.catch((error) => {
				console.log(error);
			}, []);
	});
	return (
		<div className="item-list">
			{data.map((item) => {
				return (
					<Item
						name={item.title}
						initial={1}
						stock={item.stock}
						id={item.id}
						description={item.description}
						price={item.price}
						img={item.imgUrl}
					/>
				);
			})}
		</div>
	);
}

export default ItemList;
