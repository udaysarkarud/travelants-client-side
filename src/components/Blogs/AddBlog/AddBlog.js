import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddBlog = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const publishddate = new Date().toLocaleDateString()
        const content = { ...data, publishddate }
        axios.post('https://limitless-lake-67234.herokuapp.com/addblog', content)
            .then(res => {
                swal("Great!", "Your Blog Post Added", "successfully");
                reset()
            })
        reset()

    };
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>Write About Arts &amp; Culture</h1>
                        <p> Write your blog post to share informaton with all to know stay in a fantastic vacation house or apartment, arts and culture of these vibrant urban destinations. </p>
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