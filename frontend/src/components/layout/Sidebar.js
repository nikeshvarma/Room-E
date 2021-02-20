import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="side-tab">
            <Nav className="bg-danger sidebar">
                <Nav.Link>
                    <NavLink to="/signup">Sign Up</NavLink>
                </Nav.Link>
                <hr/>
                <Nav.Link>
                    <NavLink to="/login">Login</NavLink>
                </Nav.Link>
                <hr/>
                <Nav.Link>
                    <NavLink to="/about">About</NavLink>
                </Nav.Link>
                <hr/>
                <Nav.Link>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav.Link>
                <hr/>
            </Nav>
        </div>
    );
};

export default Sidebar;