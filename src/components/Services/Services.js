import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelPackage from '../SingelPackage/SingelPackage';

const Services = () => {
    const [tourPackage, setTourPackage] = useState([]);

    useEffect(() => {
        axios.get('https://limitless-lake-67234.herokuapp.com/showpackages')
            .then(res => setTourPackage(res.data))
    }, [])
    return (
        <section className="container section-gap">

            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Popular Tour</h1>
                        <p> The World's Largest Selection of Holiday Lettings. Find The Perfect Escape. Discover our popular package and find your soul again. </p>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    tourPackage.length === 0 ?
                        <section className="container section-gap">
                            <div className="container">
                                <div className="row">
                                    <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                                </div>
                            </div>
                        </section>
                        :
                        tourPackage?.map(tour => <SingelPackage key={tour._id} packdetails={tour} />)
                }
            </div>
        </section>
    );
};

export default Services;