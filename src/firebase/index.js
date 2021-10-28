import {
	collection,
	getDocs,
	where,
	query,
	doc,
	getDoc,
	addDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

//Obtengo todos los docs de la base de datos
export const getData = async () => {
	const dbData = await getDocs(collection(db, "products"));
	const products = dbData.docs.map((doc) => {
		return { id: doc.id, ...doc.data() };
	});
	return products;
};
//Obtengo todos los docs de la base de datos segun category
export const getDataCategory = async (category) => {
	const filterQuery = query(
		collection(db, "products"),
		where("category", "==", category)
	);
	const prodCategory = await getDocs(filterQuery);
	const products = prodCategory.docs.map((doc) => {
		return { id: doc.id, ...doc.data() };
	});
	return products;
};
//Obtengo doc segund su id
export const getDataById = async (id) => {
	const productId = doc(db, "products", id);
	const produdct = await getDoc(productId);
	return { id: id, ...produdct.data() };
};
//Obtengo doc segund su id
export const getOrderById = async (id) => {
	const orderId = doc(db, "cart", id);
	const order = await getDoc(orderId);
	return { id: id, ...order.data() };
};
//Crear orden y guardar en db
export const setOrder = async (
	name,
	lastname,
	direction,
	currentUser,
	orderList,
	total
) => {
	const today = new Date();
	const list = orderList.map((prod) => {
		return {
			id: prod.id,
			name: prod.title,
			price: prod.price,
			quantity: prod.quantity,
			subtotal: prod.price * prod.quantity,
		};
	});
	const newDoc = await addDoc(collection(db, "cart"), {
		buyer: {
			name,
			lastname,
			direction,
			email: currentUser,
		},
		items: list,
		total: total,
		date: today,
	});
	return newDoc._key.path.segments[1]; //Retorno la id de la orden
};
//Actualizar db
export const updateDb = async (orderList) => {
	for (const prod of orderList) {
		const prodId = prod.id;
		const orderQuantity = prod.quantity;
		const actualProd = doc(db, "products", prodId);
		const product = await getDoc(actualProd);
		const actualStock = product.data().stock;
		await updateDoc(actualProd, {
			stock: actualStock - orderQuantity,
		});
	}
};
