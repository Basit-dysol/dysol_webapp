"use client";

import { useState } from "react";
import ProductCard from "../ProductCard";
import ContactUs from "../ContactUs/ContactUs";

const projects = [
  {
    image: "/project-a.png",
    description: "Wound VAC <br/> Device",
    subdescription: "Enhances wound treatment by speeding healing and improving outcomes",
    slug: "wound-vac-device",
  },
  {
    image: "/project-b.png",
    description: "World’s First Solar <br/>  Breast Pump",
    subdescription: "Innovative healthcare solution for emerging markets, addressing real-world challenges.",
    slug: "world-s-first-solar-breast-pump",
  },
  {
    image: "/project-c.png",
    description: "Iris Identifiction <br/>  Device",
    subdescription: "Enhances security systems with a reliable and non-intrusive method of identity verification.",
    slug: "iris-identification-device",
  },
  {
    image: "/project-d.png",
    description: "Baby <br/> Rocker",
    subdescription: "Hands-free solution for caregivers to manage tasks while soothing their little ones.",
    slug: "baby-rocker",
  },
  {
    image: "/project-e.png",
    description: "Smart Blood <br/> Pressure Monitor",
    subdescription: "Improves patient care with portable blood pressure monitors for clinical and home use.",
    slug: "smart-blood-pressure-monitor",
  },
  {
    image: "/project-f.png",
    description: "AI AC <br/>  Control Device",
    subdescription: "Reduces energy waste and costs by adjusting air conditioning based on real-time data.",
    slug: "ai-ac-control-device",
  },
];

export default function OurWorkSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="py-12 md:py-16 px-6 md:px-24 2xl:px-32 flex flex-col text-white/90">
        {/* Section Header */}
        <h2 className="text-gray-400 text-left 2xl:text-xl text-sm md:text-base uppercase tracking-wide">our work</h2>

        {/* Title and Button Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-[2rem] xl:text-[2.3rem] 2xl:text-[3rem] text-left leading-tight">
            We engineer ideas into impactful products.
          </h2>

          <button
            className="cursor-pointer   h-11 lg:h-14 p-4 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2 font-[Plus_Jakarta_Sans] text-[18px]
        transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:bg-white/60 hover:border-2 hover:border-white/60"
            onClick={() => setContactVisible(true)}
            style={{
              border: "2px solid transparent",
              animationDelay: "1ms",
              transitionProperty: "background, transform, border-color",
            }}>
            Get Started
            <img
              src="blackarrow.png"
              alt="arrow"
              className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 w-full justify-items-center mt-2">
          {projects.map((project) => (
            <ProductCard
              key={project.slug}
              {...project}
              className="w-full" // Ensure cards take full width on mobile
            />
          ))}
        </div>
      </section>
      {/* Contact Modal */}
      {isContactVisible && <ContactUs onClose={() => setContactVisible(false)} />}
    </>
  );
}
