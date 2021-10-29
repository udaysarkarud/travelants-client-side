import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SingelPackage = (props) => {
    const { _id, type, name, price, duration, description, img } = props.packdetails

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="fw-bold fs-6 text-right">${price}/Per Person</p>
                        <p className="fw-bold fs-6"><i className="bi bi-calendar-week"></i> {duration}</p>
                    </div>
                    <h3 className="card-title"><i className="bi bi-geo-alt-fill"></i> {name}</h3>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <NavLink to={`/booking/${_id}`} className="btn btn-outline-warning">Book Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingelPackage;