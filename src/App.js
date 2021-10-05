import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
	return (
		<Router>
			<div className="app">
				<TopNavbar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer />
					</Route>
					<Route exact path="/:category">
						<ItemListContainer />
					</Route>
					<Route exact path="/product/:idProd">
						<ItemDetailContainer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
