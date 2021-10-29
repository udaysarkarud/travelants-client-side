import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const SingelBlogDetails = () => {
    const { bgi } = useParams();
    const [blogDetails, setBlogDetails] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/showblogs?find=${bgi}`)
            .then(res => setBlogDetails(res.data))
    }, [])


    return (
        <section className="container">
            <img src={blogDetails.img} alt="" />
            <h2>{blogDetails.title}</h2>
            <p>{blogDetails.author} / {blogDetails.publishddate}</p>
            <p>{blogDetails.description}</p>
        </section>
    );
};

export default SingelBlogDetails;