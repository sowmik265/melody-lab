import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";
import SectionTile from '../Utilitites/SectionTile';

const OfferSection = () => {
    return (
        <section className='container mx-auto'>
            <SectionTile title={"Offers of the month"}></SectionTile>
            <div className='md:w-2/3 mx-auto px-1'>
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <img src="https://i.ibb.co/ZmVmJrR/offer1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/JdJ785v/offer2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/pWXzGRw/7647607.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/9qFKKb5/8455310.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/PzTJdwS/8252807.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/1KhV7Pr/8405252.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>

    );
};

export default OfferSection;