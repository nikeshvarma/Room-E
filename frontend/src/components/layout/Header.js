import React from 'react';
import {useSelector} from "react-redux";
import {Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom"

const Header = () => {

    const isAuth = useSelector(state => state.auth);

    return (
        <>
            <Navbar bg="light" expand="md" variant="light">
                <Navbar.Text>
                    <NavLink to="/">
                        <h1 className="text-dark">Roome</h1>
                    </NavLink>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        {
                            isAuth ?
                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <Link className="dropdown-item" to="/profile/setting">Settings</Link>
                                    <NavDropdown.Divider/>
                                    <Link className="dropdown-item" to="/logout">Logout</Link>
                                </NavDropdown>
                                :
                                <>
                                    <NavLink to="/login">
                                        <Navbar.Text className="mx-3 text-dark">
                                            Login
                                        </Navbar.Text>
                                    </NavLink>
                                    <NavLink to="/signup">
                                        <Navbar.Text className="mx-3 text-dark">
                                            Sign Up
                                        </Navbar.Text>
                                    </NavLink>
                                </>
                        }
                        <NavLink to="/about">
                            <Navbar.Text className="mx-3 text-dark">
                                About
                            </Navbar.Text>
                        </NavLink>
                    </Nav>

                    <Form inline className="ml-0 ml-md-3 my-2 my-md-0">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;