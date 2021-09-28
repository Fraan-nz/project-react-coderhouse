import TopNavbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
	return (
		<div className="app">
			<TopNavbar />
			<ItemListContainer textTitle="Catalogo" />
		</div>
	);
}

export default App;
