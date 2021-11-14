import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Spinner } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { getData, getDataCategory } from "../../firebase";
import usePagination from "../Pagination/usePagination";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import "../Pagination/Pagination.css";
import { Helmet } from "react-helmet";

function ItemListContainer() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const { category } = useParams();
	const prodsPerPage = 10;
	const { jumpPage, currentData, maxPage } = usePagination(data, prodsPerPage);
	const changePage = ({ selected }) => {
		jumpPage(selected + 1);
	};
	let title;
	if (category) {
		title = category === "comercial" ? "Comerciales" : "Artesalanes";
	} else title = "Home";

	useEffect(() => {
		setLoading(true);
		category
			? getDataCategory(category)
					.then((res) => {
						setData(res);
						setLoading(false);
					})
					.catch((error) => {
						console.log(error);
					})
			: getData()
					.then((res) => {
						setData(res);
						setLoading(false);
					})
					.catch((error) => {
						console.log(error);
					});
	}, [category]);
	return (
		<>
			{loading ? (
				<>
					<Spinner />
					<Helmet>
						<title>Cargando...</title>
					</Helmet>
				</>
			) : (
				<>
					<Helmet>
						<title>{title} | NAIG</title>
						<meta
							name="description"
							content="NAIG tu delivery favorito 24/7"
						></meta>
					</Helmet>
					<ItemList products={currentData()} />
					<ReactPaginate
						previousLabel={"<<"}
						nextLabel={">>"}
						pageCount={maxPage}
						onPageChange={changePage}
						containerClassName={"paginate__container"}
						previousLinkClassName={"paginate__btn"}
						nextLinkClassName={"paginate__btn"}
						pageLinkClassName={"paginate__link"}
						activeLinkClassName={"paginate__active"}
					/>
				</>
			)}
		</>
	);
}

export default ItemListContainer;
