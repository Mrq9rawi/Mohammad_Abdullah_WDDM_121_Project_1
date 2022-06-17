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
					<Route path="/Mohammad_Abdullah_WDDM_121_Project_1/" element={<Home />} />
					<Route path="/Mohammad_Abdullah_WDDM_121_Project_1/about" element={<About />} />
					<Route path="/Mohammad_Abdullah_WDDM_121_Project_1/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
