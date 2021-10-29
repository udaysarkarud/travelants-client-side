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
        <section className="container" id="BlogSection">
            <h2>Blog Section</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    showAllBlogs?.map(blog => <SingelBlog key={blog._id} blogdetails={blog} />)
                }


            </div>
        </section>
    );
};

export default Blogs;