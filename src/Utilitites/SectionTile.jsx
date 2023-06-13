import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';

const SectionTile = ({ title }) => {
    return (
        <div>
            <JackInTheBox>
                <h3 className='text-rose-700 font-mono font-bold md:text-6xl text-4xl text-center my-10'>
                    {title}
                </h3>
            </JackInTheBox>



        </div>
    );
};

export default SectionTile;