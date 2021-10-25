import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
	return (
		<Router>
			<CartProvider>
				<div className="app">
					<TopNavbar />
					<div className="app-container">
						<Switch>
							<Route exact path="/">
								<ItemListContainer />
							</Route>
							<Route exact path="/cart">
								<CartContainer />
							</Route>
							<Route exact path="/:category">
								<ItemListContainer />
							</Route>
							<Route exact path="/product/:idProd">
								<ItemDetailContainer />
							</Route>
						</Switch>
					</div>
				</div>
			</CartProvider>
		</Router>
	);
}

export default App;
