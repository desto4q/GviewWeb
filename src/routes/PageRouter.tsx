import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../components/Nav";

function PageRouter() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default PageRouter;
