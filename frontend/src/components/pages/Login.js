import React from 'react';
import "../../style/auth.css";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Https} from "@material-ui/icons";
import {Card} from "react-bootstrap";


const Login = () => {
    return (
        <div>
            <div className="d-flex justify-content-center login-form">
                <Card className="m-5">
                    <div className="card-body shadow">
                        <div className="d-flex justify-content-center">
                            <h3>LOGIN</h3>
                        </div>
                        <form>
                            <TextField fullWidth margin="normal" id="outlined-basic" label="Email" variant="outlined"/>
                            <br/>
                            <TextField fullWidth margin="normal" id="outlined-basic" label="Password" variant="outlined"/>
                            <Button
                                className="text-center"
                                variant="contained"
                                color="primary"
                                endIcon={<Https/>}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;