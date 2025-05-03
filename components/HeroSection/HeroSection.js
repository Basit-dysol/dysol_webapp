'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
     {/* <section className="flex flex-col min-h-screen text-white justify-end bg-[url('/LandingPage.png')] bg-cover rounded-4xl mt-0  m-3 pb-20 px-32 gap-[32px] pt-8">
        <div className='flex flex-col space-y-8 lg:max-w-[55vw] mt-20'>

        <h1 className="text-[3rem] lg:pt-4 xl:pt-4 xl:text-[4rem] xl:w-3xl text-left font-medium">
          Let's take your idea from concept to market
        </h1>
        <p className="text-lg lg:text-xl text-white/60 font-light lg:w-3xl text-left leading-relaxed"></p> */}
      <section className="flex flex-col h-[50vw] m-2 xl:h-[60vw] 2xl:h-[65vw] text-white justify-end bg-[url('/LandingPage.png')] bg-cover bg-center  rounded-4xl pb-16 xl:px-24 2xl:px-32 space-y-6 pr-0 xl:pr-[40vw] 2xl:pr-[40vw]">
        <h1 className="text-4xl xl:text-[4.25rem] 2xl:text-[5.125rem]  xl:w-[45vw] 2xl:w-[43vw] text-left font-medium xl:leading-[5.25rem] 2xl:leading-24">
          Let's take your
          <br className="hidden sm:block" />
          idea from concept
          <br className="hidden sm:block" />
          to market
        </h1>
        <p className="xl:text-shadow-md 2xl:text-xl xl:w-[42vw] 2xl:w-[40vw] text-white/60 font-extralight text-left leading-relaxed">
          At Dysol, we bring your product idea to life with top-tier engineering
          and design. From idea to manufacturing, we're your trusted partner in
          end-to-end product development.
          <br className="hidden sm:block" />
          With an expert team of engineers, technologists and programmers ready
          to help your business make an impact. Are you ready to pioneer the
          future?
        </p>
        {/* </div> */}
        <TellUsMoreButton />
      </section>
      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}
