import React from 'react';
import { NavLink } from 'react-router-dom';

const SingelBlog = (props) => {
    const { _id, title, author, description, img, publishddate } = props.blogdetails
    return (
        <div className="col-xl-6 col-lg-6 col-12">
            <div className="single-blog fix mb-30 w-img">
                <div className="blog-thumb">
                    <img src={img} alt="blog-sm" />
                </div>
                <div className="blog-content">
                    <h1><NavLink to={`/blogdetails/${_id}`}>{title}</NavLink></h1>
                    <p>{description.slice(0, 150)}</p>
                    <div className="d-flex">
                        <p>Author: {author}</p>
                        <p className="me-2 ms-2"> / </p>
                        <p>Published: {publishddate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelBlog;