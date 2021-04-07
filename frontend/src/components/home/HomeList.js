import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";
import Loading from "../layout/Loading";
import {Link} from "react-router-dom";

const HomeList = (props) => {

    const [flats, setFlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = props.location?.state?.query;

    const dispatch = useDispatch();
    const authToken = Cookies.get('auth_token');

    useEffect(() => {
        if (authToken) {
            dispatch({type: IS_AUTH, payload: authToken})
        }

        console.log(query)

        async function fetchFlats() {
            const res = await axios.get('/flats/all/')
            setFlats(res?.data)
            setLoading(false);
        }

        fetchFlats();

    }, [])

    let flatRender = flats.map((flat, index) =>
        <Card key={index} className="mb-4">
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

    let sidebar = (
        <div className="w-100 sticky-top">
            <Card>
                <Card.Body>
                    <div>
                        <h5 className="font-weight-bolder">Location</h5>
                        <div className="d-flex justify-content-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={query}
                            />
                        </div>
                    </div>

                    <hr/>

                    <div className="mt-4">
                        <h5 className="font-weight-bold">Budget</h5>
                        <div className="d-flex justify-content-between my-3">
                            <input
                                type="tel"
                                name="min_budget"
                                className="form-control"
                                placeholder="Min Budget"
                                style={{width: 110}}
                            />
                            <input
                                type="tel"
                                name="max_budget"
                                className="form-control"
                                placeholder="Max Budget"
                                style={{width: 110}}
                            />
                        </div>
                    </div>

                    <hr/>

                    <div className="mt-4">
                        <h5 className="font-weight-bold">Flat Types</h5>
                        <div className="d-flex flex-wrap justify-content-around my-3">
                            <button type="button" className="btn btn-secondary" style={{borderRadius: 20}}>1 BHK</button>
                            <button type="button" className="btn btn-secondary" style={{borderRadius: 20}}>2 BHK</button>
                            <button type="button" className="btn btn-secondary" style={{borderRadius: 20}}>3 BHK</button>
                        </div>
                    </div>

                    <hr/>

                    <div className="mt-4">
                        <h5 className="font-weight-bold">Area</h5>
                        <div className="d-flex justify-content-between my-3">
                            <input
                                type="tel"
                                name="min_area"
                                className="form-control"
                                placeholder="Min Area"
                                style={{width: 110}}
                            />
                            <input
                                type="tel"
                                name="max_area"
                                className="form-control"
                                placeholder="Max Area"
                                style={{width: 110}}
                            />
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )

    return (
        <div>
            {loading
                ?
                <Loading/>
                :
                <>
                    <div className="container-fluid mt-3">
                        <Row>
                            <Col md={3}>
                                {sidebar}
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

export default HomeList;