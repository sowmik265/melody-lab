import React from 'react';
import Lottie from 'lottie-react';
import LoginAnimation from '../../public/LoginAnimation.json';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">

                {/* animation */}
                <div className="text-center w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <Lottie animationData={LoginAnimation}></Lottie>
                </div>

                {/* form */}
                <div className=" p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-rose-700 w-1/2">
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder='Your email address'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-300"
                            >
                                Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder='Your password'
                                className="block w-full px-4 py-2 mt-2 text-rose-600 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            {/* <p className='text-rose-600'>{error}</p> */}
                        </div>
                        <a
                            href="#"
                            className="text-xs text-gray-300 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-rose-300 focus:outline-none focus:bg-rose-600">
                                Sign in
                            </button>
                        </div>
                    </form>




                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 text-gray-300">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button
                            // onClick={handleLogInGoogle}
                            aria-label="Login with Google"
                            type="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p className='text-gray-300'>Login with Google</p>
                        </button>

                    </div>

                    <div className="mt-4 text-gray-300">
                        Don't have an account?{" "}
                        <span>
                            <NavLink to='/register'>
                                <a className="text-rose-600 hover:underline" href="#">
                                    Sign up
                                </a>
                            </NavLink>

                        </span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignIn;