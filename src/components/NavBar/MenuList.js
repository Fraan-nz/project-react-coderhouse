import React from "react";
import { MenuItems } from "./MenuItems";
import "./MenuList.css";

function MenuList(props) {
	const { open } = props;
	return (
		<ul className={open ? "navbar__list active" : "navbar__list"}>
			{MenuItems.map((item, index) => {
				return (
					<li key={index}>
						<a href={item.url} className={item.cName}>
							{item.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default MenuList;