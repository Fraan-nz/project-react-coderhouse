import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

function CartWidget({ count = 4 }) {
	return (
		<>
			<FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
			<span className="cart-count">{count}</span>
		</>
	);
}

export default CartWidget;
