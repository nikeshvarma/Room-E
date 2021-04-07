import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import Loading from "../layout/Loading";
import {Link} from "react-router-dom";
import Truncate from 'react-truncate';

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
                    <Col md={5}>
                        <img src={flat.photo1} width="100%" style={{maxHeight: 230}} className="rounded" alt={flat.id}/>
                    </Col>
                    <Col md={7}>
                        <p style={{fontSize: 16}}>{flat.flat_rooms} BHK Flat for {flat.flat_for} in {flat.flat_locality}</p>
                        <div className="d-flex flex-wrap justify-content-between my-1">
                            <div>
                                <h5>&#x20B9; {flat.flat_price}<span className="small text-muted">/month</span></h5>
                            </div>
                            <div>
                                <h5>{flat.flat_size} <span className="small text-muted">feet<sup>2</sup></span></h5>
                            </div>
                            <div>
                                <h5>{flat.flat_rooms} BHK</h5>
                            </div>
                        </div>

                        <div className="my-2">
                            <Truncate lines={2} className="text-muted">
                                {flat.flat_description}
                            </Truncate>
                        </div>

                        <hr/>

                        <div className="d-flex flex-wrap mt-2 align-items-center justify-content-center justify-content-md-between">
                            <div className="my-2">
                                <h6>Posted By: {flat.owner_first_name} {flat.owner_last_name}</h6>
                            </div>
                            <div className="">
                                <button className="btn btn-success">Phone Number</button>
                            </div>
                            <div className="">
                                <button className="btn btn-primary">View &#8594;</button>
                            </div>
                        </div>
                    </Col>
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