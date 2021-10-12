import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider(props) {
	const [cartList, setCartList] = useState(
		() => JSON.parse(window.sessionStorage.getItem("beerCart")) || []
	);

	const addCart = (item, quantity) => {
		const inCart = cartList.find((element) => element.id === item.id);
		if (!inCart) {
			const newCart = [...cartList, { ...item, quantity: quantity }];
			setCartList(newCart);
			window.sessionStorage.setItem("beerCart", JSON.stringify(newCart));
		} else {
			const currentCart = cartList.map((element) => {
				if (element.id === item.id) {
					return { ...item, quantity: quantity + element.quantity };
				}
				return element;
			});
			setCartList(currentCart);
			window.sessionStorage.setItem("beerCart", JSON.stringify(currentCart));
		}
	};

	const deleteItem = (item) => {
		const newCart = cartList.filter((element) => element.id !== item.id);
		setCartList(newCart);
		window.sessionStorage.setItem("beerCart", JSON.stringify(newCart));
	};

	const cartTotal = () => {
		let total = 0;
		cartList.forEach((element) => {
			total += element.price * element.quantity;
		});
		return total;
	};

	const cartTotalQuantity = () => {
		let totalQuantity = 0;
		cartList.forEach((element) => {
			totalQuantity += element.quantity;
		});
		return totalQuantity;
	};

	const cartClean = () => {
		setCartList([]);
		window.sessionStorage.removeItem("beerCart");
	};

	return (
		<CartContext.Provider
			value={{
				addCart,
				deleteItem,
				cartTotal,
				cartClean,
				cartTotalQuantity,
				cartList,
			}}
			{...props}
		/>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	return context;
}
