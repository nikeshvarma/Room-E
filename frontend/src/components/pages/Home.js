import React from 'react';
import "../../style/home.css";
import {Button, Card, Col, Container, InputGroup, Row} from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <div className="home-img">
                <div>
                    <h1 className="head-txt">Easiest way to<br/>Rent a home</h1>
                </div>

                <div className="search-field-wrapper">
                    <div className="search-field">
                        <InputGroup>
                            <input type="text" className="form-control" name="search" placeholder="Enter Location"/>
                            <InputGroup.Append>
                                <Button variant="success">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>

            <Container fluid>
                <Row className="my-3">
                    <h2>Features</h2>
                </Row>

                <Row className="text-center mb-5">

                    <Col lg={3}>
                        <Card className="alert-warning">
                            <Card.Body>
                                <Card.Title>Direct Contact with Owner</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="alert-primary">
                            <Card.Body>
                                <Card.Title>Easy to Search</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="alert-success">
                            <Card.Body>
                                <Card.Title>Polished Locations</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="alert-info">
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
                        <h2>Are You a home owner ?</h2>
                        <Button variant="outline-dark">List Your Property</Button>
                    </Col>
                    <Col md={3} className="my-3">
                        <h5>Find verified tenants</h5>
                        <p>
                            tenants From showing your house to tenants,
                            police verifying them & managing paperwork, we do it all
                        </p>
                    </Col>
                    <Col md={3} className="my-3">
                        <h5>Get rent on time</h5>
                        <p>
                            We assure rent on 5th of every month. No more late rent payments or rent collection hassle
                        </p>
                    </Col>
                    <Col md={3} className="my-3">
                        <h5>Find verified tenants</h5>
                        <p>
                            We provide periodic &amp; on-demand repairs and cleaning of the house to keep it in good condition
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;