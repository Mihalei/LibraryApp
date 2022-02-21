import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Book, bookInit } from "../../models/book";
import { getBook, updateBook } from "../../services/bookService";
import "./Books.css";

function UpdateBook() {
	let { id } = useParams();
	const [originalBook, setOriginalBook] = useState<Book>(bookInit);
	const [updatedBook, setUpdatedBook] = useState<Book>(bookInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		if (e.target.name !== "amount")
			setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
		else setUpdatedBook({ ...updatedBook, [e.target.name]: Number.parseInt(e.target.value) });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		if (updatedBook.amount > 0) {
			const res = await updateBook(updatedBook);
			navigate("/books");
		} else alert("Book amount must be greater than 0!");
	}

	async function fetchBook() {
		if (id) {
			const res = await getBook(id);
			if (res) setOriginalBook(res);
			if (res) setUpdatedBook(res);
		}
	}

	useEffect(() => {
		fetchBook();
	}, []);

	return (
		<div className="update-book-container">
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Book id</Form.Label>
					<Form.Control placeholder={id} disabled />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="name"
						name="title"
						placeholder={originalBook.title}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Author</Form.Label>
					<Form.Control
						type="name"
						name="author"
						placeholder={originalBook.author}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="number"
						name="amount"
						placeholder={originalBook.amount.toString()}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Update
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/books")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default UpdateBook;
