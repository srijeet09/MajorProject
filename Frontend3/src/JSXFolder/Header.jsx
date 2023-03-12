import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../CSSFiles/Header.css'
function Header() {
  return (
    <>
    <Navbar bg="dark" expand="lg">
    <div className='container-fluid'>
      
      <Navbar.Brand><Link to="/"><img src={require("../ImageFolder/logo11.png")} alt="" className='logo'></img></Link></Navbar.Brand>
      <Navbar.Brand><h2 className="c11">E-Voting</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link><Link to="/"  className="item">Home</Link></Nav.Link>
          <Nav.Link><Link to="/contactus" className="item">Contact</Link></Nav.Link>
          <Nav.Link><Link to="/aboutus" className="item">About us</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
      </div>
  </Navbar>
    <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link
    href="https://api.fontshare.com/v2/css?f[]=panchang@400&display=swap"
    rel="stylesheet"
    /> 
      
    </header>
    </>
);
  
}

export default Header;