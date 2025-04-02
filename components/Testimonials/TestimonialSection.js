'use client'; // We need state for carousel functionality

import { useState } from 'react';
// You can replace these icons with your own or use react-icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialSection() {
  // Sample testimonials
  const testimonials = [
    {
      quote:
        'We had an ambitious vision but weren’t sure how to bring it to life. Their team didn’t just build what we asked for—they helped us refine the concept, improve the design, and ensure it was actually manufacturable. What could have been a frustrating process became an exciting collaboration.',
      name: 'Johnson Doe',
      position: 'State Bank of Pakistan',
      avatar: '/jhonsondoe.png', // Replace with an actual avatar image if you like
    },
    {
      quote:
        'They took our idea from concept to prototype in record time. Their attention to detail and constant communication made us feel confident every step of the way.',
      name: 'Jane Smith',
      position: 'Tech Ventures Inc.',
      avatar: '/jhonsondoe.png',
    },
    {
      quote:
        'The team truly goes above and beyond. We’ve worked with multiple agencies, but none have matched their innovation and speed.',
      name: 'Michael Chen',
      position: 'Innovation Labs',
      avatar: '/jhonsondoe.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { quote, name, position, avatar } = testimonials[currentIndex];

  return (
    <section className="h-[89vh] rounded-b-xl px-20 text-white/90 overflow-hidden">
      {/* Headings */}
      <h2 className="text-sm text-white/80 uppercase tracking-wide mb-2">
        Testimonials
      </h2>
      {/* Container: 2 Columns (left image / right testimonial) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
        {/* Left Column: Decorative or Icon Cluster */}
        <div className="flex flex-col items-start gap-24">
          <h3 className="text-[2.5rem] leading-tight">What our clients say</h3>
          <img
            src="/funicongroup.svg"
            alt="Icon Collage"
            className="max-w-sm w-full h-auto"
          />
        </div>

        {/* Right Column: Testimonial Carousel */}
        <div className="flex flex-col items-start relative">
          <div className="relative pb-8 w-full">
            <p className="text-4xl text-justify mb-6 h-72">{quote}</p>
            <div className="absolute bottom-0 left-0 right-0 border-t-2 border-dashed border-[#4D4D4D]"></div>
          </div>

          {/* Author info and controls */}
          <div className="flex items-start justify-between w-full mt-8">
            <div className="flex items-center space-x-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-medium">{name}</p>
                <p className="text-gray-400 text-sm">{position}</p>
              </div>
            </div>
            {/* Right-aligned carousel arrows */}
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                className=" hover:text-black transition group">
                <img
                  src="/testimonialarrows/left.svg"
                  alt="Previous"
                  className="group-hover:hidden"
                />
                <img
                  src="/testimonialarrows/lefthover.svg"
                  alt="Previous Hover"
                  className="hidden group-hover:block"
                />
              </button>
              <button
                onClick={handleNext}
                className=" hover:text-black transition group">
                <img
                  src="/testimonialarrows/right.svg"
                  alt="Next"
                  className="group-hover:hidden"
                />
                <img
                  src="/testimonialarrows/righthover.svg"
                  alt="Next Hover"
                  className="hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
