import React from 'react';
import AnimationSection from './AnimationSection';
import MarqueSection from './MarqueSection';
import OfferSection from './OfferSection';
import ReviewSection from './ReviewSection';
import PopularInstructors from './PopularInstructors';
import About from './About';
import PopularClass from './PopularClass';



const Home = () => {
    return (
        <div>
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