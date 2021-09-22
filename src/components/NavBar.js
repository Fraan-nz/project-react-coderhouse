import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function TopNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt="logo"
						src={logo}
						width="50"
						height="50"
						className="d-inline-block align-center"
					/>
					MyApp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="custom-navbar justify-content-end"
				>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#section1">Section 1</Nav.Link>
						<Nav.Link href="#section2">Section 2</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<CartWidget />
			</Container>
		</Navbar>
	);
}

export default TopNavbar;
