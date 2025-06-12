import Link from 'next/link';

export default function ProductCardOurWork({
  image,
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

  const imageUrl =
    image[0]?.asset?._ref ? getImageUrl(image[0].asset._ref) : null;


 const visibleTags = tags?.slice(0, 3);
 const remainingTags = (tags?.length - visibleTags.length) || 0;

  return (
    <Link
      href={`/our-work/${slug}`}
      className="block group w-full h-[400px] md:h-[650px] xl:h-[700px] 2xl:h-[800px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500">
      <div className="relative w-full h-full rounded-2xl bg-gray-800/50">
        {/* Image with fallback (keep same) */}
        {imageUrl ?
          <img
            src={imageUrl}
            alt={description || 'Project image'}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />
        : <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-700 flex items-center justify-center">
            <span className="text-white/50">No image available</span>
          </div>
        }

        {/* Content overlay with mobile adjustments */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
          <div>
            <h3 className="text-white text-2xl md:text-4xl font-normal drop-shadow-md">
              {description}
            </h3>
            {subdescription && (
              <p className="text-white/70 text-base md:text-sm font-light mt-2 md:mt-2 drop-shadow-md line-clamp-2">
                {subdescription}
              </p>
            )}
          </div>

          {/* Tags - hidden on mobile */}
          {tags?.length > 0 && (
            <div className="hidden md:block mt-4">
              <div className="border-t-2 border-dashed border-white/16 my-3"></div>
              <div className="flex flex-wrap gap-2">
                {visibleTags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs">
                    {tag}
                  </span>
                ))}
                {remainingTags > 0 && (
                  <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs">
                    +{remainingTags}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

// import Link from 'next/link';

// export default function ProductCardOurWork({
//   image, // Should be project.projectImages[0] from your data
//   description,
//   subdescription,
//   slug,
//   tags = [],
// }) {
//   // Simple function to transform Sanity _ref to URL
//   const getImageUrl = (imgRef) => {
//     if (!imgRef) return null;

//     // Remove 'image-' prefix and file extension
//     const refParts = imgRef.replace('image-', '').split('-');
//     const assetId = refParts[0];
//     const dimensions = refParts[1];
//     const format = refParts[2];
//     return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
//   };

//   const imageUrl =
//     image[0]?.asset?._ref ? getImageUrl(image[0].asset._ref) : null;

//   return (
//     <Link
//       href={`/our-work/${slug}`}
//       className="block group w-full h-[400px] lg:h-[650px] xl:h-[700px] 2xl:h-[800px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500">
//       <div className="relative w-full h-full rounded-2xl bg-gray-800/50">
//         {/* Image with fallback */}
//         {imageUrl ?
//           <img
//             src={imageUrl}
//             alt={description || 'Project image'}
//             className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
//           />
//         : <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-700 flex items-center justify-center">
//             <span className="text-white/50">No image available</span>
//           </div>
//         }

//         {/* Content overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent p-10 flex flex-col justify-end">
//           <div>
//             <h3 className="text-white text-4xl font-normal drop-shadow-md">
//               {description}
//             </h3>
//             {subdescription && (
//               <p className="text-white/70 text-sm font-light mt-2 drop-shadow-md line-clamp-2">
//                 {subdescription}
//               </p>
//             )}
//           </div>

//           {tags?.length > 0 && (
//             <div className="mt-4">
//               <div className="border-t-2 border-dashed border-white/16 my-3"></div>
//               <div className="flex flex-wrap gap-2">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// }
