import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allBookings, setAllBookings] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/mybookings`)
            .then(res => setAllBookings(res.data))
    })

    const handelStatus = (id) => {
        console.log(id)
        axios.put(`http://localhost:5000/changestatus/${id}`)
            .then(res => console.log(res))
    }
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
                        allBookings.map((details, index) =>
                            <tr key={details._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{details?.packagename}</td>
                                <td>{details?.price}</td>
                                <td>{details?.duration}</td>
                                <td>{details?.status}</td>
                                <td>
                                    <button onClick={() => handelStatus(details._id)} className="btn btn-success">Accept</button>
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

export default ManageOrders;