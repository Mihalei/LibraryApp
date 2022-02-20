import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Members from "./components/Members/Members";
import Borrowings from "./components/Borrowings/Borrowings";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<div className="app">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/books" element={<Books />} />
						<Route path="/members" element={<Members />} />
						<Route path="/borrowings" element={<Borrowings />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
