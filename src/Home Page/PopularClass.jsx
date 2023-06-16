import React, { useEffect } from 'react';
import { useState } from 'react';
import SectionTile from '../Utilitites/SectionTile';



const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://melody-lab-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const populars = classes.filter(popular => popular.totalSeats === 30);

    return (
        <div>
            <SectionTile title={'our popular classes'}></SectionTile>
            <div className="bg-gray-100 w-full gap-4 flex-wrap flex justify-center items-center mt-4 mb-4">
                {
                    populars.map(popular =>
                        <div key={popular._id} className="w-full md:w-72 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                            <img className="h-40 object-cover rounded-xl mx-auto" src={popular.classImage} alt="" />
                            <div className="p-2">

                                <h2 className="font-bold text-lg mb-2 ">{popular.className}</h2>

                                <p className="text-sm text-gray-600">Instructor : {popular.instructorName}</p>
                                <p className="text-sm text-gray-600"> Email : {popular.email}</p>

                                <p className="text-sm text-gray-600"> Schedule : {popular.time}</p>
                            </div>

                            <div className="m-2">
                                {/* <Link to={`/order/${title}`}> */}
                                <button className="btn btn-outline btn-warning border-b-4">See Details</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClass;