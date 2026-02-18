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
    <section className="bg-[#1A1A1A] px-6 md:px-24 2xl:px-32 pt-10 pb-5 rounded-b-[80px] relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="">
          <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h3 className="text-3xl md:text-[40px] font-medium leading-tight">What our clients say</h3>

          {/* Decorative Illustration */}
          <Image src="/computervision/fng.png" alt="illustration" width={350} height={350}  className="mt-20"/>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col">
          <p className="text-xl md:text-[26px]  text-white/85 ">{testimonials[currentTestimonial].text}</p>

          {/* Dotted Divider */}
          <div className="border-t border-dashed border-white/20 my-10"></div>

          {/* Profile Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                <Image src={testimonials[currentTestimonial].image} alt="client" width={48} height={48} />
              </div>

              <div>
                <p className="text-white font-medium">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/70 text-xs mt-2 flex items-center gap-2">
                  <Image src={testimonials[currentTestimonial].companyLogo} alt="client" width={14} height={14} />
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button onClick={handlePrevTestimonial} className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:border-white/40 transition">
                <Image src="/computervision/arrowleft.png" alt="prev" width={16} height={16} />
              </button>

              <button onClick={handleNextTestimonial} className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:border-white/40 transition">
                <Image src="/computervision/arrowright.png" alt="next" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
