import React from 'react';
import { NavLink } from 'react-router-dom';

const SingelBlog = (props) => {
    const { _id, title, author, description, img, publishddate } = props.blogdetails
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="d-flex justify-content-between">
                    <p className="fw-bold fs-6 text-right"><i className="bi bi-person-lines-fill"></i> {author}</p>
                    <p className="fw-bold fs-6"><i className="bi bi-alarm"></i> {publishddate}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 150)} <NavLink to={`/blogdetails/${_id}`} className="link-secondary text-decoration-none">Read More...</NavLink></p>

                </div>
            </div>
        </div>
    );
};

export default SingelBlog;