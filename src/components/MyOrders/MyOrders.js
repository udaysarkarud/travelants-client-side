import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import swal from 'sweetalert';

const MyOrders = () => {
    const [myBookings, setMyBookings] = useState([])
    const [dbLoad, setDbload] = useState(0)
    const { userProfile } = useAuth();

    useEffect(() => {
        axios.get(`https://limitless-lake-67234.herokuapp.com/mybookings?search=${userProfile.email}`)
            .then(res => {
                setMyBookings(res.data)
                setDbload(dbLoad + 1)
            })
    }, [dbLoad])

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
                    axios.delete(`https://limitless-lake-67234.herokuapp.com/deletebooking/${id}`)
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
                        <h1>Find your all boonking</h1>
                        <p> Find out your all bookings so that you can easily control everything. you also can delete your booking if you like to do.</p>
                    </div>
                </div>
            </div>
            <div className="row gy-4 table-responsive">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                            myBookings.map((details, index) =>
                                <tr key={details._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{details?.packagename}</td>
                                    <td>{details?.price}</td>
                                    <td>{details?.duration}</td>
                                    <td>{details?.bookeddate}</td>
                                    <td>{details?.status}</td>
                                    <td>
                                        <button onClick={() => handelDecline(details._id)} className="btn btn-warning">Delete Booking</button>
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

export default MyOrders;