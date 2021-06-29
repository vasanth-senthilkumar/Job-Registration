import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/"><b className="text-white"> Job Hunts</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="text-white">Home</Nav.Link>
                        <Nav.Link href="/profile" className="text-white">My Profile</Nav.Link>
                        <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}