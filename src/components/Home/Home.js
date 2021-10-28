import React from 'react';
import BannerSection from './BannerSection/BannerSection'
import ServiceSection from './ServiceSection/ServiceSection'
import BlogSection from './BlogSection/BlogSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'

const Home = () => {
    return (
        <section className="container">
            <BannerSection />
            <div>=====================</div>
            <ServiceSection />
            <div>=====================</div>
            <BlogSection />
            <div>=====================</div>
            <TestimonialSection />
        </section>
    );
};

export default Home;