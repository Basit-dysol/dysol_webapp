import Image from "next/image";

export default function OurComputerVisionCard({ image, description, subdescription, slug }) {
  return (
    <div
      className="relative w-full rounded-2xl pt-20 border border-white/10  overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, rgba(13,13,13,0.7) 50%, rgba(26,26,26,0.9) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0  w-full h-50 "
       style={{
        background: "#0D0D0D",
      }}
      />
       
      {/* Icon */}
      <div className="flex h-40 items-center justify-center ">
        <Image src={image} alt="icon" width={200} height={200} className="opacity-80" />
      </div>

      <div
        className="absolute top-38 left-0  w-full h-40 pointer-events-none blur-sm"
        style={{
          background: "linear-gradient(to top, #1D1D1D 0%, rgba(29,29,29,0.85) 60%, rgba(29,29,29,0.5) 35%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-38 left-0 w-full h-100 pointer-events-none blur-sm"
        style={{
          background: "linear-gradient(to top, #1D1D1D 0%, rgba(29,29,29,0.85) 60%, rgba(29,29,29,0.5) 35%, transparent 100%)",
        }}
      />

      <div className="p-12 pt-0">
        {/* Title */}
        <h3 className="relative text-3xl font-medium text-white leading-snug whitespace-pre-line">{description}</h3>

        {/* Bullet Points */}
        <div className="relative flex flex-col gap-1 mt-4">
          {subdescription.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image src="/computervision/arrow.png" alt="arrow" width={18} height={18} className="mt-[6px] opacity-70" />
              <span className="text-[20px] text-white/70 leading-relaxed md:leading-[1.9]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
