import React from 'react';
import useInstructors from '../hooks/useInstructors';
import './instructors.css';
import { AttentionSeeker } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructors] = useInstructors();

    const guitars = instructors.filter(guitar => guitar.instrument === "guitar");
    const violins = instructors.filter(violin => violin.instrument === "violin");
    const pianos = instructors.filter(piano => piano.instrument === "piano");
    const harmoniums = instructors.filter(harmonium => harmonium.instrument === "harmonium");
    const saxophones = instructors.filter(saxophone => saxophone.instrument === "saxophone");
    const drums = instructors.filter(drum => drum.instrument === "drums");

    return (
        <div className=' pt-24'>
            <Helmet>
                <title>Melody Lab | Instructors</title>
            </Helmet>
            {/* guitar */}
            <div className='guitar pt-10'>
                <AttentionSeeker>
                    <h1 className='text-center uppercase text-4xl font-bold text-rose-700  '>our guitar instructors</h1>
                </AttentionSeeker>

                <div className='flex flex-wrap gap-5 justify-center p-8 '>
                    {guitars.map(guitar =>
                        <div key={guitar._id} className="card card-compact md:w-72 bg-base-100 shadow-xl opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                            <figure><img src={guitar.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{guitar.name}</h2>
                                <p>{guitar.address}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning border-b-4">Apply for Seat!</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* saxophone */}
            <div className='saxophone mt-10'>
                <AttentionSeeker>
                    <h1 className='text-center uppercase text-4xl font-bold text-rose-700 '>our saxophone instructors</h1>
                </AttentionSeeker>
                <div className='flex flex-wrap gap-5 justify-center p-8'>
                    {saxophones.map(saxophone =>
                        <div key={saxophone._id} className="card card-compact md:w-72 bg-base-100 shadow-xl opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                            <figure><img src={saxophone.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{saxophone.name}</h2>
                                <p>{saxophone.address}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning border-b-4">Apply for Seat!</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* violin */}
            <div className='violin mt-10'>
                <AttentionSeeker>
                    <h1 className='text-center uppercase text-4xl font-bold text-rose-700 '>our violin instructors</h1>
                </AttentionSeeker>
                <div className='flex flex-wrap gap-5 justify-center p-8'>
                    {violins.map(violin =>
                        <div key={violin._id} className="card card-compact md:w-72 bg-base-100 shadow-xl opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                            <figure><img src={violin.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{violin.name}</h2>
                                <p>{violin.address}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning border-b-4">Apply for Seat!</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* drums */}
            <div className='drums mt-10'>
                <AttentionSeeker>
                    <h1 className='text-center uppercase text-4xl font-bold text-rose-700 '>our drums instructors</h1>
                </AttentionSeeker>
                <div className='flex flex-wrap gap-5 justify-center p-8'>
                    {drums.map(drum =>
                        <div key={drum._id} className="card card-compact md:w-72 bg-base-100 shadow-xl opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                            <figure><img src={drum.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{drum.name}</h2>
                                <p>{drum.address}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning border-b-4">Apply for Seat!</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* piano */}
            <div className='piano mt-10'>
                <AttentionSeeker>
                    <h1 className='text-center uppercase text-4xl font-bold text-rose-700 '>our piano instructors</h1>
                </AttentionSeeker>
                <div className='flex flex-wrap gap-5 justify-center p-8'>
                    {pianos.map(piano =>
                        <div key={piano._id} className="card card-compact md:w-72 bg-base-100 shadow-xl opacity-90 hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                            <figure><img src={piano.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{piano.name}</h2>
                                <p>{piano.address}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning border-b-4">Apply for Seat!</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Instructors;