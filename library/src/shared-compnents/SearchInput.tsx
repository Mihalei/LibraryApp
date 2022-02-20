import { Button } from "react-bootstrap";
import "./Shared.css";

export const SearchInput = () => {
	return (
		<div className="search-input">
			<input className="search-input" placeholder="Enter your search..."></input>
			<Button variant="secondary">Search</Button>
		</div>
	);
};
