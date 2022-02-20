import { useEffect, useState } from "react";
import { getBookCount } from "../../services/bookService";
import "./Home.css";

function Home() {
	const [numberOfBooks, setNumberOfBooks] = useState(0);
	async function fetchNumberOfBooks() {
		const res = await getBookCount();
		if (res) setNumberOfBooks(res);
		else alert("Failed to fetch number of books!");
	}

	useEffect(() => {
		fetchNumberOfBooks();
	}, []);

	return (
		<div className="home-container">
			<h1 id="welcome-title">Welcome to the Library App!</h1>
			<h2 id="first-h2-text">
				Here you can find and read {numberOfBooks} different &#128218;
			</h2>
			<h2 id="second-h2-text">Enjoy &#128512;</h2>
		</div>
	);
}

export default Home;
