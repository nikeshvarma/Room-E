import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../../style/auth.css";
import {Alert, Card} from "react-bootstrap";
import axios from "axios";
import {IS_AUTH} from "../../redux/auth/authTypes";


const Login = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const history = useHistory();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        axios({
            url: 'http://localhost:8000/auth/login/',
            method: 'post',
            dataType: 'json',
            data: data,
        })
            .then((res) => res.data['AuthToken'] ? dispatch({type: IS_AUTH, payload: res.data['AuthToken']}) : console.log(res.errors))
            .then(() => history.push('/'))
            .catch(() => setShow(true))
    }

    return (
        <>
            <div>
                <Alert variant="danger" show={show}>
                    Invalid username or password.
                </Alert>
            </div>

            <div className="d-flex justify-content-center login-form">
                <Card className="auth-form-width">
                    <Card.Body className="shadow">

                        <Card.Title className="d-flex justify-content-center">
                            <h3>LOGIN</h3>
                        </Card.Title>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control my-3" type="email" name="email" placeholder="Email"
                                   ref={register({required: "This field is required"})}/>
                            <input className="form-control my-3" type="password" name="password" placeholder="Password"
                                   ref={register({required: true})}/>
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-success">LOGIN</button>
                            </div>

                        </form>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Login;