export default function AboutSection() {
  return (
    <section className="py-16 px-20 flex flex-col text-white/90 items-start justify-center">
      {/* Section Title */}
      <h2 className="mt-12 text-left text-sm tracking-wide uppercase text-gray-400">
        About Us
      </h2>

      {/* Content Section */}
      <div className="flex w-full flex-row gap-12">
        {/* Left Side - Clients */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="mt-2 pb-12 text-[2.5rem] font-semibold text-left leading-tight">
            We don’t just think outside the box; <br /> we explore new
            frontiers.
          </h2>

          <div className="grid grid-cols-3 gap-8 mt-6">
            <img
              src="/marriott-logo.png"
              alt="Marriott"
              className="w-24 opacity-75"
            />
            <img
              src="/pearl-continental-logo.png"
              alt="Pearl Continental"
              className="w-24 opacity-75"
            />
            <img
              src="/libs-technologies-logo.png"
              alt="LIBS Technologies"
              className="w-24 opacity-75"
            />
            <img
              src="/programmers-force-logo.png"
              alt="Programmers Force"
              className="w-24 opacity-75"
            />
            <img
              src="/monitor-health-logo.png"
              alt="Monitor Health"
              className="w-24 opacity-75"
            />
            <img
              src="/oboetech-logo.png"
              alt="OBOEtech"
              className="w-24 opacity-75"
            />
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex flex-col w-[50vw] text-gray-400 text-lg leading-relaxed">
          <p>
            With over{' '}
            <span className="text-white font-semibold">100+ happy clients</span>
            , we blend engineering, consumer insights, and design to deliver
            world-class innovations that make an impact.
          </p>
          <p className="mt-6">
            Based in Dubai, UAE, our talented team brings expertise across a
            wide range of industries. Partnering with us means accessing a
            dynamic team of seasoned professionals in Electrical Engineering,
            Mechatronics, AI, Product Design, and Software Development — all
            skilled at turning your idea into a market-ready solution.
          </p>
        </div>
      </div>
    </section>
  );
}
