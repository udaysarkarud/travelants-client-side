
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
        <section className="container">
            <h2>Add Blog</h2>
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <input {...register("title", { required: true })} placeholder="Blog Title" />
                    {errors.title && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("author", { required: true })} placeholder="Author Name" />
                    {errors.author && <span>This field is required</span>}
                    <br /><br />

                    <textarea {...register("description", { required: true })} placeholder="Description" />
                    {errors.description && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("img", { required: true })} placeholder="Image url" />
                    {errors.img && <span>This field is required</span>}
                    <br /><br />
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddBlog;