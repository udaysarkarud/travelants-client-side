import React from 'react';
import SliderSection from './SliderSection/SliderSection'
import ServiceSection from './ServiceSection/ServiceSection'
import BlogSection from './BlogSection/BlogSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import AboutSection from './AboutSection/AboutSection';
import TopPackages from './TopPackages/TopPackages';

const Home = () => {
    return (
        <main>
            <SliderSection />
            <ServiceSection />
            <AboutSection />
            <TopPackages />
            <BlogSection />
        </main>
    );
};

export default Home;