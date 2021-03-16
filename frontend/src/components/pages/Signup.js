import React from 'react';
import {useForm} from "react-hook-form";
import {Card, Form, Col} from "react-bootstrap";
import axios from "axios";

const Signup = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
        // axios({
        //     url: 'http://localhost:8000/auth/signup/',
        //     method: 'post',
        //     data: data
        // })
        //     .then((res) => console.log(res.data))
    }

    return (
        <>
            <div className="d-flex justify-content-center login-form">
                <Card className="auth-form-width">
                    <Card.Body className="shadow">

                        <Card.Title className="d-flex justify-content-center">
                            <h3>Create New Account</h3>
                        </Card.Title>

                        <Form className="container" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="first_name" placeholder="First Name"
                                                  ref={register({required: 'This field is required'})}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" name="last_name" placeholder="Last Name"
                                                  ref={register({required: 'This field is required'})}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Control type="email" name="email" placeholder="Email"
                                              ref={register({required: "This field is required"})}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="password" name="password" placeholder="Password"
                                              ref={register({required: true})}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control className="form-control" type="password" name="confirm_password"
                                              placeholder="Confirm Password"
                                              ref={register({required: true})}/>
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Create New Account</button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Signup;
