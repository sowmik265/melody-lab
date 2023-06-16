import React from 'react';
import useInstructors from '../hooks/useInstructors';
import SectionTile from '../Utilitites/SectionTile';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";


const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const popular = instructors.filter(instructor => instructor.popularity === 'popular')
    return (
        <div>
            <SectionTile title={'Learn with Our Popular Instructors'}></SectionTile>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {popular.map(ins =>
                    <SwiperSlide key={ins._id}>
                        <div className="card w-96 bg-base-100 shadow-xl h-full border border-yellow-300 border-b-8 mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={ins.image} alt="Shoes" className="rounded-xl image-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{ins.name}</h2>
                                <p>{ins.instrument} specialist!</p>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-warning border-b-4">Contact Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default PopularInstructors;