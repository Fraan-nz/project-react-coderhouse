import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
	return (
		<header className="App-header">
			<Navbar />
			<img src={logo} className="App-logo" alt="logo" />
			<p>My first react app. Franco Nuñez.</p>
		</header>
	);
}

export default App;
