import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function PageFooter() {
	return (
		<footer className="py-3">
			<Nav className="justify-content-center border-bottom pb-3 mb-3">
				<Nav.Item>
					<Link text="light" className="nav-link hover-d-dark px-2 text-light" to="/">
						Home
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link px-2 text-light" to="/about">
						About
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link px-2 text-light" to="/contact">
						Contact
					</Link>
				</Nav.Item>
			</Nav>
			<p className="text-center text-light">© 2022 Company, Inc</p>
		</footer>
	);
}
