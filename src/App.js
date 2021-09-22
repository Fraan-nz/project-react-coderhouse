import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<TopNavbar />
			<main className="App-main">
				<ItemListContainer textTitle="Catalogo" />
			</main>
		</>
	);
}

export default App;
