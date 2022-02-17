import {Navbar, Nav, Container} from 'react-bootstrap'
import './Header.css';
import LibraryLogo from "../../assets/logo.png";

function Header() {

  return (
    <div className="header-container">
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navbar-light">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img src={LibraryLogo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="nav-collapse" id="responsive-navbar-nav">
            <Nav className="nav-container">
              <Nav.Link href="#books">Books</Nav.Link>
              <Nav.Link href="#manage">Manage Library</Nav.Link>
              <Nav.Link href="#members">Members</Nav.Link>
              <Nav.Link href="#borrowed">Borrowed Books</Nav.Link>
              <Nav.Link href="#borrow">Borrow a book</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;