import React from 'react';
import Lottie from 'lottie-react';
import singerAnimation from '../../src/assets/SingerAnimation.json';
import { Bounce } from "react-awesome-reveal";

const AnimationSection = () => {
    return (
        <div className="hero min-h-screen bg-rose-700">
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 '>
                    <Lottie animationData={singerAnimation}></Lottie>
                </div>
                <div className='md:w-1/2'>
                    <Bounce><h1 className="text-5xl font-bold">Welcome to MELODY LAB!</h1></Bounce>
                    <p className="py-6">Unlock your musical potential with our premier instrumental school. Learn from skilled instructors and master your chosen instrument in a supportive and inspiring environment.</p>
                    <button className="btn btn-outline btn-warning border-b-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AnimationSection;