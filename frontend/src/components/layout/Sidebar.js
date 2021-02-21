import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="side-tab text-center">
            <ListGroup>
                <NavLink to="/signup">
                    <ListGroup.Item>
                        Sign Up
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/login">
                    <ListGroup.Item>
                        Login
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/about">
                    <ListGroup.Item>
                        About
                    </ListGroup.Item>
                </NavLink>
                <NavLink to="/contact">
                    <ListGroup.Item>
                        Contact
                    </ListGroup.Item>
                </NavLink>
            </ListGroup>,
        </div>
    );
};

export default Sidebar;