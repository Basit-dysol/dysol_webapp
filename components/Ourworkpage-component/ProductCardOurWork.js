import Link from 'next/link';

export default function ProductCardOurWork({
  image,
  description,
  subdescription,
  slug,
  tags,
}) {
  return (
    <Link
      href={`/our-work/${slug}`}
      className="block group w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-full rounded-2xl">
        {/* Image with scale effect only */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
        />

        {/* Content container - no overlays */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Text content */}
          <div>
            <h3 className="text-white text-2xl drop-shadow-md">
              {description}
            </h3>
            <p className="text-white/90 font-light mt-2 drop-shadow-md">
              {subdescription}
            </p>
          </div>

          {/* Tags section */}
          <div>
            <div className="border-t-2 border-dashed border-white/20 my-4"></div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
