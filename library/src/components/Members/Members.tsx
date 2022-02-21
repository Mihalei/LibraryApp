import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Member } from "../../models/member";
import { memberSearchOptions } from "../../models/search";
import { getMembers } from "../../services/memberService";
import { SearchInput } from "../../shared-compnents/SearchInput";
import { SearchOptions } from "../../shared-compnents/SearchOptions";
import { useNavigate } from "react-router-dom";
import "./Members.css";

function Members() {
	const [members, setMembers] = useState<Member[]>([]);
	const [searchType, setSearchType] = useState("Search by");
	const [searchValue, setSearchValue] = useState("");
	const [startSearch, triggerStartSearch] = useState(false);
	const navigate = useNavigate();

	async function fetchMembers() {
		const res = await getMembers(searchType, searchValue);
		if (res) setMembers(res);
	}

	const onRowClick = (memberId: string) => {
		navigate(`/members/update-member/${memberId}`);
	};

	useEffect(() => {
		fetchMembers();
	}, [startSearch]);

	return (
		<div className="members">
			<div className="members-container">
				<div className="members-title-container">
					<h4>Members</h4>
					<div className="members-actions-container">
						<SearchOptions
							options={memberSearchOptions}
							select={searchType}
							setSelect={setSearchType}
						/>
						<SearchInput
							input={searchValue}
							setInput={setSearchValue}
							startSearch={startSearch}
							setStartSearch={triggerStartSearch}
						/>
						<Button variant="success" onClick={() => navigate("/members/add-member")}>
							New
						</Button>
					</div>
				</div>
				<div className="members-table-container">
					<Table responsive bordered hover>
						<thead>
							<tr>
								<th>Id</th>
								<th>First name</th>
								<th>Last name</th>
								<th>Date of birth</th>
							</tr>
						</thead>
						<tbody>
							{members.map((m) => (
								<tr key={m.id} onClick={() => onRowClick(m.id)}>
									<td>{m.id}</td>
									<td>{m.firstName}</td>
									<td>{m.lastName}</td>
									<td>{m.dateOfBirth}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}

export default Members;
