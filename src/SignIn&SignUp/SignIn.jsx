import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import LoginAnimation from '../../src/assets/LoginAnimation.json';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { signIn, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState('');

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                reset();
                setError("");
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://melody-lab-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }





    return (
        <>
            <Helmet>
                <title>Melody Lab | Log in</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse mt-32">

                    {/* animation */}
                    <div className="text-center md:w-1/2">
                        <h1 className="text-5xl font-bold text-yellow-500">Login now!</h1>
                        <Lottie animationData={LoginAnimation}></Lottie>
                    </div>

                    {/* form */}
                    <div onSubmit={handleSubmit(onSubmit)} className=" p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-rose-700 md:w-1/2 w-full">
                        <form className="mt-6">
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-yellow-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder='Your email address'
                                    className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-yellow-300'>Email is required</span>}
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
                                    })}
                                />
                                {errors.password && <span className='text-yellow-300'>Password is required</span>}
                            </div>
                            <div>
                                <p className='text-yellow-300'>{error}</p>
                            </div>
                            <a
                                href="#"
                                className="text-xs text-yellow-300 hover:underline"
                            >
                                Forget Password?
                            </a>
                            <div className="mt-6">
                                <button className="btn btn-outline btn-warning border-b-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-rose-600">
                                    Sign in
                                </button>
                            </div>
                        </form>




                        <div className="flex items-center w-full my-4">
                            <hr className="w-full" />
                            <p className="px-3 text-yellow-300">OR</p>
                            <hr className="w-full" />
                        </div>
                        <div className="my-6 space-y-2">
                            <button
                                onClick={handleGoogleSignIn}
                                aria-label="Login with Google"
                                type="button"
                                className="btn btn-outline btn-warning border-b-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-rose-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                Login with Google
                            </button>

                        </div>

                        <div className="mt-4 text-gray-300">
                            Don't have an account?{" "}
                            <span>
                                <NavLink to='/signup'>
                                    <a className="text-yellow-300 hover:underline" href="#">
                                        Sign up
                                    </a>
                                </NavLink>

                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>


    );
};

export default SignIn;