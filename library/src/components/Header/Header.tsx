import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import LibraryLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header-container">
			<Navbar sticky="top" collapseOnSelect expand="lg" className="navbar-light">
				<Container className="navbar-container">
					<Navbar.Brand>
						<Link to="/">
							<img src={LibraryLogo} alt="Logo" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse className="nav-collapse" id="responsive-navbar-nav">
						<Nav className="nav-container">
							<Link to="/books">Manage Books</Link>
							<Link to="/members">Manage Members</Link>
							<Link to="/borrowings">Manage Borrowings</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
