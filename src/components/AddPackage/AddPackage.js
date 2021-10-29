import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/addtourpackage', data)
            .then(res => console.log(res))
        console.log(data)
        reset()
    };

    return (
        <section className="container">
            <h2>Add New Service</h2>
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <select {...register("type")}>
                        <option value="Regular">Regular</option>
                        <option value="Special">Special</option>
                        <option value="Notun Biya Boise">Notun Biya Boise</option>
                    </select>
                    {errors.type && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("name", { required: true })} placeholder="Package Name" />
                    {errors.name && <span>This field is required</span>}
                    <br /><br />

                    <input type="number" {...register("price", { required: true })} placeholder="Price" />
                    {errors.price && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("duration", { required: true })} placeholder="Duration" />
                    {errors.duration && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("description", { required: true })} placeholder="Description" />
                    {errors.description && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("img", { required: true })} />
                    {errors.img && <span>This field is required</span>}
                    <br /><br />
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddPackage;