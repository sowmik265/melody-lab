import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import SectionTile from '../Utilitites/SectionTile';


const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const populars = classes.filter(popular => popular.totalSeats === 30);



    return (
        <div className=''>
            <SectionTile title={'our popular lessons'}></SectionTile>
            <Swiper
                slidesPerView={4}
                spaceBetween={3}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 h-full"
            >
                {
                    populars.map(popular =>
                        <SwiperSlide>
                            <div className="card md:w-72 bg-base-100 shadow-xl h-full flex items-center">
                                <img className=' h-56 w-56' src={popular.classImage} />
                                    <h2 className="card-title">{popular.className} lesson!</h2>
                                    <p>Instructor : {popular.instractorName}</p>
                                    <p>Routine : {popular.time}</p>
                                    
                                </div>
                            
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default PopularClass;