import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Book } from "../../models/book";
import { bookSearchOptions } from "../../models/search";
import { getBooks } from "../../services/bookService";
import { SearchInput } from "../../shared-compnents/SearchInput";
import { SearchOptions } from "../../shared-compnents/SearchOptions";
import { useNavigate } from "react-router-dom";
import "./Books.css";

function Books() {
	const [books, setBooks] = useState<Book[]>([]);
	const [searchType, setSearchType] = useState("Search by");
	const [searchValue, setSearchValue] = useState("");
	const [startSearch, triggerStartSearch] = useState(false);
	const navigate = useNavigate();

	async function fetchBooks() {
		const res = await getBooks(searchType, searchValue);
		if (res) setBooks(res);
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
					<Table responsive bordered hover>
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