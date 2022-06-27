import React, { useEffect, useState } from "react"
import "./styles/navBar.css"
import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [selected, setSelected] = useState('/home')

  useEffect(()=> {
    const url = window.location.pathname
    setSelected(url)
  })

  return (
    <Navbar collapseOnSelect expand="md" bg="white"  className="mainNav">
      <Container>
        <a className="navLogo">
            <img src={logo} alt="logo"/>
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="navButtons">
            <a href="/" onClick={()=>setSelected('/')} style={{color : selected=='/' ? '#000' : 'rgba(0, 0, 0, 0.5)'}}>HOME</a>
            <a href="/work" onClick={()=>setSelected('/work')} style={{color : selected=='/work' ? '#000' : 'rgba(0, 0, 0, 0.5)'}}>WORK</a>
            <a href="/about" onClick={()=>setSelected('/about')} style={{color : selected=='/about' ? '#000' : 'rgba(0, 0, 0, 0.5)'}}>ABOUT</a>
            <a href="/contact" onClick={()=>setSelected('/contact')} style={{color : selected=='/contact' ? '#000' : 'rgba(0, 0, 0, 0.5)'}}>CONTACT</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;