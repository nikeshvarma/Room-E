import React from 'react';
import {Navbar, Button} from "react-bootstrap";
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Button variant="outlined-dark">
                    <MenuIcon/>
                </Button>
                <div className="mx-3">
                    <Navbar.Brand href="/">
                        Roome
                    </Navbar.Brand>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;