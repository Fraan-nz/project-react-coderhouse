import { useState } from "react";

function usePagination(data, itemsPerPage) {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(data.length / itemsPerPage);

	const currentData = () => {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data.slice(begin, end);
	};

	function jumpPage(page) {
		setCurrentPage(page);
	}

	return { jumpPage, currentData, currentPage, maxPage };
}

export default usePagination;
