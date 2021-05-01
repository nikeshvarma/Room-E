import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const RegisterOwner = () => {

    const isAuth = useSelector(state => state.auth);
    const AuthToken = Cookies.get('auth_token');
    const [value, setValue] = useState([]);
    const isRegistered = value?.is_owner;


    useEffect(() => {
        window.scrollTo(0, 0);

        const getUserInfo = async () => {
            const res = await axios.get('/user/info/', {headers: {'Authorization': 'token ' + AuthToken}})
            setValue(res.data)
        }

        getUserInfo();

    }, [])

    if (isAuth && !isRegistered) {
        return (
            <Container sm={'fluid'} className="my-3">
                <Row>
                    <Col sm={12}>
                        <h1 className="my-3">Register Here</h1>
                        <hr/>
                    </Col>
                    <Col sm={12}>
                        <Form>
                            <Form.Row className="justify-content-between">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control value={value.first_name} type="text" disabled/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control value={value.last_name} type="text" disabled/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={value.email} type="email" disabled/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address"/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" maxLength="6" pattern="^[1-9][0-9]{5}$"/>
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
    } else if (isAuth && isRegistered) {
        return <Redirect to='/dashboard/'/>
    } else {
        return <Redirect to='/signup/'/>
    }
}

export default RegisterOwner;