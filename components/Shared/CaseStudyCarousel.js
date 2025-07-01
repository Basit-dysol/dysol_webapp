"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';




const CaseStudyCarousel = ({ projects = [] }) => {
    const swiperRef = useRef(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const getImageUrl = (imgRef) => {
        if (!imgRef) return null;

        // Remove 'image-' prefix and file extension
        const refParts = imgRef.replace('image-', '').split('-');
        const assetId = refParts[0];
        const dimensions = refParts[1];
        const format = refParts[2];
        return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
    };


    return (
        <div className="">


            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}

                modules={[Navigation]}
                spaceBetween={6}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    },
                    1440: {
                        slidesPerView: 3.3,
                    },
                }}
            >
                {projects.map((item) => {

                    const imageUrl =
                        item.projectImages[0]?.asset?._ref ? getImageUrl(item.projectImages[0].asset._ref) : null;
                    return (
                        <SwiperSlide key={item._id}>
                            <Link
                                className='text-medium tracking-tighter'
                                href={`/our-work/${item.slug.current}`}
                            >
                                <div className="rounded-2xl aspect-[49/40] w-full bg-cover bg-center p-10 text-[30px] text-left flex items-end"
                                    style={{ backgroundImage: `url('${imageUrl}')` }}
                                >

                                    {item.title}
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className='flex gap-4 mt-5'>
                <button className="h-11 w-11 rounded-[16px] p-1 border-[1px] border-[#4D4D4D] flex justify-center align-middle cursor-pointer" onClick={() => swiperRef.current.slidePrev()}>
                    <Image src="/arrowLeft.svg" alt="Left Arrow" className="" width={24} height={24} />
                </button>
                <button className="h-11 w-11 rounded-[16px] p-1 border-[1px] border-[#4D4D4D] flex justify-center align-middle cursor-pointer" onClick={() => swiperRef.current.slideNext()}>
                    <Image src="/right-arrow.svg" alt="Right Arrow" className="" width={24} height={24} />

                </button>

            </div>


        </div>
    );
};

export default CaseStudyCarousel;
