'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="flex flex-col -translate-y-0 xl:h-[150vh] 2xl:h-[110vh] text-white justify-end bg-[url('/LandingPage.png')] bg-cover rounded-4xl pb-20 xl:px-24 2xl:px-32 space-y-8 pr-0 xl:pr-[45vw] 2xl:pr-[45vw]">
        <h1 className="xl:text-[4.125rem] 2xl:text-[5.125rem] xl:w-[43vw] 2xl:w-3xl text-left font-medium xl:leading-[4.5rem] 2xl:leading-24">
          Let's take your idea from concept to market
        </h1>
        <p className="xl:text-shadow-md 2xl:text-xl xl:w-[43vw] 2xl:w-3xl text-white/60 font-extralight text-left leading-relaxed">
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
