import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTile from '../Utilitites/SectionTile';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const onSubmit = data => {
        const formData = new FormData();

        const { className, price, classImage, totalSeats, time } = data;
        // console.log(data)
        const newItem = { instructorName : user?.displayName , classImage, email : user?.email, className, totalSeats : parseFloat(totalSeats), price: parseFloat(price), time  }
        console.log(newItem)
        axiosSecure.post('/classes', newItem)
            .then(data => {
                console.log('after posting new class item', data.data)
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div>
            <SectionTile title={'Add a new class'}></SectionTile>
            <div className="w-full px-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* class name & price */}
                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Class Name*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("className", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Guitar</option>
                                <option>violin</option>
                                <option>piano</option>
                                <option>saxophone</option>
                                <option>drums</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* photo */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL*</span>
                        </label>
                        <input type="text" placeholder="Photo URL"
                            {...register("classImage", { required: true ,maxLength: 220})}
                            className="input input-bordered w-full " />
                    </div>
                    {/* seat*/}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Seats*</span>
                        </label>
                        <input type="text" placeholder="Seats"
                            {...register("totalSeats", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    {/* time*/}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Schedule*</span>
                        </label>
                        <input type="text" placeholder="Schedule"
                            {...register("time", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;