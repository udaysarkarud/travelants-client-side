import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelPackage from '../../SingelPackage/SingelPackage';

const ServiceSection = () => {

    const [tourPackage, setTourPackage] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/showpackages')
            .then(res => setTourPackage(res.data))
    }, [])

    return (
        <section className="container section-gap">

            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Popular Tour</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim ad minim </p>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    tourPackage?.map(tour => <SingelPackage key={tour._id} packdetails={tour} />)
                }
            </div>
        </section>
    );
};

export default ServiceSection;