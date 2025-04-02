export default function AboutSection() {
  const logos = [1, 2, 3, 4, 5, 6]; // Array for logo numbers

  return (
    <section className=" h-screen mb-12 px-20 flex flex-col text-white/90 items-start justify-center">
      {/* Section Title */}
      <h2 className="mt-12 text-left text-sm tracking-wide uppercase">
        About Us
      </h2>

      {/* Content Section */}
      <div className="flex w-full flex-row gap-12">
        {/* Left Side - Clients */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="mt-2 pb-12 text-[2.5rem] font-semibold text-left leading-tight">
            We don't just think outside the box; <br /> we explore new
            frontiers.
          </h2>

          <div className="grid grid-cols-3 gap-8 mt-6 relative">
            {/* Vertical grid lines (only between columns) */}
            <div className="absolute top-0 bottom-0 left-1/3 w-0.5  border-[#4D4D4D]/80 border-l-2 border-dashed"></div>
            <div className="absolute top-0 bottom-0 left-2/3 w-0.5 border-[#4D4D4D]/80 border-l-2 border-dashed"></div>

            {/* Horizontal grid lines (only between rows) */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 border-[#4D4D4D]/80 border-t-2 border-dashed"></div>

            {logos.map((num) => (
              <div key={num} className="relative group">
                {/* Default Logo */}
                <img
                  src={`/aboutuslogos/logo (${num}).svg`}
                  alt={`Client Logo ${num}`}
                  className="opacity-75 group-hover:opacity-0 transition-opacity duration-300"
                />
                {/* Hover Logo */}
                <img
                  src={`/aboutuslogos/logohover (${num}).svg`}
                  alt={`Client Logo ${num} Hover`}
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="flex flex-col w-[33vw] text-lg leading-relaxed">
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
