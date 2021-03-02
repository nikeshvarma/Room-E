import React from 'react';
import {useForm} from "react-hook-form";
import "../../style/auth.css";
import {Card} from "react-bootstrap";


const Login = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    // const dispatch = useDispatch();

    return (
        <div>
            <div className="d-flex justify-content-center login-form">
                <Card className="m-5">
                    <Card.Body className="shadow">

                        <Card.Title className="d-flex justify-content-center">
                            <h3>LOGIN</h3>
                        </Card.Title>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control my-2" type="email" name="email" placeholder="Email"
                                   ref={register({required: "This field is required"})}/>
                            <input className="form-control my-2" type="password" name="password" placeholder="Password"
                                   ref={register({required: true})}/>
                            <button type="submit" className="btn m-auto btn-success">Login</button>
                        </form>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Login;