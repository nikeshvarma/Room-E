import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loading from "../layout/Loading";
import {Col, Row} from "react-bootstrap";

const FlatDetail = (props) => {

    const [loading, setLoading] = useState(false);
    const [flat, setFlat] = useState([]);
    const propertyId = props.match?.params?.flatId;

    useEffect(() => {
        async function fetchFlat() {
            const flat = await axios.get('flat/detail/', {params: {flat_id: propertyId}});
            setFlat(flat?.data);
            setLoading(false);
            console.log(flat.data);
        }

        fetchFlat();
    }, [])

    const {id, rent, images, rooms} = flat;

    const flatDisplay =
        <>
            <Row>
                <Col md={6}>

                </Col>
                <Col md={6}>
                    <h4>Rent {rent}<span className="small text-secondary">/month</span></h4>
                </Col>
            </Row>
        </>

    return (
        <div>
            {loading
                ?
                <Loading/>
                :
                <>
                    <div className="container-fluid mt-3">
                        {flatDisplay}
                    </div>
                </>
            }
        </div>
    );
};

export default FlatDetail;