import React from 'react';
import "./header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo_rect.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar expand="md" className="navbar-collapse navbar-dark sticky-top ">

                <Navbar.Brand as={Link} to="/">
                    <img alt="Ouais tkt" className='logo_img' src={logo}></img>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="" activeClassName="active" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/construction">Construction</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>


    );

}

export default Header;