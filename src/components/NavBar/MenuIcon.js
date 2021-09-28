import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MenuIcon.css";

function MenuIcon(props) {
	console.log(props);
	return (
		<div className="navbar__menu-icon" onClick={props.onClick}>
			<FontAwesomeIcon
				icon={props.open ? faTimes : faBars}
				className="menu-icon"
			/>
		</div>
	);
}

export default MenuIcon;
