"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "We needed to replace manual inspection with a reliable system that could operate at scale. Dysol delivered a computer vision solution that performed consistently in real production conditions. Their structured approach and focus on deployment readiness turned a complex challenge into a system we trust in daily operations.",
      name: "Johnson Doe",
      company: "State Bank of Pakistan",
      image: "/computervision/Ellipse 1.png",
      companyLogo: "/computervision/bank.png",
    },
    {
      text: "The computer vision system Dysol built for us has transformed our quality control process. What used to take hours of manual inspection now happens in real-time with exceptional accuracy. Their team understood our production environment and delivered a solution that just works.",
      name: "Wasim Ali",
      company: "Al-Futtaim Manufacturing",
      image: "/Wasim.png",
      companyLogo: "/computervision/bank.png",
    },
    {
      text: "Dysol's expertise in deploying computer vision at scale is unmatched. They didn't just deliver a model; they delivered a complete system that integrates seamlessly with our existing infrastructure. The ROI has exceeded our expectations.",
      name: "Fatima Hassan",
      company: "Emirates Tech Solutions",
      image: "/Faduma.png",
      companyLogo: "/computervision/bank.png",
    },
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#1A1A1A] lg:mt-[150px] px-6 md:px-24 2xl:px-32 pt-10 pb-10 md:pb-5 rounded-b-[60px] md:rounded-b-[200px] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-white/90 text-base md:text-[1.3rem] uppercase tracking-wider mb-3 md:mb-4">Testimonials</p>
          <h3 className="text-3xl md:text-[50px] font-medium leading-tight">What our clients say</h3>
          <div className="mt-6 md:mt-10 max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px] mx-auto lg:mx-0">
            <Image src="/computervision/fng.png" alt="illustration" width={550} height={550} className="w-full h-auto" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full lg:w-[60%] md:mt-4 lg:mt-10">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-white/85 leading-relaxed md:leading-[1.2]">
            {testimonials[currentTestimonial].text}
          </p>

          {/* Dotted Divider */}
          <div className="border-t border-dashed border-white/20 my-6 md:my-10"></div>

          {/* Profile Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-14 h-14 md:w-[70px] md:h-[70px] rounded-full bg-white overflow-hidden shrink-0">
                <Image src={testimonials[currentTestimonial].image} alt="client" width={70} height={70} className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-white font-medium text-lg md:text-[20px] leading-tight">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/70 mt-1 md:mt-2 flex items-center gap-2 text-sm md:text-base">
                  <Image src={testimonials[currentTestimonial].companyLogo} alt="client" width={17} height={17} />
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 self-start sm:self-auto">
              <button
                onClick={handlePrevTestimonial}
                className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-xl md:rounded-[15px] flex items-center justify-center hover:border-white/40 transition"
              >
                <Image src="/computervision/arrowleft.png" alt="prev" width={16} height={16} />
              </button>

              <button
                onClick={handleNextTestimonial}
                className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-xl md:rounded-[15px] flex items-center justify-center hover:border-white/40 transition"
              >
                <Image src="/computervision/arrowright.png" alt="next" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
