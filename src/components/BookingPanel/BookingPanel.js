import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const BookingPanel = () => {
    const { pkg } = useParams();
    const [singelPkg, setSingelPkg] = useState({})
    const { userProfile } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/packagedata/${pkg}`)
            .then(res => setSingelPkg(res.data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        reset()
    }, [singelPkg])

    const onSubmit = data => {
        const bookingData = { packageId: singelPkg._id, ...data, status: 'pending' }
        axios.post('http://localhost:5000/newbooking', bookingData)
            .then(res => {
                console.log(res)
            })
    };

    return (
        <section class="container section-gap">
            <div class="row">
                <div class="col-8">
                    <div class="blog-img">
                        <img src={singelPkg.img} alt="" class="img-fluid" />
                    </div>

                    <div class="blog-details">
                        <h3 class="mt-4">{singelPkg.name}</h3>
                        <div class="d-flex">
                            <p>{singelPkg.duration}</p>
                        </div>
                        <p>{singelPkg.description}</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="blog-sidebar">
                        <div class="blog-search mb-5">
                            <h3>SEARCH</h3>
                            <form action="#">
                                <input type="text" />
                            </form>
                        </div>
                        <div class="blog-list">
                            <h3>CATEGORIES</h3>
                            <ul>
                                <li><a href="#">Graphic Design</a><span class="f-right">(25)</span></li>
                                <li><a href="#">Graphic Design</a><span class="f-right">(25)</span></li>
                                <li><a href="#">Graphic Design</a><span class="f-right">(25)</span></li>
                                <li><a href="#">Graphic Design</a><span class="f-right">(25)</span></li>
                                <li><a href="#">Graphic Design</a><span class="f-right">(25)</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingPanel;