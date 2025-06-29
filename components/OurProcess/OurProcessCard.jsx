import Image from 'next/image';

export default function OurProcessCard({
  image,
  description,
  subdescription,
  slug,
}) {
  console.log(
    'FeasibilityCard props:',
    image,
    description,
    subdescription,
    slug
  ); // Debugging line
  // ...existing code...
  // ...existing code...
  return (
    <div
      className="w-[489px] h-[400px] rounded-xl overflow-hidden shadow-md p-6 relative border-[1px] border-white/10"
      style={{
        background:
          'linear-gradient(180deg, #0D0D0D 0%,rgba(26, 26, 26, 0.6) 100%)',
      }}>
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Icon"
          width={240}
          height={240}
          className="h-50 w-50"
        />
      </div>

      <div
        className="h-[50%] absolute left-0 right-0 bottom-0 blur-sm"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF00 15%, #FFFFFF0D 90%)',
        }}></div>
      <div className="absolute left-0 right-0 bottom-0 p-6 text-gray-200 w-full z-10">
        <h3 className="text-xl font-medium mb-2 text-white font-[Plus Jakarta]">
          {description}
        </h3>
        <p className="text-md text-white/78 font-[Inter] font-normal">
          {subdescription}
        </p>
      </div>
    </div>
  );
  // ...existing code...
}
