import React from 'react';
import { Link } from 'react-router-dom';

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

                            <div className="quick-contacts">
                                <p>We love to help you. Feel free to contact us Or visit our office anytime.</p>
                            </div>
                            <ul className="quick-contact-details">
                                <li className="nav-link text-black">
                                    <div className="footer-contact-inner d-flex align-items-center">
                                        <div className="icon mr-20">
                                            <span><i className="bi bi-geo-alt-fill"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-link text-black">
                                    <div className="footer-contact-inner d-flex align-items-center">
                                        <div className="icon mr-20">
                                            <span><i className="bi bi-telephone-forward-fill"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>+1 800 123 4567</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-link text-black">
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
                                <h3>User Nav</h3>
                            </div>
                            <div className="footer-content">
                                <div className="quick-links">
                                    <ul>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/aboutus">About Us</Link></li>
                                        <li><Link to="/myorders">Trek Your Book</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-title">
                                <h3>Admin Nav</h3>
                            </div>
                            <div className="footer-content">
                                <div className="quick-links">
                                    <ul>
                                        <li><Link to="/manageorders">Manage Booking</Link></li>
                                        <li><Link to="/addblog">Add Blog Post</Link></li>
                                        <li><Link to="/addpackage">Add New Package</Link></li>

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
                                        <p>To get our latest update feel free to subscribe. We'll send all updates at your email.</p>

                                        <div className="subscribe-form">
                                            <input type="email" placeholder="Type Your Email" />
                                            <button className="sub-btn" type="submit">
                                                <i className="bi bi-arrow-right-circle-fill"></i>
                                            </button>
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
                                    <p>Copyright © 2020 <a href="/"> TravelAnts</a>. All Rights Reserved.</p>
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