import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout(props: any) {
	return (
		<div id="layout">
			<div id="header">
				<Header />
			</div>
			<div id="main-content">{props.children}</div>
			<div id="footer">
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
