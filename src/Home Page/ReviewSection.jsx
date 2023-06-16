import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SectionTile from '../Utilitites/SectionTile';

const ReviewSection = () => {
    const [rating, setRating] = useState([]);
    useEffect(() => {
        fetch('https://melody-lab-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setRating(data));

    }, [])

    return (
        <section className='mb-10 mt-10 max-h-screen p-1 md:p-6 py-10'>
            <SectionTile title={'What Our Students Say About Us'}></SectionTile>

            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {rating.map(rate => <SwiperSlide key={rate._id} className=''>
                        <div className="flex flex-col items-center border-x-8 border-yellow-400 text-center rounded-3xl">
                            <img className='mb-1' src={'https://i.ibb.co/pf6Wx5h/icons8-romance.gif'}></img>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rate.rating}
                                readOnly
                            />
                            <p className="px-8 mb-1 text-rose-700">{rate.review}</p>
                            <h3 className="mb-1 text-lg md:text-2xl text-orange-400">{rate.name} , <small>{rate.batch}</small></h3>
                            <p className='text-gray-500'>{rate.address}</p>
                        </div>

                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>


    );
};

export default ReviewSection;