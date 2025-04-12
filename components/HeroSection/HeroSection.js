'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="flex flex-col -translate-y-18 xl:h-[140vh] 2xl:h-screen text-white justify-end bg-[url('/LandingPage.png')] bg-cover rounded-4xl m-3 pb-20 xl:px-24 2xl:px-32 space-y-8 pr-0 xl:pr-[45vw] 2xl:pr-[45vw]">
        <h1 className="xl:text-6xl 2xl:text-[5.125rem] xl:w-[40vw] 2xl:w-3xl text-left font-medium leading-24">
          Let's take your idea from concept to market
        </h1>
        <p className="xl:text-shadow-md 2xl:text-xl xl:w-[40vw] text-white/60 font-extralight lg:w-3xl text-left leading-relaxed">
          At Dysol, we bring your product idea to life with top-tier engineering
          and design. From idea to manufacturing, we're your trusted partner in
          end-to-end product development.
          <br className="hidden sm:block" />
          With an expert team of engineers, technologists and programmers ready
          to help your business make an impact. Are you ready to pioneer the
          future?
        </p>
        <TellUsMoreButton />
      </section>
      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}
