import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelBlog from '../../Blogs/SingelBlog/SingelBlog';

const BlogSection = () => {
    const [showBlogs, setShowBlogs] = useState([])

    useEffect(() => {
        axios.get('https://limitless-lake-67234.herokuapp.com/showblogs?type=home')
            .then(res => setShowBlogs(res.data))
    }, [])

    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>Read Cities for Arts &amp; Culture</h1>
                        <p> Read our blog to know stay in a fantastic vacation house or apartment rental and immerse yourself in the music, arts and culture of these vibrant urban destinations. </p>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
                {
                    showBlogs.length === 0 ?
                        <section className="container section-gap">
                            <div className="container">
                                <div className="row">
                                    <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                                </div>
                            </div>
                        </section>
                        :
                        showBlogs?.map(blog => <SingelBlog key={blog._id} blogdetails={blog} />)
                }
            </div>
        </section>
    );
};

export default BlogSection;