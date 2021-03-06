import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function PageNavBar() {
	return (
		<header>
			<Navbar>
				<Container>
					<h1 className="text-light">logo</h1>
					<Nav className="ms-auto">
						<Nav.Item>
							<Link
								text="light"
								className="nav-link text-light"
								to="/Mohammad_Abdullah_WDDM_121_Project_1/"
							>
								Home
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								className="nav-link text-light"
								to="/Mohammad_Abdullah_WDDM_121_Project_1/about"
							>
								About
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								className="nav-link text-light"
								to="/Mohammad_Abdullah_WDDM_121_Project_1/contact"
							>
								Contact
							</Link>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
