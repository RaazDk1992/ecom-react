import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import'./../assets/NavBar.css';
import { useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import App from "../App";
import ProductManagement from "./admin/ProductManagement";

export default function EcomNavBar() {
    /**
     * State and method for defining whether search bar is enabled.
     */
    const[isSearchBarExpanded,setIsSearchBarExpanded] = useState(false);
    const[activeLink, setIsLinkActive] = useState(false);

    const links = [
      {id:1,text:"Admin",href:"/admin"},
      {id:2,text:"Products",href:"/products"}
    ];
    const handleMenuItemClick =(id)=>{
      setIsLinkActive(id);
      
    }
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
      <Navbar.Brand href="/">E-com</Navbar.Brand>
      <Navbar.Toggle aria-controls="ecom-navbar-control" />
      <Navbar.Collapse id="ecom-navbar-nav">
        <Nav className="e-com-navs">
           
            {links.map((link)=>(
                          <Nav.Link key={link.id} as={Link} to={link.href} onClick={()=>handleMenuItemClick(link.id)}
                          className={activeLink === link.id ? 'active-link' : 'default-link'}
                          >{link.text}</Nav.Link>

            ))}
            

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
