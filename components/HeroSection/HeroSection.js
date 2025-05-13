'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="flex flex-col w-full min-h-[calc(100vh-16px)] text-white justify-end bg-[url('/LandingPage.png')] bg-cover bg-center rounded-4xl pb-16 px-24 xl:aspect-[156/100] 2xl:px-32 space-y-6 pr-0 xl:pr-[40vw] 2xl:pr-[40vw]">
        <h1 className="text-4xl xl:text-[4.25rem] 2xl:text-[4.5rem] xl:w-[45vw] 2xl:w-[50vw] text-left font-medium xl:leading-[5rem] 2xl:leading-24">
          Let's take your
          <br className="hidden sm:block" />
          idea from concept
          <br className="hidden sm:block" />
          to market
        </h1>
        <p className="xl:text-shadow-md 2xl:text-xl xl:w-[42vw] 2xl:w-[40vw] text-white/60 font-light text-left leading-relaxed xl:leading-8">
          At Dysol, we bring your product idea to life with top-tier engineering
          and design. From idea to manufacturing, we're your trusted partner in
          end-to-end product development.
          <br className="hidden sm:block" />
          With an expert team of engineers, technologists, and programmers ready
          to help your business make an impact. Are you ready to pioneer the
          future?
        </p>
        <TellUsMoreButton setContactVisible={setContactVisible} />
      </section>

      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}
