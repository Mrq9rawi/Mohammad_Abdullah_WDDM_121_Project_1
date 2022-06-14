import React from "react";
import aboutImage from "../img/about-image.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function About() {
	return (
		<main>
			<section className="about" id="about">
				<Container>
					<Row className="justify-space-between">
						<Col md={6} className="align-self-center">
							<h4>
								My name is Mohammad Abdullah, I'm 20 years old, living in Toronto. I'm currently
								studying Web Development at Humber College, I finished a web Development Program at
								Conestoga College in 2021. I started programming when I was 17 and became interested
								in web design and Front-End Development in 2020. Since then I have been learning new
								technologies by working on web design projects.
							</h4>
						</Col>
						<Col md={6} className="align-self-center">
							<img src={aboutImage} alt="" className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</section>
		</main>
	);
}
