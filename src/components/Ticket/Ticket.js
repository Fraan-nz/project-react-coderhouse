import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../Spinner/Spinner";
import "./Ticket.css";

export default function Ticket() {
	const [loading, setLoading] = useState(false);
	const [order, setOrder] = useState({});
	const { idTicket } = useParams();
	const history = useHistory();
	let date = [];
	let hr = [];

	useEffect(() => {
		setLoading(true);
		getOrderById(idTicket)
			.then((res) => {
				setOrder(res);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [idTicket]);

	if (Object.keys(order).length !== 0) {
		const orderDate = order.date.toDate();
		date[0] = orderDate.getDate();
		date[1] = orderDate.getMonth() + 1;
		date[2] = orderDate.getFullYear();
		hr[0] = orderDate.getHours();
		hr[1] = orderDate.getMinutes();
	}

	setTimeout(() => {
		history.push("/");
	}, 25000);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				Object.keys(order).length !== 0 && (
					<>
						<div className="ticket">
							<h2 className="ticket__title">Naig Delivery</h2>
							<p className="ticket__text">Ticket: {idTicket}</p>
							<p className="ticket__text">
								{order.buyer.lastname} {order.buyer.name}
							</p>
							<p className="ticket__text">{order.buyer.direction}</p>
							<hr className="ticket__hr" />
							{order.items.map((item, key) => (
								<div key={key} className="ticket__detail">
									<p className="ticket__prod">{item.name}</p>
									<p className="ticket__prod">x {item.quantity}</p>
									<p className="ticket__prod">$ {item.price} c/u</p>
								</div>
							))}
							<p className="ticket__total">Total $ {order.total}</p>
							<p className="ticket__text">
								{date[0]}/{date[1]}/{date[2]}
							</p>
							<p className="ticket__text">
								{hr[0]}:{hr[1]}
							</p>
						</div>
						<Link to="/">
							<FontAwesomeIcon
								icon={faArrowCircleLeft}
								className="ticket__back"
							/>
						</Link>
					</>
				)
			)}
		</>
	);
}
