'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="flex flex-col  items-baseline justify-center bg-[url('/LandingPage.png')] bg-cover text-center pt-28 rounded-b-4xl pb-14 px-20 space-y-10 pr-0 lg:pr-[45vw]">
        <h1 className="text-7xl text-left font-medium pt-28">
          Let’s take your idea from concept to market
        </h1>
        <p className="mt-4 items-start text-left text-lg">
          At Dysol, we bring your product idea to life with top-tier engineering
          and design. From idea to manufacturing, we’re your trusted partner in
          end-to-end product development. <br />
          With an expert team of engineers, technologists and programmers ready
          to help your business make an impact. Are you ready to pioneer the
          future?
        </p>
        <button
          className="w-[226px] lg:w-[294px] h-11 lg:h-14 px-4 py-3 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2"
          onClick={() => setContactVisible(true)}>
          <img src="/tellmore.svg" alt="" />
          Tell us about your project
        </button>
      </section>
      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}
