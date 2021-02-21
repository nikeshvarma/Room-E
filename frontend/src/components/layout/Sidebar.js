import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="side-tab text-center">
            <ListGroup>
                <NavLink to="/">
                    <ListGroup.Item className="nav-link-style">
                        Home
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/signup">
                    <ListGroup.Item className="nav-link-style">
                        Sign Up
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/login">
                    <ListGroup.Item className="nav-link-style">
                        Login
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/about">
                    <ListGroup.Item className="nav-link-style">
                        About
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/contact">
                    <ListGroup.Item className="nav-link-style">
                        Contact
                    </ListGroup.Item>
                </NavLink>
            </ListGroup>,
        </div>
    );
};

export default Sidebar;