import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
