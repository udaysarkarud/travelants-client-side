import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import swal from 'sweetalert';

const BookingPanel = () => {
    const { pkg } = useParams();
    const [singelPkg, setSingelPkg] = useState({})
    const { userProfile } = useAuth();
    const history = useHistory()

    useEffect(() => {
        axios.get(`https://limitless-lake-67234.herokuapp.com/showpackages?find=${pkg}`)
            .then(res => setSingelPkg(res.data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        reset()
    }, [singelPkg])

    const onSubmit = data => {
        const bookingData = { packageId: singelPkg._id, ...data, status: 'pending', userPhoto: userProfile.photoURL }
        console.log(bookingData)

        axios.post('https://limitless-lake-67234.herokuapp.com/newbooking', bookingData)
            .then(res => {
                swal("Good job!", "You have booked your tour", "successfully")
                    .then((value) => {
                        history.push('/myorders')
                    });
            })
    };

    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="blog-img">
                        <img src={singelPkg.img} alt="" className="img-fluid" />
                    </div>

                    <div className="blog-details">
                        <h3 className="mt-4">{singelPkg.name}</h3>
                        <div className="d-flex">
                            <p>{singelPkg.duration}</p>
                        </div>
                        <p>{singelPkg.description}</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="blog-sidebar">
                        <div className="blog-search mb-5">
                            <h3></h3>
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                <div className="form-outline mb-4">
                                    <input {...register("username", { required: true })} className="form-control form-control-lg" defaultValue={userProfile.displayName} />
                                    {errors.username && <span>This field is required</span>}

                                </div>
                                <div className="form-outline mb-4">
                                    <input {...register("email", { required: true })} className="form-control form-control-lg" defaultValue={userProfile.email} />
                                    {errors.email && <span>This field is required</span>}

                                </div>

                                <div className="form-outline mb-4">
                                    <input {...register("packagename", { required: true })} className="form-control form-control-lg" defaultValue={singelPkg.name} />
                                    {errors.packagename && <span>This field is required</span>}

                                </div>

                                <div className="form-outline mb-4">
                                    <input type="number" {...register("price", { required: true })} className="form-control form-control-lg" defaultValue={singelPkg.price} />
                                    {errors.price && <span>This field is required</span>}

                                </div>

                                <div className="form-outline mb-4">
                                    <input {...register("duration", { required: true })} placeholder="Duration" className="form-control form-control-lg" defaultValue={singelPkg.duration} />
                                    {errors.duration && <span>This field is required</span>}

                                </div>

                                <div className="form-outline mb-4">
                                    <input type="date" {...register("bookeddate", { required: true })} className="form-control form-control-lg" />
                                    {errors.bookeddate && <span>This field is required</span>}

                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-dark btn-lg btn-block"
                                        type="submit">Book Now</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingPanel;