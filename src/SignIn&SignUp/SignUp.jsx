import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-rose-700 mt-6">
                <h1 className="text-3xl font-semibold text-center text-gray-200 uppercase">
                    Register
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder='Your name'
                            className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-200 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register("name", { required: true, maxLength: 20 })}
                        />
                        {errors.name && <span className='text-yellow-300'>This field is required</span>}
                    </div>

                    <div className="mb-2">
                        <label
                            for="photo"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder='Your photo URL'
                            className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-200 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && <span className='text-yellow-300'>This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder='Your email address'
                            className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-200 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-yellow-300'>This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder='Your password'
                            className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-200 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-300 rounded-md hover:bg-rose-200 focus:outline-none focus:bg-rose-600">
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
    );
};

export default SignUp;