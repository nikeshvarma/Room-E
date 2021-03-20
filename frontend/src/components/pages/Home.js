import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import Loading from "./Loading";
import {Link} from "react-router-dom";

const Home = () => {

    const [flats, setFlats] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const authToken = Cookies.get('auth_token');

    useEffect(() => {
        if (authToken) {
            dispatch({type: IS_AUTH, payload: authToken})
        }

        async function fetchFlats() {
            const res = await axios.get('/flats/all/')
            setFlats(res?.data)
            console.log(res.data)
            setLoading(false);
        }

        fetchFlats();

    }, [])

    let flatRender = flats.map((flat, index) =>
        <Card key={index} className="shadow mb-5">
            <Card.Body>
                <Row>
                    <Col md={3}>
                        <img src={flat.photo1} width="100%" className="rounded"/>
                    </Col>
                    <Col md={9}>
                        <h6>{flat.flat_address} {flat.flat_city} {flat.flat_state}</h6>
                        <div className="d-flex justify-content-between">
                            <div>
                                &#x20B9; {flat.flat_price}
                            </div>
                            <div>
                                {flat.flat_size} sq. feet
                            </div>
                            <div>
                                {flat.flat_rooms} Rooms
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <div className="mr-auto">
                        <Link to="#" className="btn btn-sm btn-success text-white mx-3">View Phone Number</Link>
                    </div>
                    <div className="mr-1">
                        <Link to="#" className="btn btn-sm text-white btn-primary">Contact Dealer</Link>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {loading
                ?
                <Loading/>
                :
                <>
                    <div className="container mt-3">
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <h1>Sidebar</h1>
                                </Card>
                            </Col>
                            <Col md={9}>
                                {flatRender}
                            </Col>
                        </Row>
                    </div>
                </>
            }
        </div>
    );
};

export default Home;