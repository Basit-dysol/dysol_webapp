import Image from 'next/image';

export default function OurComputerVisionCard({
  image,
  description,
  subdescription,
  slug,
}) {
  return (
    <div
      className="relative w-full rounded-2xl border border-white/10  overflow-hidden transition-all duration-300 hover:border-white/20"
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
      <div className="flex h-34 items-center justify-center mt-12">
        <Image src={image} alt="icon" width={150} height={150} className="opacity-80" />
      </div>
     

      <div
        className="absolute top-30 left-0  w-full h-30 pointer-events-none blur-sm"
        style={{
          background: "linear-gradient(to top, #1D1D1D 0%, rgba(29,29,29,0.85) 60%, rgba(29,29,29,0.5) 35%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-30 left-0 w-full h-80 pointer-events-none blur-sm"
        style={{
          background: "linear-gradient(to top, #1D1D1D 0%, rgba(29,29,29,0.85) 60%, rgba(29,29,29,0.5) 35%, transparent 100%)",
        }}
      />

      <div className="p-8 pt-0">
        {/* Title */}
        <h3 className="relative text-2xl font-medium text-white leading-snug whitespace-pre-line">{description}</h3>

        {/* Bullet Points */}
        <div className="relative flex flex-col gap-1 mt-4">
          {subdescription.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image src="/computervision/arrow.png" alt="arrow" width={10} height={10} className="mt-[6px] opacity-70" />
              <span className="text-lg text-white/70 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
