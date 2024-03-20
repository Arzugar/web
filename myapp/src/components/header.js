import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo_rect.png';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <Navbar expand="md" className="navbar-collapse navbar-dark">

            <Navbar.Brand href="#h</Navbar>ome">
                <img alt="Ouais tkt" className='logo_img' src={logo}></img>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" activeClassName="active" >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/presentations">Présentations</Nav.Link>
                    <Nav.Link as={Link} to="/">Truc</Nav.Link>
                    <Nav.Link as={Link} to="/">Machin</Nav.Link>
                    <Nav.Link as={Link} to="/">Jamais on a autant de pages</Nav.Link>

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );

}

export default Header;