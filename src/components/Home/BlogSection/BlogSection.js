import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelBlog from '../../Blogs/SingelBlog/SingelBlog';

const BlogSection = () => {
    const [showBlogs, setShowBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/showblogs?type=home')
            .then(res => setShowBlogs(res.data))
    }, [])

    return (
        <section className="container" id="BlogSection">
            <h2>Blog Section</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    showBlogs?.map(blog => <SingelBlog key={blog._id} blogdetails={blog} />)
                }


            </div>
        </section>
    );
};

export default BlogSection;