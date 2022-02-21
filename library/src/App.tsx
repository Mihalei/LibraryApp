import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Members from "./components/Members/Members";
import Borrowings from "./components/Borrowings/Borrowings";
import Layout from "./components/Layout/Layout";
import AddBook from "./components/Books/AddBook";
import UpdateBook from "./components/Books/UpdateBook";

function App() {
	return (
		<div className="app">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/books" element={<Books />} />
						<Route path="/books/add-book" element={<AddBook />} />
						<Route path="/books/update-book/:id" element={<UpdateBook />} />
						<Route path="/members" element={<Members />} />
						<Route path="/borrowings" element={<Borrowings />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
