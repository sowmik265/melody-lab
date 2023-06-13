import React from 'react';

const SingleClass = ({ name }) => {
    const { className, classImage, instructorName, email, totalSeats, price, time } = name;
    return (
        <div>
            <div className="w-full md:w-72 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                <img className="h-40 object-cover rounded-xl" src={classImage} alt="" />
                <div className="p-2">

                    <h2 className="font-bold text-lg mb-2 ">{className}</h2>

                    <p className="text-sm text-gray-600">Instructor : {instructorName}</p>
                    <p className="text-sm text-gray-600"> Email : {email}</p>
                    <div className='flex justify-around'>
                        <p className="text-sm text-gray-600"> Seats : {totalSeats}</p>
                        <p className="text-sm text-gray-600"> Price : {price}</p>
                    </div>
                    <p className="text-sm text-gray-600"> Schedule : {time}</p>
                </div>

                <div className="m-2">
                    <a role='button' href='#' className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;