import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">
                <img src={Logo} alt="" className="logo_img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/home/presentations">Presentations</Nav.Link>
                    <Nav.Link href="#">Other</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;