import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CreateMember, createMemberInit } from "../../models/member";
import { addNewMember } from "../../services/memberService";
import "./Members.css";

function AddMember() {
	const [newMember, setNewMember] = useState<CreateMember>(createMemberInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setNewMember({ ...newMember, [e.target.name]: e.target.value });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		const res = await addNewMember(newMember);
		navigate("/members");
	}

	return (
		<div className="add-member-container">
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="name"
						name="firstName"
						placeholder="First name"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="name"
						name="lastName"
						placeholder="Last name"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Date Of Birth</Form.Label>
					<Form.Control
						type="date"
						name="dateOfBirth"
						placeholder="Date of birth"
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Add Member
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/members")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default AddMember;
