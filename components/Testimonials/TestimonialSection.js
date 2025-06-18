'use client';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        'We had an ambitious vision but weren’t sure how to bring it to life. Their team didn’t just build what we asked for—they helped us refine the concept, improve the design, and ensure it was actually manufacturable. What could have been a frustrating process became an exciting collaboration.',
      name: 'Faduma Gure',
      position: 'Liss-Technologies',
      avatar: '/Faduma.png', // Replace with an actual avatar image if you like
    },
    {
      quote:
        'They took our idea from concept to prototype in record time. Their attention to detail and constant communication made us feel confident every step of the way.',
      name: 'Wasim Ahmad',
      position: 'HoboeTech',
      avatar: '/Wasim.png',
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
    <section className="h-max rounded-b-xl px-6 md:px-24 2xl:px-32 text-white/90 overflow-hidden py-12 md:py-0">
      {/* Headings */}
      <h2 className="text-left 2xl:text-xl text-sm text-white/90 uppercase tracking-wide my-6">
        Testimonials
      </h2>

      {/* Container: Stack on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
        {/* Left Column */}
        <div className="flex flex-col items-start justify-between h-full gap-12 md:gap-24">
          <h3 className="text-3xl md:text-[2.5rem] xl:text-[2.3rem] 2xl:text-[3rem]  leading-tight">
            What our clients say
          </h3>
          <img
            src="/funicongroup.svg"
            alt="Icon Collage"
            className="mt-auto max-w-full md:max-w-sm w-full h-auto"
          />
        </div>

        {/* Right Column: Testimonial Carousel */}
        <div className="flex flex-col items-start relative">
          <div className="relative pb-8 w-full">
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-justify mb-6 min-h-48 md:h-68">
              {quote}
            </p>
            <div className="absolute bottom-0 left-26 right-26 border-t-[1px] border-dashed border-[#4D4D4D] -mx-6 md:-mx-24"></div>
          </div>

          {/* Author info and controls */}
          <div className="flex flex-col md:flex-row items-start justify-between w-full mt-6 md:mt-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src={avatar}
                alt={name}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base md:text-medium">{name}</p>
                <p className="text-gray-400 text-xs md:text-sm">{position}</p>
              </div>
            </div>

            {/* Carousel Arrows */}
            <div className="flex space-x-2 md:space-x-4 self-end md:self-auto">
              <button
                onClick={handlePrev}
                className="hover:text-black transition group">
                <img
                  src="/testimonialarrows/left.svg"
                  alt="Previous"
                  className="h-8 md:h-12 group-hover:hidden"
                />
                <img
                  src="/testimonialarrows/lefthover.svg"
                  alt="Previous Hover"
                  className="h-8 md:h-12 hidden group-hover:block"
                />
              </button>
              <button
                onClick={handleNext}
                className="hover:text-black transition group">
                <img
                  src="/testimonialarrows/right.svg"
                  alt="Next"
                  className="h-8 md:h-12 group-hover:hidden"
                />
                <img
                  src="/testimonialarrows/righthover.svg"
                  alt="Next Hover"
                  className="h-8 md:h-12 hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 'use client'; // We need state for carousel functionality

// import { useState } from 'react';
// // You can replace these icons with your own or use react-icons
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function TestimonialSection() {
//   // Sample testimonials
//   const testimonials = [
//     {
//       quote:
//         'We had an ambitious vision but weren’t sure how to bring it to life. Their team didn’t just build what we asked for—they helped us refine the concept, improve the design, and ensure it was actually manufacturable. What could have been a frustrating process became an exciting collaboration.',
//       name: 'Johnson Doe',
//       position: 'State Bank of Pakistan',
//       avatar: '/jhonsondoe.png', // Replace with an actual avatar image if you like
//     },
//     {
//       quote:
//         'They took our idea from concept to prototype in record time. Their attention to detail and constant communication made us feel confident every step of the way.',
//       name: 'Jane Smith',
//       position: 'Tech Ventures Inc.',
//       avatar: '/jhonsondoe.png',
//     },
//     {
//       quote:
//         'The team truly goes above and beyond. We’ve worked with multiple agencies, but none have matched their innovation and speed.',
//       name: 'Michael Chen',
//       position: 'Innovation Labs',
//       avatar: '/jhonsondoe.png',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const { quote, name, position, avatar } = testimonials[currentIndex];

//   return (
//     <section className="h-max rounded-b-xl px-24 2xl:px-32 text-white/90 overflow-hidden">
//       {/* Headings */}
//       <h2 className="text-sm text-white/80 uppercase tracking-wide mb-2">
//         Testimonials
//       </h2>
//       {/* Container: 2 Columns (left image / right testimonial) */}
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
//         {/* Left Column: Decorative or Icon Cluster */}
//         <div className="flex flex-col items-start gap-24">
//           <h3 className="text-[2.5rem] leading-tight">What our clients say</h3>
//           <img
//             src="/funicongroup.svg"
//             alt="Icon Collage"
//             className="max-w-sm w-full h-auto"
//           />
//         </div>

//         {/* Right Column: Testimonial Carousel */}
//         <div className="flex flex-col items-start relative">
//           <div className="relative pb-8 w-full">
//             <p className=" xl:text-3xl 2xl:text-4xl text-justify mb-6 h-72">
//               {quote}
//             </p>
//             <div className="absolute bottom-0 left-0 right-0 border-t-2 border-dashed border-[#4D4D4D]"></div>
//           </div>

//           {/* Author info and controls */}
//           <div className="flex items-start justify-between w-full mt-8">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={avatar}
//                 alt={name}
//                 className="w-14 h-14 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-medium">{name}</p>
//                 <p className="text-gray-400 text-sm">{position}</p>
//               </div>
//             </div>
//             {/* Right-aligned carousel arrows */}
//             <div className="flex space-x-4 mt-2">
//               <button
//                 onClick={handlePrev}
//                 className=" hover:text-black transition group">
//                 <img
//                   src="/testimonialarrows/left.svg"
//                   alt="Previous"
//                   className="h-12 group-hover:hidden"
//                 />
//                 <img
//                   src="/testimonialarrows/lefthover.svg"
//                   alt="Previous Hover"
//                   className="h-12 hidden group-hover:block"
//                 />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className=" hover:text-black transition group">
//                 <img
//                   src="/testimonialarrows/right.svg"
//                   alt="Next"
//                   className="h-12 group-hover:hidden"
//                 />
//                 <img
//                   src="/testimonialarrows/righthover.svg"
//                   alt="Next Hover"
//                   className="h-12 hidden group-hover:block"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
