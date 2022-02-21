import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { DetailedBorrowing } from "../../models/borrowing";
import { borrowingSearchOptions } from "../../models/search";
import { getBorrowings } from "../../services/borrowingService";
import { SearchInput } from "../../shared-compnents/SearchInput";
import { SearchOptions } from "../../shared-compnents/SearchOptions";
import { useNavigate } from "react-router-dom";
import "./Borrowings.css";

function Borrowings() {
	const [borrowings, setBorrowings] = useState<DetailedBorrowing[]>([]);
	const [searchType, setSearchType] = useState("Search by");
	const [searchValue, setSearchValue] = useState("");
	const [startSearch, triggerStartSearch] = useState(false);
	const navigate = useNavigate();

	async function fetchBorrowings() {
		const res = await getBorrowings(searchType, searchValue);
		if (res) setBorrowings(res);
	}

	const onRowClick = (borrowingId: string) => {
		navigate(`/borrowings/update-borrowing/${borrowingId}`);
	};

	useEffect(() => {
		fetchBorrowings();
	}, [startSearch]);

	return (
		<div className="borrowings">
			<div className="borrowings-container">
				<div className="borrowings-title-container">
					<h4>Borrowings</h4>
					<div className="borrowings-actions-container">
						<SearchOptions
							options={borrowingSearchOptions}
							select={searchType}
							setSelect={setSearchType}
						/>
						<SearchInput
							input={searchValue}
							setInput={setSearchValue}
							startSearch={startSearch}
							setStartSearch={triggerStartSearch}
						/>
						<Button
							variant="success"
							onClick={() => navigate("/borrowings/add-borrowing")}>
							New
						</Button>
					</div>
				</div>
				<div className="borrowings-table-container">
					<Table responsive bordered hover>
						<thead>
							<tr>
								<th>Id</th>
								<th>Member</th>
								<th>Book</th>
							</tr>
						</thead>
						<tbody>
							{borrowings.map((b) => (
								<tr key={b.borrowing.id} onClick={() => onRowClick(b.borrowing.id)}>
									<td>{b.borrowing.id}</td>
									<td>{`${b.memberName} (id=${b.borrowing.memberId})`}</td>
									<td>{`${b.bookTitle} (id=${b.borrowing.bookId})`}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}

export default Borrowings;
