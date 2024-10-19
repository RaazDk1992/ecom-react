import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import'./../assets/NavBar.css';
import { useState } from "react";

export default function EcomNavBar() {
    /**
     * State and method for defining whether search bar is enabled.
     */
    const[isSearchBarExpanded,setIsSearchBarExpanded] = useState(false);
    const openSearchBar = () =>{
        setIsSearchBarExpanded(true);
        console.log(isSearchBarExpanded);
    }
    const closeSearchBar =() =>{
        setIsSearchBarExpanded(false);
    }
  return(
   <>
    <Navbar expand="lg" className="e-com-navbar">
    <Container>
      <Navbar.Brand href="#">E-com</Navbar.Brand>
      <Navbar.Toggle aria-controls="ecom-navbar-control" />
      <Navbar.Collapse id="ecom-navbar-nav">
        <Nav className="e-com-navs">
            <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <div id="search-div" className="ms-auto">
        <Button className="fa fa-search ecom-search-button fa-2x"  onClick={openSearchBar}></Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  
  );
}
