
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const publishddate = new Date().toLocaleDateString()
        const content = { ...data, publishddate }
        axios.post('http://localhost:5000/addblog', content)
            .then(res => console.log(res))
        reset()

    };
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>The Best Value Under the Sun</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim ad minim </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <img className="img-fluid" src="https://www.kindpng.com/picc/m/363-3636981_actor-clipart-chair-script-writer-icon-png-transparent.png" alt="" />
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">


                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <div className="form-outline mb-4">
                            <input {...register("title", { required: true })} className="form-control form-control-lg" placeholder="Blog Title" />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="form-outline mb-4">
                            <input {...register("author", { required: true })} className="form-control form-control-lg" placeholder="Author Name" />
                            {errors.author && <span>This field is required</span>}
                        </div>

                        <div className="form-outline mb-4">
                            <textarea {...register("description", { required: true })} className="form-control form-control-lg" placeholder="Description" rows="8" />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="form-outline mb-4">
                            <input {...register("img", { required: true })} className="form-control form-control-lg" placeholder="Image url" />
                            {errors.img && <span>This field is required</span>}
                        </div>

                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block"
                                type="submit">Add New Blog Post</button>

                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Reset</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default AddBlog;