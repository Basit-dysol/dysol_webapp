"use client";
import { useState } from "react";
import Link from "next/link";
import TellUsMoreButton from "../TellUsMoreButton/TellUsMoreButton";
import ContactUs from "../ContactUs/ContactUs";

const visionProjects = [
  {
    image: '/project-g.jpg',
    title: "Agricultural Computer Vision\nDrone Platform",
    slug: "agricultural-computer-vision-drone-platform",
  },
  {
    image: '/project-h.jpg',
    title: "Computer Vision\nQuality Control System",
    slug: "computer-vision-quality-control-system",
  },
];

export default function ComputerVisionSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <section className="py-12 md:py-16 px-6 md:px-24 2xl:px-32 flex flex-col text-white/90">
        {/* Section Header */}
        <h2 className="text-gray-400 text-left 2xl:text-xl text-sm md:text-base uppercase tracking-wide">our work</h2>

        {/* Title and Button Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-[2rem] xl:text-[2.3rem] 2xl:text-[3rem] text-left leading-tight">We turn computer vision into deployed systems.</h2>
          
            <button
              className="cursor-pointer   h-11 lg:h-14 p-4 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2 font-[Plus_Jakarta_Sans] text-[18px]
        transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:bg-white/60 hover:border-2 hover:border-white/60"
              onClick={() => setContactVisible(true)}
              style={{
                border: "2px solid transparent",
                animationDelay: "1ms",
                transitionProperty: "background, transform, border-color",
              }}
            >
              Get Started
              <img src="blackarrow.png" alt="arrow" className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:translate-x-0.5" />
            </button>
        
        </div>

        {/* Projects Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full">
          {visionProjects.map((project, index) => (
            <Link key={index} href={`/computer-vision#${project.slug}`} className="block h-[500px] md:h-[550px] lg:h-[700px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 group relative">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.1] transform transition-all duration-700" />

                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-white text-2xl md:text-3xl font-medium whitespace-pre-line">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Modal */}
      {isContactVisible && <ContactUs onClose={() => setContactVisible(false)} />}
    </>
  );
}
