import React from 'react';
import {useHistory} from "react-router-dom";
import "../../style/home.css";
import {Button, Card, Col, Container, InputGroup, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const Home = () => {

    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();

    const onSubmit = data => {
        history.push('/search/', {query: data.location});
    }

    return (
        <div>
            <div className="home-img">
                <div>
                    <h1 className="head-txt">Easiest way to<br/>Rent a home</h1>
                </div>

                <div className="search-field-wrapper">
                    <div className="search-field">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    placeholder="Enter Location"
                                    ref={register({required: "Please enter a location "})}
                                />
                                <InputGroup.Append>
                                    <Button type="submit" variant="success">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <small className="text-danger">{errors.location && errors.location.message}</small>
                        </form>
                    </div>
                </div>
            </div>

            <Container fluid>
                <Row className="my-3">
                    <h2 className="ml-3">Features</h2>
                </Row>

                <Row className="text-center mb-5">

                    <Col lg={3}>
                        <Card className="shadow my-3">
                            <Card.Body>
                                <Card.Title>Direct Contact with Owner</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="shadow my-3">
                            <Card.Body>
                                <Card.Title>Easy to Search</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="shadow my-3">
                            <Card.Body>
                                <Card.Title>Polished Locations</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="shadow my-3">
                            <Card.Body>
                                <Card.Title>Best Price Guaranteed</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr/>

            <Container className="mt-3 mb-5">
                <Row>
                    <Col md={3} className="my-3 text-center">
                        <h2>Are you a home owner ?</h2>
                        <Button variant="outline-dark">List Your Property</Button>
                    </Col>
                    <Col md={3} className="my-3">
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title><h5>Find verified tenants</h5></Card.Title>
                                <p>
                                    tenants From showing your house to tenants,
                                    police verifying them & managing paperwork, we do it all
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-3">
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title><h5>Get rent on time</h5></Card.Title>
                                <p>We assure rent on 5th of every month. No more late rent payments or rent collection hassle</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="my-3">
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title><h5>Find verified tenants</h5></Card.Title>
                                <p>We provide periodic &amp; on-demand repairs and cleaning of the house to keep it in good condition</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;