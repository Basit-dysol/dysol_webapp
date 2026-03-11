import Image from "next/image";

export default function OurProcessCard({ image, description, subdescription, slug }) {
  // console.log('FeasibilityCard props:', image, description, subdescription, slug); // Debugging line
  // ...existing code...
  // ...existing code...
  return (
    <div
      className="w-[100%] h-98 rounded-2xl pt-20 overflow-hidden shadow-md p-6 relative border-[1px] border-white/10"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, rgba(18,18,18,0.9) 50%, rgba(26,26,26,0.9) 100%)",
      }}>
      <div className="flex justify-center">
        <Image src={image} alt="Icon" width={240} height={240} className="h-50 w-50" />
      </div>

      <div
        className="h-[50%] absolute left-0 right-0 bottom-0 blur-sm"
        style={{
          background: "linear-gradient(180deg, #FFFFFF00 15%, #FFFFFF0D 90%)",
        }}></div>
      <div className="absolute left-0 right-0 bottom-1 min-h-[200px] w-full z-10 flex flex-col px-6 pt-[60px]">
        <h3 className="text-[21px] [@media(min-width:1400px)]:text-2xl [@media(min-width:1724px)]:text-3xl font-medium text-white mb-4">{description}</h3>
        <p className="text-[13px] [@media(min-width:1400px)]:text-[18px] text-white/78 font-[Inter] font-normal">{subdescription}</p>
      </div>
    </div>
  );
  // ...existing code...
}
