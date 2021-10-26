import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { getData, getDataCategory } from "../../firebase";
import usePagination from "../Pagination/usePagination";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import "../Pagination/Pagination.css";

function ItemListContainer() {
	const [data, setData] = useState([]);
	const { category } = useParams();
	const prodsPerPage = 10;
	const { jumpPage, currentData, maxPage } = usePagination(data, prodsPerPage);
	const changePage = ({ selected }) => {
		jumpPage(selected + 1);
	};
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
	return (
		<>
			<ItemList products={currentData()} />
			<ReactPaginate
				previousLabel={"<<"}
				nextLabel={">>"}
				pageCount={maxPage}
				initialPage={1}
				onPageChange={changePage}
				containerClassName={"paginate__container"}
				previousLinkClassName={"paginate__btn"}
				nextLinkClassName={"paginate__btn"}
				pageLinkClassName={"paginate__link"}
				activeLinkClassName={"paginate__active"}
			/>
		</>
	);
}

export default ItemListContainer;
