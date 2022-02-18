import "./Body.css";

function Body() {
	const nubmerOfBooks = 1000;

	return (
		<div className="body-container">
			<h1 id="welcome-title">Welcome to the Library App!</h1>
			<h2 id="first-h2-text">Here you can read more than {nubmerOfBooks} different books</h2>
			<h2 id="second-h2-text">Enjoy &#128512;</h2>
		</div>
	);
}

export default Body;
