import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import './../assets/styles/NavBar.css';
import 'font-awesome/css/font-awesome.css';
import { useEcomContext } from "../provider/ContextApi";

export default function EcomNavBar() {
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [activeLink, setIsLinkActive] = useState(false);
  const [psExpanded, setPsExpanded] = useState(); // Corrected typo

  const { token, isAdmin } = useEcomContext();

  const inputRef = useRef(null);

  const links = [
    { id: 1, text: "Admin", href: "/admin" },
    { id: 2, text: "Products", href: "/products" }
  ];

  const handleMenuItemClick = (id) => {
    setIsLinkActive(id);
  };

  const openSearchBar = () => {
    setIsSearchBarExpanded(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const closeSearchBar = () => {
    setIsSearchBarExpanded(false);
  };

  function openUserSection() {
    console.log(psExpanded); // Debug: check the current state value
    setPsExpanded(!psExpanded); // Toggle the state
  }

  return (
    <>
      <Navbar expand="lg" className="e-com-navbar">
        <Container>
          <Navbar.Brand href="/">E-com</Navbar.Brand>
          <Navbar.Toggle aria-controls="ecom-navbar-control" />
          <Navbar.Collapse id="ecom-navbar-nav">
            <Nav className="e-com-navs">
              {links.map((link) => (
                <Nav.Link
                  key={link.id}
                  as={Link}
                  to={link.href}
                  onClick={() => handleMenuItemClick(link.id)}
                  className={activeLink === link.id ? 'active-link' : 'default-link'}
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
            <div id="navbar-search-div" className="d-flex justify-content-end ms-auto">
              <input
                key="navbar_search_field_key"
                type="text"
                className={`navbar_search_field ${isSearchBarExpanded ? 'active' : ''}`}
                name="navbar_search_field"
                placeholder="Search here"
                ref={inputRef}
                onBlur={closeSearchBar}
              />
              <Button id="navbar_search_button" onClick={openSearchBar}>
                <i className="fa fa-search ecom-search-button fa-2x search-div-icons" />
              </Button>
            </div>

            <div id="_avtar_div">
              <button id="avtar_icon" onClick={openUserSection}>
                <i className="fa fa-user-circle-o" />
              </button>
              {psExpanded && !token && (
                <div className="user_actions">
                  <Link to="">Login</Link>
                  <span style={{ color: "white", margin: 5 }}>|</span>
                  <Link to="">Register</Link>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
