import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddPackage = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://limitless-lake-67234.herokuapp.com/addtourpackage', data)
            .then(res => {
                swal("Great!", "New Tour Package Added", "success");
                reset()
            })
    };

    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>Add packages for users</h1>
                        <p> Provide all correct informations so that user can select the right package for themselfs. provide package name, duration and image </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <img className="img-fluid" src="https://www.kindpng.com/picc/m/733-7333984_travel-background-png-traveller-around-the-world-transparent.png" alt="" />
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">


                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <div className="form-outline mb-4">
                            <select {...register("type")} className="form-control form-control-lg">
                                <option value="Regular">Regular</option>
                                <option value="Special">Premium</option>
                                <option value="Special">Special</option>
                            </select>
                            {errors.type && <span>This field is required</span>}
                        </div>


                        <div className="form-outline mb-4">
                            <input {...register("name", { required: true })} placeholder="Package Name" className="form-control form-control-lg" />
                            {errors.name && <span>This field is required</span>}

                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="form-control form-control-lg" />
                            {errors.price && <span>This field is required</span>}

                        </div>

                        <div className="form-outline mb-4">
                            <input {...register("duration", { required: true })} placeholder="Duration" className="form-control form-control-lg" />
                            {errors.duration && <span>This field is required</span>}

                        </div>

                        <div className="form-outline mb-4">
                            <textarea {...register("description", { required: true })} placeholder="Description" className="form-control form-control-lg" rows="6" />
                            {errors.description && <span>This field is required</span>}

                        </div>

                        <div className="form-outline mb-4">
                            <input {...register("img", { required: true })} className="form-control form-control-lg" placeholder="Image Link" />
                            {errors.img && <span>This field is required</span>}

                        </div>
                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block"
                                type="submit">Add New Package</button>

                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Reset</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default AddPackage;