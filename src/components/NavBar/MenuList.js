import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./MenuList.css";

function MenuList(props) {
	const { open, menuClick } = props;
	return (
		<ul className={open ? "navbar__list active" : "navbar__list"}>
			{MenuItems.map((item, index) => {
				return (
					<li key={index}>
						<Link to={item.url} className={item.cName} onClick={menuClick}>
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default MenuList;
