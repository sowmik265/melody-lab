import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useClass from '../hooks/useClass';
import SectionTile from '../Utilitites/SectionTile';






const Myclass = () => {
    const { user, loading } = useAuth();


    const [classes] = useClass();
    const myClass = classes.filter((my) => my.email === `${user?.email}`);
    // console.log(myClass)

    return (

        <>

            <SectionTile title={'My All classes'}></SectionTile>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Schedule</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.totalSeats}
                                </td>
                                <td>${item.price}</td>
                                <td>{item.time}</td>
                                <td>
                                    {item.status === 'approved' ? <p className=' text-green-600 font-bold'>Approved</p> : <p className=' text-rose-600 font-bold'>waiting for approval</p>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>



    );
};

export default Myclass;