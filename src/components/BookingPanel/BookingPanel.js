import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const BookingPanel = () => {
    const { pkg } = useParams();
    const [singelPkg, setSingelPkg] = useState({})

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
        <section className="container">
            <h2>Booking Section</h2>
            <div className="row">
                <div className="col-8">
                    <h3>Package Info</h3>
                    <h2>{singelPkg.name}</h2>
                    <p>{singelPkg.duration}</p>
                    <p>{singelPkg.description}</p>
                    <img src={singelPkg.img} alt="" />
                </div>
                <div className="col-4">
                    <h3>Order Derails</h3>
                    <div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("username")} />
                            <br /><br />

                            <input {...register("email")} />
                            <br /><br />

                            <input defaultValue={singelPkg.name} {...register("packagename")} />
                            <br /><br />

                            <input defaultValue={singelPkg.price} type="number" {...register("price")} />
                            <br /><br />

                            <input defaultValue={singelPkg.duration} {...register("duration")} />
                            <br /><br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingPanel;