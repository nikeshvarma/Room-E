import React from 'react';
import {useSelector} from "react-redux";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom"

const Header = () => {

    const isAuth = useSelector(state => state.auth);

    return (
        <>
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Text>
                    <NavLink to="/">
                        <h2 className="text-white">ROOME</h2>
                    </NavLink>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        {
                            isAuth ?
                                <>
                                    <NavLink to="/profile/">
                                        <Navbar.Text className="px-3 text-white header-link">
                                            Profile
                                        </Navbar.Text>
                                    </NavLink>
                                    <NavLink to="/logout/">
                                        <Navbar.Text className="px-3 text-white header-link">
                                            Logout
                                        </Navbar.Text>
                                    </NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/login/">
                                        <Navbar.Text className="px-3 text-white header-link">
                                            Login
                                        </Navbar.Text>
                                    </NavLink>
                                    <NavLink to="/signup/">
                                        <Navbar.Text className="px-3 text-white header-link">
                                            Sign Up
                                        </Navbar.Text>
                                    </NavLink>
                                </>
                        }
                        <NavLink to="/about/">
                            <Navbar.Text className="px-3 text-white header-link">
                                About
                            </Navbar.Text>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;