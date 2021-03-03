import React from 'react';
import {useForm} from "react-hook-form";
import {Card} from "react-bootstrap";

const Signup = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="d-flex justify-content-center login-form">
                <Card className="auth-form-width">
                    <Card.Body className="shadow">

                        <Card.Title className="d-flex justify-content-center">
                            <h3>Create New Account</h3>
                        </Card.Title>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control my-3" type="email" name="email" placeholder="Email"
                                   ref={register({required: "This field is required"})}/>

                            <input className="form-control my-3" type="password" name="password" placeholder="Password"
                                   ref={register({required: true})}/>

                            <input className="form-control my-3" type="password" name="confirm_password"
                                   placeholder="Confirm Password"
                                   ref={register({required: true})}/>

                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-primary">Create New Account</button>
                            </div>
                        </form>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Signup;
