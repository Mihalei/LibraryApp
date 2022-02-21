import { Button } from "react-bootstrap";
import "./Shared.css";

interface IProps {
	input: any;
	setInput: any;
	startSearch: any;
	setStartSearch: any;
}

export const SearchInput: React.FC<IProps> = ({ input, setInput, startSearch, setStartSearch }) => {
	const onInputChange = (e: any) => {
		setInput(e.target.value);
	};

	const onSearchClick = (e: any) => {
		setStartSearch(!startSearch);
	};

	return (
		<div className="search-input">
			<input
				value={input}
				onChange={onInputChange}
				className="search-input"
				placeholder="Enter your search..."
			/>
			<Button onClick={onSearchClick} variant="secondary">
				Search
			</Button>
		</div>
	);
};
