import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


export default function NavBar() {

  


  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Trenza-Deco</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Deco</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Sale</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        
        <Nav.Link href="#link">Link</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
  <Nav.Link style={{fontSize:"2rem", color:"black"}}><CartWidget></CartWidget></Nav.Link>
</Navbar>
    </>

  );
}

