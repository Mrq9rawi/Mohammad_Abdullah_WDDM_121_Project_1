import React from "react";
import Container from "react-bootstrap/Container";
import ServicesCard from "../components/ServicesCard";
import Row from "react-bootstrap/Row";
import servicesCards from "../servicesCards.json";

export default function Home() {
	const cardsComp = servicesCards.map((card) => {
		return <ServicesCard key={card.id} card={card} />;
	});

	return (
		<main>
			<section id="landing" className="landing d-flex align-items-center p-relative">
				<Container>
					<h1 className="fs-4 p-relative">
						Hello, I'm
						<span className="my-name fs-1 d-block"> Mohammad Abdullah </span>
						<span className="my-title fs-3">Front End Developer</span>
					</h1>
				</Container>
			</section>
			<section>
				<Container>
					<Row className="flex-wrap">{cardsComp}</Row>
				</Container>
			</section>
		</main>
	);
}
