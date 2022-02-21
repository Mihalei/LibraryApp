import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CreateBook, createBookInit } from "../../models/book";
import { addNewBook } from "../../services/bookService";
import "./Books.css";

function AddBook() {
	const [newBook, setNewBook] = useState<CreateBook>(createBookInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		if (e.target.name !== "amount") setNewBook({ ...newBook, [e.target.name]: e.target.value });
		else setNewBook({ ...newBook, [e.target.name]: Number.parseInt(e.target.value) });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		if (newBook.amount > 0) {
			const res = await addNewBook(newBook);
			navigate("/books");
		} else alert("Book amount must be greater than 0!");
	}

	return (
		<div className="add-book-container">
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="name"
						name="title"
						placeholder="Title"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Author</Form.Label>
					<Form.Control
						type="name"
						name="author"
						placeholder="Author name"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="number"
						name="amount"
						placeholder="Amount"
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Add Book
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/books")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default AddBook;
