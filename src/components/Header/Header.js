import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/home#ServiceSection" className="nav-link">Services</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/home#BlogSection" className="nav-link">Blogs</HashLink>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle"></i> User Name
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to='/login' className="dropdown-item">Login / SingUp</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/myorders' className="dropdown-item">My Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/manageorders' className="dropdown-item">Manage All Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/addpackage' className="dropdown-item">Add New Package</NavLink>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;