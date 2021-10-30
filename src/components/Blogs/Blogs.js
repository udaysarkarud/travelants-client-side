import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SingelBlog from './SingelBlog/SingelBlog';

const Blogs = () => {
    const [showAllBlogs, setShowAllBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/showblogs')
            .then(res => setShowAllBlogs(res.data))
    }, [])
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>The Best Value Under the Sun</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim ad minim </p>
                    </div>
                </div>
            </div>
            <div className="row gy-4">

                {
                    showAllBlogs?.map(blog => <SingelBlog key={blog._id} blogdetails={blog} />)
                }


            </div>
        </section>
    );
};

export default Blogs;