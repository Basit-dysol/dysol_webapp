"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const CustomSwiper = ({ projects = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(1);

    const getImageUrl = (imgRef) => {
        if (!imgRef) return null;
        const refParts = imgRef.replace('image-', '').split('-');
        const assetId = refParts[0];
        const dimensions = refParts[1];
        const format = refParts[2];
        return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
    };

    return (
        <div className="relative w-full mx-auto">
            {/* Fraction display */}
            <div className="absolute w-13 h-9 top-2 right-2 text-sm text-white bg-black/40 px-4 rounded-[100px] z-10 py-1 font-normal font-[Geist] opacity-80 flex items-center justify-center">
                {currentIndex}/{projects.length}
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                className="rounded-lg"
            >

                {projects.map((item) => {

                    const imageUrl =
                        item?.asset?._ref ? getImageUrl(item?.asset._ref) : null;
                    return (
                        <SwiperSlide key={item._id}>

                            <div className="rounded-2xl aspect-[148/100] w-full bg-cover bg-center p-10 text-[30px] text-left flex items-end"
                                style={{ backgroundImage: `url('${imageUrl}')` }}
                            >

                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
