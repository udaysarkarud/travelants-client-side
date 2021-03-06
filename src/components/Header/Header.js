import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const { userProfile, handelSignOut } = useAuth();
    return (
        <header className="header-area header-dark bg-dark">
            <div className="container py-2 fs-6">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bolder" href="/"><i className="bi bi-flower2"></i> TravelAnts</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/home' className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services" className="nav-link">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                                </li>
                            </ul>
                            {
                                userProfile.email ?
                                    <>
                                        <img src={userProfile?.photoURL} alt="" style={{ width: "40px" }} className="mx-2 rounded-circle d-none d-lg-block" />

                                        <div className="dropdown">
                                            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                {userProfile?.displayName}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to='/myorders' className="dropdown-item">
                                                        <i className="bi bi-person-circle"></i> User Dash</NavLink>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <NavLink to='/manageorders' className="dropdown-item">Manage All Orders</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/addpackage' className="dropdown-item">Add New Package</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/addblog' className="dropdown-item">Add New Blog</NavLink>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <button className="dropdown-item" onClick={handelSignOut}>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <Link to="/login">
                                        <button className="btn">
                                            <i className="bi bi-person-circle"></i> Login /Singup
                                        </button>
                                    </Link>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header >
    );
};

export default Header;