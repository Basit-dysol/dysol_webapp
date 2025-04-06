'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="flex flex-col h-[130vh] -translate-y-16 text-white/90 items-baseline justify-end bg-[url('/LandingPage.png')] bg-cover text-center rounded-b-4xl pb-[18vh] px-20 space-y-10 pr-0 lg:pr-[45vw]">
        <h1 className="text-[clamp(2.5rem,3.5vw,7rem)] text-left font-medium pt-28">
          Let's take your idea from concept to market
        </h1>
        <p className="mt-4 text-left text-[clamp(1rem,1.25vw,2.5rem)] leading-relaxed max-w-3xl">
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
