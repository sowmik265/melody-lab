import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // console.log('user profile updated');
                        const saveUser = { name: data.name, email: data.email, photoURL: data.photo }
                        fetch('https://melody-lab-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'Successfully Registered !',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title> Melody Lab | Register</title>
            </Helmet>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-2 pb-10">
                <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-rose-700 mt-32 pb-32 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-yellow-300 uppercase">
                        Register
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="mb-2">
                            <label
                                for="name"
                                className="block text-sm font-semibold text-yellow-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder='Your name'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("name", { required: true, maxLength: 20 })}
                            />
                            {errors.name && <span className='text-yellow-300'>This field is required</span>}
                        </div>

                        <div className="mb-2">
                            <label
                                for="photo"
                                className="block text-sm font-semibold text-yellow-300"
                            >
                                Photo URL
                            </label>
                            <input
                                type="text"
                                placeholder='Your photo URL'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <span className='text-yellow-300'>This field is required</span>}
                        </div>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibol text-yellow-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder='Your email address'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-yellow-300'>This field is required</span>}
                        </div>

                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-yellow-300"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder='Your password'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                            />
                            {errors.password?.type === 'required' && <p className="text-yellow-300">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-yellow-300">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-yellow-300">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-yellow-300">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-yellow-300"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder='Confirm your password'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("confirm_password", {
                                    required: true,
                                    validate: (val) => {
                                        if (watch('password') !== val) {
                                            return "Your passwords do not match";
                                        }
                                    },
                                })}
                            />

                            {errors.confirm_password && (
                                <span className="error text-yellow-300">{errors.confirm_password.message}</span>
                            )}

                        </div>


                        <div className="mt-6">
                            <button className="btn btn-outline btn-warning border-b-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-rose-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-gray-200">
                        Already have an account?{" "}
                        <span>
                            <NavLink to='/signin'>
                                <a className="text-yellow-400 hover:underline" href="#">
                                    Log in
                                </a>
                            </NavLink>

                        </span>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;