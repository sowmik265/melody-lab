import React from 'react';
import SectionTile from '../Utilitites/SectionTile';

const About = () => {


    return (

        <div className='flex flex-col gap-4'>
            <SectionTile title={'Why we are special'}></SectionTile>

            <div className="w-full gap-4 flex-wrap flex justify-center items-center sm:flex-row">


                <div className="w-full md:w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2">
                    <div className="p-6 flex gap-2 items-center justify-center">
                        <img src="https://i.ibb.co/82GYtv3/icons8-music-heart.gif" alt="" />
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2">
                    <div className="p-2 flex gap-2">
                        <h2 className="font-bold text-7xl mb-2 text-gray-400">20</h2>
                        <p className="flex font-bold text-lg text-gray-300 items-center justify-start">Years<br />of Experience</p>
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2">
                    <div className="p-2 flex gap-2">
                        <h2 className="font-bold text-7xl mb-2 text-gray-400">32</h2>
                        <p className="flex font-bold text-lg text-gray-300 items-center justify-start">Qualified<br />Instructors</p>
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2">
                    <div className="p-2 flex gap-2">
                        <h2 className="font-bold text-7xl mb-2 text-gray-400">42</h2>
                        <p className="flex font-bold text-lg text-gray-300 items-center justify-start">Student<br />Gropus</p>
                    </div>
                </div>

            </div>
            <div>
                <div className="flex items-center justify-center">

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://i.ibb.co/h7xV0hK/6488360-37667.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Versatility</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore our diverse range of instrumental lessons tailored to your interests</p>
                                <button className="btn btn-outline btn-warning border-b-4">Get Started</button>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://i.ibb.co/0y2cR5W/34221166-9t7b-kimr-221019.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Mastery</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Elevate your musical skills through our expert-led instruction and personalized guidance</p>
                                <button className="btn btn-outline btn-warning border-b-4">Get Started</button>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://i.ibb.co/3zRkFnH/35822381-kt72-c09n-221019.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Creativity</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Unleash your artistic expression with our innovative approach to instrumental education.</p>
                                <button className="btn btn-outline btn-warning border-b-4">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;