import React from "react";
import Container from "react-bootstrap/Container";
import ServicesCard from "../components/ServicesCard";
import Row from "react-bootstrap/Row";
import servicesCards from "../servicesCards.json";
import Carousel from "react-bootstrap/Carousel";
import slideOneImage from "../img/slide-one.jpg";
import slideTwoImage from "../img/slide-two.jpg";
import slideThreeImage from "../img/slide-three.jpg";

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
						<span className="my-name fs-1 d-block fw-bolder "> Mohammad Abdullah </span>
						<span className="my-title fs-3">Front End Developer</span>
					</h1>
				</Container>
			</section>
			<section className="slide-show" id="slide-show">
				<Container>
					<Carousel>
						<Carousel.Item interval={2000}>
							<img className="d-block w-100" src={slideOneImage} alt="First slide" />
							<Carousel.Caption>
								<h3>Fast Support</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img className="d-block w-100" src={slideTwoImage} alt="Second slide" />
							<Carousel.Caption>
								<h3>Multi Languages</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img className="d-block w-100" src={slideThreeImage} alt="Third slide" />
							<Carousel.Caption>
								<h3>Experienced Team</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>
			</section>
			<section className="services">
				<Container>
					<Row className="flex-wrap">{cardsComp}</Row>
				</Container>
			</section>
		</main>
	);
}
