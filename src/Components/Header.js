import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import profileImage from './profile.jpeg';
import './Header.css';

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="navbar-custom navbar-height">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image src={profileImage} roundedCircle width="45" height="45" />
          <span className="ml-2">&emsp;Taimur Mahmood</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
            <Nav.Link href="#skills" className="mr-3">Skills</Nav.Link>
            <Nav.Link href="#projects" className="mr-3">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
