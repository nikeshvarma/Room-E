import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../layout/Loading";
import {Carousel, Col, Row} from "react-bootstrap";

const FlatDetail = (props) => {

    const [loading, setLoading] = useState(false);
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
                <Col md={6}>
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

                <Col md={6}>

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