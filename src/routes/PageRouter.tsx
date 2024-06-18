import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

function PageRouter() {
	return (
		<div className="bg-neutral-900">
			<BrowserRouter >
				<Nav />
				<div className="container mx-auto md:px-4 mb-72">
					<Routes >
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default PageRouter;
