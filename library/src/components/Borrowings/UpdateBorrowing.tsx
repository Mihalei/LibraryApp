import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
	Borrowing,
	borrowingInit,
	DetailedBorrowing,
	detailedBorrowingInit,
} from "../../models/borrowing";
import {
	getBorrowing,
	getDetailedBorrowings,
	returnABook,
	updateBorrowing,
} from "../../services/borrowingService";
import "./Borrowings.css";

function UpdateBorrowing() {
	let { id } = useParams();
	const [originalBorrowing, setOriginalBorrowing] =
		useState<DetailedBorrowing>(detailedBorrowingInit);
	const [updatedBorrowing, setUpdatedBorrowing] = useState<Borrowing>(borrowingInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setUpdatedBorrowing({ ...updatedBorrowing, [e.target.name]: e.target.value });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		const res = await updateBorrowing(updatedBorrowing);
		navigate("/borrowings");
	}

	async function handleReturnBook(e: any) {
		e.preventDefault();
		const res = await returnABook(originalBorrowing.borrowing.id);
		navigate("/borrowings");
	}

	async function fetchBorrowing() {
		if (id) {
			const res = await getBorrowing(id);
			if (res) {
				let detailed: DetailedBorrowing;
				const d = await getDetailedBorrowings([res]);
				if (d) {
					[detailed] = d;
					setOriginalBorrowing(detailed);
				}
				if (res) setUpdatedBorrowing(res);
			}
		}
	}

	const copyId = () => {
		navigator.clipboard.writeText(originalBorrowing.borrowing.id);
		alert(`Borrowing id ${id} is copied to clipboard.`);
	};

	useEffect(() => {
		fetchBorrowing();
	}, []);

	return (
		<div className="update-borrowing-container">
			<Form>
				<InputGroup className="mb-3">
					<InputGroup.Text>Borrowing Id</InputGroup.Text>
					<FormControl
						aria-label="Borrowing Id"
						placeholder={originalBorrowing.borrowing.id}
						disabled
					/>
					<Button variant="success" id="button-addon2" onClick={() => copyId()}>
						Copy borrowing id
					</Button>
				</InputGroup>

				<Form.Group className="mb-3">
					<Form.Label>{`Member Id (for member: ${originalBorrowing.memberName})`}</Form.Label>
					<Form.Control
						type="name"
						name="memberId"
						placeholder={originalBorrowing.borrowing.memberId}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>{`Book Id (for book: ${originalBorrowing.bookTitle})`}</Form.Label>
					<Form.Control
						type="name"
						name="bookId"
						placeholder={originalBorrowing.borrowing.bookId}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Update
				</Button>
				<Button variant="secondary" type="submit" onClick={handleReturnBook}>
					Return Book
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/borrowings")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default UpdateBorrowing;
