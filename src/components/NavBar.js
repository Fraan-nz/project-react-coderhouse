import "./NavBar.css";
import logo from "../logo.svg";

function Navbar() {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand brand-container" href="#">
					<img
						src={logo}
						alt="logo"
						className="d-inline-block align-text-top logo-img"
					/>
					MyApp
				</a>
				<ul class="nav justify-content-end">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
