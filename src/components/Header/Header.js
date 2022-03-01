import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
    return (
        <div>
          
  <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/home" ><h3><b className='brand-name'>𝐿𝑒𝒶𝓇𝓃𝑜𝓁𝑜𝑔𝓎
</b></h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home" > <h4>Home</h4> </Nav.Link>
        <Nav.Link as={Link} to="/courses"><h4>Course</h4></Nav.Link>
        <Nav.Link as={Link} to="/about"><h4>About Us</h4></Nav.Link>
        <Nav.Link as={Link} to="/contact"><h4>Contact</h4></Nav.Link>
        <Nav.Link as={Link} to="/login"><h4> Login</h4></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;