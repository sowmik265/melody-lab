import React from 'react';
import Marquee from "react-fast-marquee";
import { GiMusicalScore } from 'react-icons/gi';

const MarqueSection = () => {
    return (
        <div className='bg-rose-700 text-yellow-400 text-lg font-bold flex gap-2 p-2'>
            <Marquee>
                <h3 className='flex items-center gap-6'>"Where words fail, music speaks." - Hans Christian Andersen<span><GiMusicalScore/></span></h3>
                <h3 className='flex items-center gap-6'>"Without music, life would be a mistake." - Friedrich Nietzsche<span><GiMusicalScore/></span></h3>
                <h3 className='flex items-center gap-6'>"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." - Plato<span><GiMusicalScore/></span></h3>
                <h3 className='flex items-center gap-6'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo<span><GiMusicalScore/></span></h3>
                <h3 className='flex items-center gap-6'>"Music is the art of thinking with sounds." - Jules Combarieu<span><GiMusicalScore/></span></h3>
            </Marquee>
        </div>
    );
};

export default MarqueSection;