import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const MyOrders = () => {
    const [myBookings, setMyBookings] = useState([])
    const usere = 'asdasdarud@gmail.com'

    useEffect(() => {
        axios.get(`http://localhost:5000/mybookings?search=${usere}`)
            .then(res => setMyBookings(res.data))
    })
    const handelDecline = (id) => {
        axios.delete(`http://localhost:5000/deletebooking/${id}`)
            .then(res => console.log(res))
    }
    return (
        <section>
            <h2>User orders</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBookings.map((details, index) =>
                            <tr key={details._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{details?.packagename}</td>
                                <td>{details?.price}</td>
                                <td>{details?.duration}</td>
                                <td>{details?.status}</td>
                                <td>
                                    <button onClick={() => handelDecline(details._id)} className="btn btn-warning">decline</button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </section >
    );
};

export default MyOrders;