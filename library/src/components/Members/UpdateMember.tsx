import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Member, memberInit } from "../../models/member";
import { getMember, updateMember } from "../../services/memberService";
import "./Members.css";

function UpdateMember() {
	let { id } = useParams();
	const [originalMember, setOriginalMember] = useState<Member>(memberInit);
	const [updatedMember, setUpdatedMember] = useState<Member>(memberInit);
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		setUpdatedMember({ ...updatedMember, [e.target.name]: e.target.value });
	};

	async function handleSubmit(e: any) {
		e.preventDefault();
		const res = await updateMember(updatedMember);
		navigate("/members");
	}

	async function fetchMember() {
		if (id) {
			const res = await getMember(id);
			if (res) setOriginalMember(res);
			if (res) setUpdatedMember(res);
		}
	}

	const copyId = () => {
		navigator.clipboard.writeText(originalMember.id);
		alert(`Member id ${id} is copied to clipboard.`);
	};

	useEffect(() => {
		fetchMember();
	}, []);

	return (
		<div className="update-member-container">
			<Form>
				<InputGroup className="mb-3">
					<InputGroup.Text>Member Id</InputGroup.Text>
					<FormControl aria-label="Member Id" placeholder={originalMember.id} disabled />
					<Button variant="success" id="button-addon2" onClick={() => copyId()}>
						Copy member id
					</Button>
				</InputGroup>

				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="name"
						name="firstName"
						placeholder={originalMember.firstName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="name"
						name="lastName"
						placeholder={originalMember.lastName}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>{`Date Of Birth (original: ${originalMember.dateOfBirth})`}</Form.Label>
					<Form.Control
						type="date"
						name="dateOfBirth"
						placeholder={originalMember.dateOfBirth}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="success" type="submit" onClick={handleSubmit}>
					Update
				</Button>
				<Button variant="danger" type="submit" onClick={() => navigate("/members")}>
					Cancel
				</Button>
			</Form>
		</div>
	);
}

export default UpdateMember;
