import React from 'react';
import AnimationSection from './AnimationSection';
import MarqueSection from './MarqueSection';
import OfferSection from './OfferSection';
import ReviewSection from './ReviewSection';
import PopularInstructors from './PopularInstructors';
import About from './About';
import PopularClass from './PopularClass';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Melody Lab | Home</title>
            </Helmet>
            <MarqueSection></MarqueSection>
            <AnimationSection></AnimationSection>
            <About></About>
            <OfferSection></OfferSection>           
            <PopularInstructors></PopularInstructors>
            <PopularClass></PopularClass>
            <ReviewSection></ReviewSection>

        </div>
    );
};

export default Home;