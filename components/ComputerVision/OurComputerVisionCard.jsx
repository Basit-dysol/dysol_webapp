import Image from "next/image";

export default function OurComputerVisionCard({ image, description, subdescription, slug }) {
  return (
    <div
      className="relative w-full max-w-sm rounded-2xl border border-white/10 p-8 overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, rgba(13,13,13,0.7) 50%, rgba(26,26,26,0.9) 100%)",
      }}>
      {/* Icon */}
      <div className="flex h-24 items-center justify-center">
        <Image src={image} alt="icon" width={108} height={108} className="opacity-80" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-medium text-white leading-snug mr-18  ">{description}</h3>

      {/* Bullet Points */}
      <div className="flex flex-col gap-1">
        {subdescription.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Image src="/computervision/arrow.png" alt="arrow" width={10} height={10} className="mt-[6px] opacity-70" />
            <span className="text-sm text-white/70 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      {/* Bottom Soft Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-124 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 100%)",
        }}
      />
    </div>
  );
}
