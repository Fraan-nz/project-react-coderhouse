import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import Checkout from "./components/Checkout/Checkout";
import Ticket from "./components/Ticket/Ticket";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";
import "./App.css";

function App() {
	return (
		<Router>
			<UserContextProvider>
				<CartContextProvider>
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
								<Route exact path="/checkout">
									<Checkout />
								</Route>
								<Route exact path="/ticket/:idTicket">
									<Ticket />
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
				</CartContextProvider>
			</UserContextProvider>
		</Router>
	);
}

export default App;
