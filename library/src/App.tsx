import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
}

export default App;
