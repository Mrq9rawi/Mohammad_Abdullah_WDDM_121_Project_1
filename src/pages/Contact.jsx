import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Contact() {
	return (
		<main>
			<section>
				<Container>
					<Form className="d-flex flex-column">
						<Row className="mb-3 justify-content-center">
							<Form.Group as={Col} controlId="formGridName" md={4}>
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridEmail" md={4}>
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
						</Row>

						<Row className="mb-3 justify-content-center">
							<Form.Group as={Col} controlId="formGridPhone" md={4}>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="text" placeholder="Phone Number" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState" md={4}>
								<Form.Label>State</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>
						</Row>
						<Row>
							<Col md={8} className="mx-auto">
								<FloatingLabel controlId="floatingTextarea2" label="Question">
									<Form.Control
										as="textarea"
										placeholder="Leave a question here"
										style={{ height: "100px" }}
									/>
								</FloatingLabel>
							</Col>
						</Row>

						<Button variant="primary" type="submit" className="contact-form-submit">
							Submit
						</Button>
					</Form>
				</Container>
			</section>
		</main>
	);
}
