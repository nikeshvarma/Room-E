import React from 'react';
import {Button} from "react-bootstrap";

const Footer = () => {

    return (
        <div>
            <footer id="footer" className="bg-dark">
                <div className="main-footer widgets-dark typo-light p-5 text-white-50">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h4 className="text-white">Roome</h4>
                                    <p>Roome is platform provide you facilities of search rooms for rent in your nearby locations.</p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h4 className="text-white">Quick Links</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            Get Started
                                        </li>
                                        <li>
                                            Top Leaders
                                        </li>
                                        <li>
                                            Success Stories
                                        </li>
                                        <li>
                                            Availabilities
                                        </li>
                                        <li>
                                            News
                                        </li>
                                        <li>
                                            About
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="text-white">Get Started</h5>
                                    <p>Start Listing Your Properties with us.</p>
                                    <Button variant="success w-100">Register Now</Button>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="text-white">Contact Us</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;