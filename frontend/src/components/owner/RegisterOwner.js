import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {Redirect, useHistory} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import {useForm} from "react-hook-form";

const RegisterOwner = () => {

    const AuthToken = Cookies.get('auth_token');
    const [userInfo, setUserInfo] = useState([]);
    const {register, handleSubmit} = useForm();
    const isRegistered = userInfo?.is_owner;
    const history = useHistory();

    const onSubmit = (data) => {
        axios.post('/user/owner-register/', data, {headers: {Authorization: 'token ' + AuthToken}})
            .then(() => history.push('/dashboard/'))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        const getUserInfo = async () => {
            const res = await axios.get('/user/info/', {headers: {'Authorization': 'token ' + AuthToken}})
            setUserInfo(res.data)
        }

        getUserInfo();

    }, [])

    if (!isRegistered) {
        return (
            <Container sm={'fluid'} className="my-3">
                <Row>
                    <Col sm={12}>
                        <h1 className="my-3">Register Here</h1>
                        <hr/>
                    </Col>
                    <Col sm={12}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row className="justify-content-between">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control value={userInfo.first_name} type="text" disabled/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control value={userInfo.last_name} type="text" disabled/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className="justify-content-between">
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={userInfo.email} type="email" name="email" disabled/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control value={userInfo.phone_number} type="tel" disabled/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" name="address" ref={register({required: "This field is required"})}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City" name="city" ref={register({required: "This field is required"})}/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" name="state" ref={register({required: "This field is required"})}/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" maxLength="6" name="pincode" ref={register({required: "This field is required"})} pattern="^[1-9][0-9]{5}$"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>

                            <Button variant="primary" className="px-3" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return <Redirect to='/dashboard/'/>
    }
}

export default RegisterOwner;