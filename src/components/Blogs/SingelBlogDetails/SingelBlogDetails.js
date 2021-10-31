import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const SingelBlogDetails = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { bgi } = useParams();
    const [blogDetails, setBlogDetails] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/showblogs?find=${bgi}`)
            .then(res => setBlogDetails(res.data))
    }, [])


    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-6">
                    <div className="blog-details">
                        <h3 className="mt-4">{blogDetails.title}</h3>
                        <div className="d-flex">
                            <p>Author: {blogDetails.author} / Publishddate: {blogDetails.publishddate}</p>
                        </div>
                    </div>
                    <div className="blog-img">
                        <img src={blogDetails.img} alt="" className="img-fluid rounded" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="blog-details">
                        <h3 className="mt-4"></h3>
                        <p>{blogDetails.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingelBlogDetails;