import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Book } from "../../models/book";
import { bookSearchOptions } from "../../models/search";
import { getAllBooks } from "../../services/bookService";
import { SearchInput } from "../../shared-compnents/SearchInput";
import { SearchOptions } from "../../shared-compnents/SearchOptions";
import { useNavigate } from "react-router-dom";
import "./Books.css";

function Books() {
	const [select, setSelect] = useState("Search by");
	const [books, setBooks] = useState<Book[]>([]);
	const navigate = useNavigate();

	async function fetchBooks() {
		const res = await getAllBooks();
		if (res) setBooks(res);
		else alert("Error while loading books.");
	}

	useEffect(() => {
		console.log(select);
	}, [select]);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="books">
			<div className="books-container">
				<div className="books-title-container">
					<h4>Books</h4>
					<div className="books-actions-container">
						<SearchOptions
							options={bookSearchOptions}
							select={select}
							setSelect={setSelect}
						/>
						<SearchInput />
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
								<tr>
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
