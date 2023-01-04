import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandLogo from '../../assets/brand-logo.png';
import './Navigation.css';


const Navigation = () => {
    return (
        <Navbar expand="lg" className='p-4 custom-bg'>
            <Container>
                <Navbar.Brand href="/"><img src={brandLogo} alt='Brand Logo'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="*">Our Portfolio</Nav.Link>
                        <Nav.Link href="*">Our Team</Nav.Link>
                        <Nav.Link href="*">Contact us</Nav.Link>
                        <Nav.Link href="*">Log-in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;