import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import Loading from "../layout/Loading";
import {Link} from "react-router-dom";
import Truncate from 'react-truncate';
import {useForm} from "react-hook-form";

const FlatList = (props) => {

    let query = props.location?.state?.query;
    const [flats, setFlats] = useState([]);
    const [location, setLocation] = useState(query)
    const [loading, setLoading] = useState(true);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const authToken = Cookies.get('auth_token');

    const filterFormSubmit = data => {
        let params = {
            'city': data.city,
            'budget': [data?.min_budget, data?.max_budget],
            'flat_types': data.house_type,
            'area': [data?.min_area, data?.max_area],
            'order': data.order
        }

        axios.get('/flat/search/', {params: params})
            .then((res) => setFlats(res.data))
            .catch((err) => console.log(err))
    }

    const setNewLocation = (event) => {
        setLocation(event.target.value);
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        if (authToken) {
            dispatch({type: IS_AUTH, payload: authToken})
        }


        let params = {
            'city': query,
            'budget': ['', ''],
            'flat_types': [],
            'area': ['', ''],
            'order': 'rent-inc'
        }

        async function fetchFlats() {
            const res = await axios.get('/flat/search/', {params: params})
            setFlats(res?.data)
            setLoading(false);
        }

        fetchFlats();

    }, [])


    let flatRender = flats.map((flat, index) =>
        <Card key={index} className="mb-4 shadow">
            <Card.Body>
                <Row>
                    <Col md={5}>
                        <img src={flat.image} width="100%" style={{maxHeight: 230}} className="rounded" alt={flat.id}/>
                    </Col>
                    <Col md={7}>
                        <p style={{fontSize: 16}}>{flat.rooms} BHK Flat for {flat.available_for} in {flat.locality}</p>
                        <div className="d-flex flex-wrap justify-content-between my-1">
                            <div>
                                <h5>&#x20B9; {flat.rent}<span className="small text-muted">/month</span></h5>
                            </div>
                            <div>
                                <h5>{flat.size} <span className="small text-muted">feet<sup>2</sup></span></h5>
                            </div>
                            <div>
                                <h5>{flat.rooms} BHK</h5>
                            </div>
                        </div>

                        <div className="my-2">
                            <Truncate lines={2} className="text-muted">
                                {flat.description}
                            </Truncate>
                        </div>

                        <hr/>

                        <div className="d-flex flex-wrap mt-2 align-items-center justify-content-between">
                            <div className="my-2">
                                <h6>Posted By: {flat.name}</h6>
                            </div>
                            <div>
                                {
                                    authToken
                                        ?
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a href={`tel: ${flat.contact_number}`} className="btn btn-info">
                                            {flat.contact_number}
                                        </a>
                                        :
                                        <Link to="/signup/">
                                            <button className="btn btn-success">Phone Number</button>
                                        </Link>
                                }

                            </div>
                            <div>
                                <Link to={`/view/property/${flat.id}/`}>
                                    <button className="btn btn-success">View &#8594;</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )

    let sidebar = (
        <div className="w-100 sticky-top mb-3">
            <Card>
                <form id="filter-form" onSubmit={handleSubmit(filterFormSubmit)} method="POST">
                    <Card.Body>
                        <div className="d-flex justify-content-between mb-4">
                            <button type="reset" className="btn btn-warning w-50 mr-4">Reset</button>
                            <button type="submit" className="btn btn-primary w-50 ml-4">Apply</button>
                        </div>

                        <div>
                            <h5 className="font-weight-bolder">Sort</h5>
                            <select ref={register} name="order" className="form-control">
                                <option value="rent-inc">Rent - Low to High</option>
                                <option value="rent-dec">Rent - High to Low</option>
                                <option value="size-inc">Size - Low to High</option>
                                <option value="size-dec">Size - High to Low</option>
                            </select>
                        </div>

                        <hr/>

                        <div>
                            <h5 className="font-weight-bolder">Location</h5>
                            <div className="d-flex justify-content-center">
                                <input
                                    ref={register}
                                    required={true}
                                    name="city"
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    value={location}
                                    onChange={setNewLocation}
                                />
                            </div>
                        </div>

                        <hr/>

                        <div className="mt-4">
                            <h5 className="font-weight-bold">Budget</h5>
                            <div className="d-flex justify-content-between my-3">
                                <input
                                    ref={register}
                                    type="tel"
                                    name="min_budget"
                                    className="form-control"
                                    placeholder="Min Budget"
                                    style={{width: 110}}
                                />
                                <input
                                    ref={register}
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
                            <div className="d-flex flex-wrap justify-content-between my-3 align-items-baseline">
                                <div>
                                    <input id="1bhk" ref={register} type="checkbox" name="house_type" value="1"/>
                                    <label className="ml-2" htmlFor="1bhk">1 BHK</label>
                                </div>
                                <div>
                                    <input id="2bhk" ref={register} type="checkbox" name="house_type" value="2"/>
                                    <label className="ml-2" htmlFor="2bhk">2 BHK</label>
                                </div>
                                <div>
                                    <input id="3bhk" ref={register} type="checkbox" name="house_type" value="3"/>
                                    <label className="ml-2" htmlFor="3bhk">3 BHK</label>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <div className="mt-4">
                            <h5 className="font-weight-bold">Area</h5>
                            <div className="d-flex justify-content-between my-3">
                                <input
                                    ref={register}
                                    type="tel"
                                    name="min_area"
                                    className="form-control"
                                    placeholder="Min Area"
                                    style={{width: 110}}
                                />
                                <input
                                    ref={register}
                                    type="tel"
                                    name="max_area"
                                    className="form-control"
                                    placeholder="Max Area"
                                    style={{width: 110}}
                                />
                            </div>
                        </div>
                    </Card.Body>
                </form>
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


export default FlatList;