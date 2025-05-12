// components/FeasibilityCard.tsx

import Image from 'next/image';

export default function FeasibilityCard({
    image,
    description,
    subdescription,
    slug,
}) {

    console.log('FeasibilityCard props:', image, description, subdescription, slug); // Debugging line
    return (
        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md p-6 bg-[#0D0D0D] relative">
            <div className="flex justify-center">
                <Image src={image} alt="Icon" width={240} height={240} className="h-50  w-50 text-color-[#FFFFFF0D] " />
            </div>

            <div className=' bg-[#FFFFFF0D] h-[50%] absolute left-0 right-0 bottom-0 blur-sm  '></div>
            <div className="text-gray-200 w-full ">
                <h3 className="text-xl font-medium mb-2 text-white font-[Plus Jakarta]">{description}</h3>
                <p className="text-md text-white/78 font-[Inter] font-normal">
                    {subdescription}
                </p>
            </div>
        </div>
    );
}
