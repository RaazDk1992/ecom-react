import { Container, Nav, Navbar } from "react-bootstrap";
import'./../assets/NavBar.css';

export default function EcomNavBar() {
  return(
    <Navbar expand="lg" className="e-com-navbar">
    <Container>
      <Navbar.Brand href="#">E-com</Navbar.Brand>
      <Navbar.Toggle aria-controls="ecom-navbar-control" />
      <Navbar.Collapse id="ecom-navbar-nav">
        <Nav className="e-com-navs">
            <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <div id="search-div" className="ms-auto">
            <input type="text"></input>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
