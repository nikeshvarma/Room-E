import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import Loading from "../layout/Loading";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, Carousel, Col, Modal, Row} from "react-bootstrap";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";
import {Link} from "react-router-dom";

const FlatDetail = (props) => {

    const authToken = Cookies.get('auth_token');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [property, setProperty] = useState([]);
    const [show, setShow] = useState(false);
    const [owner, setOwner] = useState([]);
    const propertyId = props.match?.params?.flatId;
    const hideModal = () => setShow(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (authToken) {
            dispatch({type: IS_AUTH, payload: authToken})
        }

        async function fetchFlat() {
            const flat = await axios.get('flat/detail/', {params: {flat_id: propertyId}});
            setProperty([flat?.data]);
            setLoading(false);
        }

        fetchFlat();

    }, []);

    const handleShow = async () => {
        setShow(!show);
        const res = await axios.get('flat/owner-info/', {params: {flat_id: propertyId}, headers: {Authorization: 'Token ' + authToken}});
        setOwner(res.data);
    }

    let flatDisplay = property.map((flat, index) =>
        <div key={index}>
            <Row className="no-gutters">
                <Col lg={8}>
                    <div className="img-responsive img-box">
                        <Carousel>
                            {flat.images.map((image, index) =>
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100 my-auto"
                                        src={image.image}
                                        alt={index}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="p-2 mt-0 mt-lg-3">
                        <table className="text-center w-100 table-bordered" cellPadding="5px">
                            <tbody>
                            <tr>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="hand-holding-usd" color="orange"/> Rent</h6>
                                    <p className="mb-0">{flat.rent}/month</p>
                                </td>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="shield-alt" color="green"/> Security Deposite</h6>
                                    <p className="mb-0">&#x20B9; {flat.security_deposit}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="users" color="#87CEEB"/> Available For</h6>
                                    <p className="mb-0">{flat.available_for}</p>
                                </td>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="home" color="#8000FF"/> Flat Type</h6>
                                    <p className="mb-0">{flat.rooms} BHK</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="calendar-check" color="#9589b0"/> Posted On</h6>
                                    <p className="mb-0">{flat.post_datetime}</p>
                                </td>
                                <td>
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="user" color="#5a9177"/> Owner</h6>
                                    <p className="mb-0">{flat.owner}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="map-marked-alt" color="#617DA6"/> Address</h6>
                                    <p className="text-left px-2 mb-0">{flat.address}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="d-flex mt-3 justify-content-between">
                            <Button variant="secondary w-50 mr-3"><FontAwesomeIcon icon="clipboard-list"/> Shortlist</Button>
                            {
                                authToken
                                    ?
                                    <Button onClick={handleShow} variant="primary w-50 ml-3"><FontAwesomeIcon icon="phone-alt"/> Contact</Button>
                                    :
                                    <Link to='/login/'>
                                        <Button variant="primary w-100"><FontAwesomeIcon icon="phone-alt"/> Contact</Button>
                                    </Link>
                            }
                        </div>
                    </div>
                </Col>

                <Modal
                    show={show}
                    onHide={hideModal}
                    size="md"
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="d-flex justify-content-between">
                                <h5>Name</h5>
                                <h5>{owner.name}</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Phone Number</h5>
                                <h5>+91 {owner.phone_number}</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Email</h5>
                                <h5>{owner.email}</h5>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </Row>

            <Row className="my-2">
                <Col sm={12}>
                    <h5>Property Description</h5>
                    <p className="text-muted">{flat.description}</p>
                </Col>
            </Row>

            <Row className="my-2">
                <Col sm={12}>
                    <h5>Amenities</h5>
                    <div className="d-flex flex-wrap justify-content-around align-items-center mt-3 text-center">
                        {
                            Object.entries(flat.amenities).map((item, index) => {

                                if (item[0] === 'celling_fan' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="fan" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Fan</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'bed' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="bed" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Bed</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'sofa' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="couch" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Sofa</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'air_conditioner' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="wind" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">AC</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'water_purifier' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="filter" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Purifier</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'geyser' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="hot-tub" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Geyser</h6>
                                        </div>
                                    )
                                } else if (item[0] === 'parking' && item[1]) {
                                    return (
                                        <div className="mx-4 my-3 my-lg-0" key={index}>
                                            <FontAwesomeIcon icon="car-alt" color="#A9A9A9" size="2x"/>
                                            <h6 className="mt-2">Parking</h6>
                                        </div>
                                    )
                                } else {
                                    return "";
                                }
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )


    return (
        <div>
            {loading
                ?
                <Loading/>
                :
                <>
                    <div className="container-lg mt-1">
                        {flatDisplay}
                    </div>
                </>
            }
        </div>
    );
};

export default FlatDetail;