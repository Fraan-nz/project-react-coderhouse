import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";
import MenuIcon from "./MenuIcon";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function TopNavbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="navbar">
			<span className="navbar__logo">LOGO</span>
			<MenuIcon open={open} onClick={handleClick} />
			<MenuList open={open} />
			<CartWidget />
		</nav>
	);
}

export default TopNavbar;
