// import Link from 'next/link';

// export default function ProductCardOurWork({
//   image,
//   description,
//   subdescription,
//   slug,
//   tags,
// }) {
//   return (
//     <Link
//       href={`/our-work/${slug}`}
//       className="block group w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
//       <div className="relative w-full h-full rounded-2xl">
//         {/* Image with scale effect only */}
//         <img
//           src={image}
//           alt=""
//           className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
//         />

//         {/* Content container - no overlays */}
//         <div className="absolute inset-0 p-6 flex flex-col justify-end">
//           {/* Text content */}
//           <div>
//             <h3 className="text-white text-2xl drop-shadow-md">
//               {description}
//             </h3>
//             <p className="text-white/90 font-light mt-2 drop-shadow-md">
//               {subdescription}
//             </p>
//           </div>

//           {/* Tags section */}
//           <div>
//             <div className="border-t-2 border-dashed border-white/20 my-4"></div>
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

import Link from 'next/link';

export default function ProductCardOurWork({
  image, // Should be project.projectImages[0] from your data
  description,
  subdescription,
  slug,
  tags = [],
}) {
  // Simple function to transform Sanity _ref to URL
  const getImageUrl = (imgRef) => {
    if (!imgRef) return null;

    // Remove 'image-' prefix and file extension
    const refParts = imgRef.replace('image-', '').split('-');
    const assetId = refParts[0];
    const dimensions = refParts[1];
    const format = refParts[2];
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
  };

  const imageUrl = image?.asset?._ref ? getImageUrl(image.asset._ref) : null;

  return (
    <Link
      href={`/our-work/${slug}`}
      className="block group w-full h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-full rounded-2xl bg-gray-800/50">
        {/* Image with fallback */}
        {imageUrl ?
          <img
            src={imageUrl}
            alt={description || 'Project image'}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
          />
        : <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-700 flex items-center justify-center">
            <span className="text-white/50">No image available</span>
          </div>
        }

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
          <div>
            <h3 className="text-white text-2xl font-medium drop-shadow-md">
              {description}
            </h3>
            {subdescription && (
              <p className="text-white/80 font-light mt-2 drop-shadow-md line-clamp-2">
                {subdescription}
              </p>
            )}
          </div>

          {tags?.length > 0 && (
            <div className="mt-4">
              <div className="border-t-2 border-dashed border-white/20 my-3"></div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
