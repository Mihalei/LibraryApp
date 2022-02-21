import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Book } from "../../models/book";
import { bookSearchOptions } from "../../models/search";
import {
	getAllBooks,
	getAllBooksFromAuthor,
	getAllBooksWithTitle,
	getBook,
} from "../../services/bookService";
import { SearchInput } from "../../shared-compnents/SearchInput";
import { SearchOptions } from "../../shared-compnents/SearchOptions";
import { useNavigate } from "react-router-dom";
import "./Books.css";

function Books() {
	const [searchType, setSearchType] = useState("Search by");
	const [books, setBooks] = useState<Book[]>([]);
	const [searchValue, setSearchValue] = useState("");
	const [startSearch, triggerStartSearch] = useState(false);
	const navigate = useNavigate();

	async function fetchBooks() {
		let res: Book[] | undefined;
		switch (searchType) {
			case bookSearchOptions.ByAuthor:
				res = await getAllBooksFromAuthor(searchValue);
				if (res) setBooks(res);
				else alert("Error while finding books.");
				return;
			case bookSearchOptions.ById:
				const r = await getBook(searchValue);
				if (r) setBooks([r]);
				else alert("Error while finding book.");
				return;
			case bookSearchOptions.ByTitle:
				res = await getAllBooksWithTitle(searchValue);
				if (res) setBooks(res);
				else alert("Error while finding books.");
				return;
			default:
				res = await getAllBooks();
				if (res) setBooks(res);
				else alert("Error while loading books.");
				return;
		}
	}

	const onRowClick = (bookId: string) => {
		navigate(`/books/update-book/${bookId}`);
	};

	useEffect(() => {
		fetchBooks();
	}, [startSearch]);

	return (
		<div className="books">
			<div className="books-container">
				<div className="books-title-container">
					<h4>Books</h4>
					<div className="books-actions-container">
						<SearchOptions
							options={bookSearchOptions}
							select={searchType}
							setSelect={setSearchType}
						/>
						<SearchInput
							input={searchValue}
							setInput={setSearchValue}
							startSearch={startSearch}
							setStartSearch={triggerStartSearch}
						/>
						<Button variant="success" onClick={() => navigate("/books/add-book")}>
							New
						</Button>
					</div>
				</div>
				<div className="books-table-container">
					<Table bordered hover>
						<thead>
							<tr>
								<th>Id</th>
								<th>Title</th>
								<th>Author</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{books.map((b) => (
								<tr key={b.id} onClick={() => onRowClick(b.id)}>
									<td>{b.id}</td>
									<td>{b.title}</td>
									<td>{b.author}</td>
									<td>{b.amount}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}

export default Books;
function useHistory() {
	throw new Error("Function not implemented.");
}
