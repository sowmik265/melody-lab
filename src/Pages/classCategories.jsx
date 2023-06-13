import React from 'react';
import classCard from './classCard';

const classCategories = ({classes}) => {
    return (
        <div class="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">


        {
            classes.map(name => <classCard
             name={name}
            ></classCard>)
        }


        </div>
    );
};

export default classCategories;