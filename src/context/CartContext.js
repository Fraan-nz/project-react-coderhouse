import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
	const [cartList, setCartList] = useState(
		() => JSON.parse(window.sessionStorage.getItem("beerCart")) || []
	);

	const addCart = (item, quantity) => {
		//Compruebo si el item ya esta en el carro
		const inCart = cartList.find((element) => element.id === item.id);
		if (!inCart) {
			//Si no esta en el carro, creo un carro nuevo
			const newCart = [...cartList, { ...item, quantity: quantity }];
			setCartList(newCart);
			window.sessionStorage.setItem("beerCart", JSON.stringify(newCart));
		} else {
			//Si ya esta en el carro, actualizo la cantidad
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
		//Filtro y guardo todos los items menos el que coincide con la id
		const newCart = cartList.filter((element) => element.id !== item.id);
		setCartList(newCart);
		window.sessionStorage.setItem("beerCart", JSON.stringify(newCart));
	};

	const cartTotal = () => {
		//Saco el total por cada item de la misma id
		let total = 0;
		cartList.forEach((element) => {
			total += element.price * element.quantity;
		});
		return total;
	};

	const cartTotalQuantity = () => {
		//Cantidad total de items en el carrito
		let totalQuantity = 0;
		cartList.forEach((element) => {
			totalQuantity += element.quantity;
		});

		if (totalQuantity !== 0) return totalQuantity;
		return "";
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
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	return context;
}
