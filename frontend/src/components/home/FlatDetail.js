import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../layout/Loading";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Carousel, Col, Row} from "react-bootstrap";

const FlatDetail = (props) => {

    const [loading, setLoading] = useState(true);
    const [property, setProperty] = useState([]);
    const propertyId = props.match?.params?.flatId;

    useEffect(() => {
        async function fetchFlat() {
            const flat = await axios.get('flat/detail/', {params: {flat_id: propertyId}});
            setProperty([flat?.data]);
            setLoading(false);
        }

        fetchFlat();

    }, []);


    let flatDisplay = property.map((flat, index) =>
        <div key={index}>
            <Row>
                <Col md={8}>
                    <div className="img-responsive img-box">
                        <Carousel>
                            {flat.images.map((image, index) =>
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image.image}
                                        alt={index}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </Col>

                <Col md={4}>
                    <table className="text-center w-100 table-bordered" cellPadding="5px">
                        <tbody>
                        <tr>
                            <td>
                                <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="hand-holding-usd" color="orange"/> Rent</h6>
                                <p className="mb-0">{flat.rent}/month</p>
                            </td>
                            <td>
                                <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="user-shield" color="green"/> Security Deposite</h6>
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
                            <td colSpan="2">
                                <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="map-marked-alt" color="#617DA6"/> Address</h6>
                                <p className="text-left px-2 mb-0">{flat.address}</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <h6 className="text-secondary mt-2"><FontAwesomeIcon icon="file-contract" color="#FFE000"/> Posted On</h6>
                                <p className="text-left px-2 mb-0">{flat.post_datetime}</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
                    <div className="container mt-3">
                        {flatDisplay}
                    </div>
                </>
            }
        </div>
    );
};

export default FlatDetail;