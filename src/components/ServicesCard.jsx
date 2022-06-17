import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function CardComp(props) {
	return (
		<Col md={4} className="my-4">
			<Card className="text-center">
				<Card.Body className="service">
					<i className={props.card.icon}></i>
					<Card.Title className="my-4 fw-bolder fs-3">{props.card.title}</Card.Title>
					<Card.Text>{props.card.text}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}
