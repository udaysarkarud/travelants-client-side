import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="footer-top pt-95 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-title">
                                <h3>Get in Touch</h3>
                            </div>

                            <div>
                                <p>Lorem ipsum dolor sit am co adipisicing elit, sed do eiusmod tempor</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="footer-contact-inner d-flex align-items-center">
                                        <div className="icon mr-20">
                                            <span><i className="bi bi-geo-alt-fill"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-contact-inner d-flex align-items-center">
                                        <div className="icon mr-20">
                                            <span><i className="bi bi-telephone-forward-fill"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>+1 800 123 4567</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-contact-inner d-flex align-items-center">
                                        <div className="icon mr-20">
                                            <span><i className="bi bi-envelope-fill"></i></span>
                                        </div>
                                        <div className="text">
                                            <p> yourmail@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div className="footer-content">
                                <div className="quick-links">
                                    <ul>
                                        <li><a href="#">Wellness</a></li>
                                        <li><a href="#">Vintage Stores</a></li>
                                        <li><a href="#">Trekking</a></li>
                                        <li><a href="#">Sightseeing</a></li>
                                        <li><a href="#">Tours</a></li>
                                        <li><a href="#">Sample Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div className="footer-content">
                                <div className="quick-links">
                                    <ul>
                                        <li><a href="#">Wellness</a></li>
                                        <li><a href="#">Vintage Stores</a></li>
                                        <li><a href="#">Trekking</a></li>
                                        <li><a href="#">Sightseeing</a></li>
                                        <li><a href="#">Tours</a></li>
                                        <li><a href="#">Sample Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 offset-xl-1 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget mb-50">
                                <div className="footer-title">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-content">
                                    <div className="subscribe">
                                        <p>Lorem ipsum dolor si consectetur adipisicing elit, sed eiusmotempor incididunt ut
                                            labore et</p>

                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" placeholder="Type Your Email" />
                                                <button className="sub-btn" type="submit"><i
                                                    className="fas fa-location-arrow"></i></button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="footer-copyright-inner">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="copyright-text">
                                    <p>Copyright © 2020 <a href="#"> TravelAnts</a>. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;