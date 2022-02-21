import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CreateBorrowing, createBorrowingInit } from "../../models/borrowing";
import { borrowABook } from "../../services/borrowingService";
import "./Borrowings.css";

function AddBorrowing() {
	const [newBorrowing, setNewBorrowing] = useState<CreateBorrowing>(createBorrowingInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setNewBorrowing({ ...newBorrowing, [e.target.name]: e.target.value });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		const res = await borrowABook(newBorrowing);
		navigate("/borrowings");
	}

	return (
		<div className="add-borrowing-container">
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Member Id</Form.Label>
					<Form.Control
						type="name"
						name="memberId"
						placeholder="Member id"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Book Id</Form.Label>
					<Form.Control
						type="name"
						name="bookId"
						placeholder="Book id"
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Borrow
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/borrowings")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default AddBorrowing;
