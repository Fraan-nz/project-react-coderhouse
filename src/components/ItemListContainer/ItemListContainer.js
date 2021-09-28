import React from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

function ItemListContainer() {
	return (
		<div className="item-list">
			<ItemCount name="Andes" initial={1} stock="15" />
		</div>
	);
}

export default ItemListContainer;
