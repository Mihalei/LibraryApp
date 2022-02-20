import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<p id="footer-text">Library App &copy; {new Date().getFullYear().toString()}</p>
		</div>
	);
}

export default Footer;
