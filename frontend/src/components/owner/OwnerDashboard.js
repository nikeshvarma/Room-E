import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {baseURL} from '../../index';
import {Link} from "react-router-dom";
import '../../style/ownerhome.css';

const OwnerDashboard = () => {
    return (
        <div>
            <div className="min-vh-100">
                <Row>
                    <Col md={3} className="min-vh-100">
                        <div>
                            <h3 className="text-center mt-2">Dashboard</h3>
                            {/*<img src={baseURL + '/static/images/user.png'} className="img-fluid text-center" alt="user-img"/>*/}
                        </div>
                        <nav>
                            <ul className="list-unstyled list-group text-center sidebar-list">
                                <Link to='/dashboard/'>
                                    <li className="list-group-item">
                                        Home
                                    </li>
                                </Link>
                                <Link to='/owner/profile/'>
                                    <li className="list-group-item">
                                        Profile
                                    </li>
                                </Link>
                                <Link to='/dashboard/add-property/'>
                                    <li className="list-group-item">
                                        Properties
                                    </li>
                                </Link>
                                <Link to='/owner/settings/'>
                                    <li className="list-group-item">
                                        Settings
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={9}>
                        <Row className="mt-3">
                            <Col>
                                <Card>
                                    <Card.Title><h3>Properties</h3></Card.Title>
                                    <Card.Body>
                                        6
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Title><h3>Properties</h3></Card.Title>
                                    <Card.Body>
                                        6
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Title><h3>Properties</h3></Card.Title>
                                    <Card.Body>
                                        6
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Title><h3>Properties</h3></Card.Title>
                                    <Card.Body>
                                        6
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default OwnerDashboard;