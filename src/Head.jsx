import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Head.css";

const Head = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Container fluid className='head-back'>
            <Navbar expand="lg" expanded={expanded}>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : true)} 
                    className="d-lg-none"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex flex-column flex-lg-row align-items-lg-center mx-lg-auto gap-4">
                        <Nav.Link as={Link} to="/home" className='Navlinks'  onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/About" className='Navlinks'  onClick={() => setExpanded(false)}>About Me</Nav.Link>
                        <Nav.Link as={Link} to="/Experiance" className='Navlinks'  onClick={() => setExpanded(false)}>Experience</Nav.Link>
                        <Nav.Link as={Link} to="/Skills" className='Navlinks'  onClick={() => setExpanded(false)}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="/Projects" className='Navlinks'  onClick={() => setExpanded(false)}>Projects</Nav.Link>
                        <Button as={Link} to="/Contact" className='Navbutton ' variant="outline-dark" onClick={() => setExpanded(false)}>Contact</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Head;