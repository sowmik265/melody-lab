import React from 'react';
import SingleClass from './SingleClass';

const ClassCategory = ({classes}) => {
    return (
        <div>
            <div class="bg-gray-100 w-full gap-4 flex-wrap flex justify-center items-center mt-4 mb-4">


                {
                    classes.map(name => <SingleClass
                        name={name}
                    ></SingleClass>)
                }


            </div>
        </div>
    );
};

export default ClassCategory;