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
        <section className="container" id="ServiceSection">
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    tourPackage?.map(tour => <SingelPackage key={tour._id} packdetails={tour} />)
                }

            </div>
        </section>
    );
};

export default ServiceSection;