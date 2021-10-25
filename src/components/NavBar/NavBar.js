import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";
import MenuIcon from "./MenuIcon";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function TopNavbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="navbar">
			<MenuIcon open={open} onClick={handleClick} />
			<Link to="/" className="navbar__logo-link">
				<img className="navbar__logo" src="../images/logo.png" alt="logo" />
				<img
					className="navbar__logo-mobile"
					src="../images/logo-mobile.png"
					alt="logo"
				/>
			</Link>
			<MenuList open={open} />
			<Link to="/cart" className="navbar__logo-link">
				<CartWidget />
			</Link>
		</nav>
	);
}

export default TopNavbar;
