import React, {useState} from 'react';
import {Navbar, Button} from "react-bootstrap";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom"
import Sidebar from "./Sidebar";

const Header = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
        console.log('click', click)
    }

    return (
        <div>
            <Navbar bg="danger" variant="dark">
                <Button variant="outlined-dark">
                    <MenuIcon onClick={handleClick}/>
                </Button>
                <div className="mx-3">
                    <Navbar.Brand>
                        <NavLink to="/">
                            Roome
                        </NavLink>
                    </Navbar.Brand>
                </div>
            </Navbar>
            {click && <Sidebar/>}
        </div>
    );
};

export default Header;