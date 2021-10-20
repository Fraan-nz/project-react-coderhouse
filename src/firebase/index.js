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
import db from "./firebaseConfig";

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
//Crear orden y guardar en db
export const setOrder = async (user, orderList, total) => {
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
	await addDoc(collection(db, "cart"), {
		buyer: user,
		items: list,
		total: total,
		date: today,
	});
};
