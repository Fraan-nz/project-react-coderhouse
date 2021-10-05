import Item from "./Item";
import "./ItemList.css";

function ItemList({ products }) {
	return (
		<div className="item-list">
			{products.length > 0 &&
				products.map((item, key) => {
					return (
						<Item
							key={key}
							name={item.title}
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
