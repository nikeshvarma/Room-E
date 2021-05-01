import React from 'react';
import {FaFacebookF, FiGithub, SiGmail, SiInstagram} from 'react-icons/all';

const About = () => {
    return (
        <div>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About us</h1>
                            <p className="lead text-muted mb-0">Roome is easiest way to find rooms nearby you available on rent.</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid"/></div>
                    </div>
                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our team</h2>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-md-6 mb-3">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 className="mb-0">Nikesh Varma</h5><span className="small text-uppercase text-muted">Full Stack Developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://github.com/nikeshvarma" target="_blank" className="social-link"><FiGithub size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="https://www.facebook.com/nikesh.varma.520/" target="_blank" className="social-link"><FaFacebookF size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/__nikesh08__/" target="_blank" className="social-link"><SiInstagram size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="mailto: nikeshvarma50@gmail.com" target="_blank" className="social-link"><SiGmail size="1.2rem"/></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6  mb-3">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 className="mb-0">Shubham Shrivas</h5><span className="small text-uppercase text-muted">Backend Developer</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="https://github.com/shubham013333" target="_blank" className="social-link"><FiGithub size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="https://www.facebook.com/shubham.shrivas.5688" target="_blank" className="social-link"><FaFacebookF size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/shubham.shrivas_/" target="_blank" className="social-link"><SiInstagram size="1.2rem"/></a></li>
                                    <li className="list-inline-item"><a href="mailto: subhamshrivas101@gmail.com" target="_blank" className="social-link"><SiGmail size="1.2rem"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;