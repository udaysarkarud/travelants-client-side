import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [allBookings, setAllBookings] = useState([])
    const [dbLoad, setDbload] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:5000/mybookings`)
            .then(res => {
                setAllBookings(res.data)
            })
    }, [dbLoad])

    const handelStatus = (id) => {
        console.log(id)
        axios.put(`http://localhost:5000/changestatus/${id}`)
            .then(res => {
                setDbload(dbLoad + 1)
            })
    }

    const handelDecline = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able track this booking",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:5000/deletebooking/${id}`)
                        .then(res => {
                            setDbload(dbLoad + 1)
                        })
                    swal("Deleted booking successfully", {
                        icon: "success",
                    });
                } else {
                    swal("You can still tack this booking");
                }
            });
    }
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="sec-title text-center mb-50">
                        <h1>hello! Admin, find all bookings</h1>
                        <p> Find all booking information of all users. you can approve or delete any booking by this way you can easy control your customer all bookings </p>
                    </div>
                </div>
            </div>
            <div className="row gy-4">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBookings.map((details, index) =>
                                <tr key={details._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={details?.userPhoto} alt="" style={{ width: "10%" }} className="mx-2 rounded-circle" /> {details?.username}</td>
                                    <td>{details?.packagename}</td>
                                    <td>{details?.price}</td>
                                    <td>{details?.duration}</td>
                                    <td>{details?.bookeddate}</td>
                                    <td>{details?.status}</td>
                                    <td>
                                        {
                                            details?.status === 'pending' && <button onClick={() => handelStatus(details._id)} className="btn btn-success me-2">Approve</button>
                                        }

                                        <button onClick={() => handelDecline(details._id)} className="btn btn-warning">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageOrders;