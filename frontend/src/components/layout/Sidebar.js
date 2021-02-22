import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {authTrue, authFalse} from "../../redux/auth/authActions";

const Sidebar = () => {
    const isAuth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div className="side-tab text-center">
            <ListGroup>
                <NavLink to="/">
                    <ListGroup.Item className="nav-link-style">
                        Home
                    </ListGroup.Item>
                </NavLink>
                {!isAuth ?
                    <>
                        <NavLink to="/signup">
                            <ListGroup.Item className="nav-link-style">
                                Sign Up
                            </ListGroup.Item>
                        </NavLink>
                        <NavLink to="/login">
                            <ListGroup.Item className="nav-link-style" onClick={() => dispatch(authTrue('1234567890'))}>
                                Login
                            </ListGroup.Item>
                        </NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/profile">
                            <ListGroup.Item className="nav-link-style">
                                Profile
                            </ListGroup.Item>
                        </NavLink>
                    </>
                }
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
                {
                    isAuth &&
                    <NavLink to="/logout">
                        <ListGroup.Item className="nav-link-style" onClick={() => dispatch(authFalse())}>
                            Logout
                        </ListGroup.Item>
                    </NavLink>
                }
            </ListGroup>,
        </div>
    );
};

export default Sidebar;