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
      avatar: '/avatar1.jpg', // Replace with an actual avatar image if you like
    },
    {
      quote:
        'They took our idea from concept to prototype in record time. Their attention to detail and constant communication made us feel confident every step of the way.',
      name: 'Jane Smith',
      position: 'Tech Ventures Inc.',
      avatar: '/avatar2.jpg',
    },
    {
      quote:
        'The team truly goes above and beyond. We’ve worked with multiple agencies, but none have matched their innovation and speed.',
      name: 'Michael Chen',
      position: 'Innovation Labs',
      avatar: '/avatar3.jpg',
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
    <section className="py-16 px-6 bg-black text-white">
      {/* Headings */}
      <h2 className="text-md uppercase text-gray-400">Testimonials</h2>
      <h3 className="text-3xl font-bold mt-2">What our clients say</h3>

      {/* Container: 2 Columns (left image / right testimonial) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Left Column: Decorative or Icon Cluster */}
        <div className="bg-black flex items-center justify-center rounded-lg p-6">
          {/* You can replace this with an actual image or icon collage */}
          <img src="" alt="Icon Collage" className="max-w-xs w-full h-auto" />
        </div>

        {/* Right Column: Testimonial Carousel */}
        <div className="flex flex-col justify-center">
          {/* Testimonial Text */}
          <p className="text-xl leading-relaxed mb-6">{quote}</p>

          {/* Client Info */}
          <div className="flex items-center space-x-4">
            {/* Avatar (Optional) */}
            <img
              src=""
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-gray-400 text-sm">{position}</p>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="border border-white rounded p-2 hover:bg-white hover:text-black transition">
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="border border-white rounded p-2 hover:bg-white hover:text-black transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
