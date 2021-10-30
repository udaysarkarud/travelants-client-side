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
                        <h1>The Best Value Under the Sun</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua Ut enim ad minim </p>
                    </div>
                </div>
            </div>
            <div className="row gy-4">

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
            </div>
        </section>
    );
};

export default ManageOrders;