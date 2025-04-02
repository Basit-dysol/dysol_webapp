import Link from 'next/link';

export default function ProductCard({
  image,
  description,
  subdescription,
  slug,
}) {
  return (
    <Link
      href={`/our-work/${slug}`}
      className="block group w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-full rounded-2xl">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 transition-all duration-300 rounded-2xl" />

        <div className="absolute top-55 left-0 px-12 w-full text-left">
          <h2
            className="
            text-white/90 text-4xl
            transition-all duration-300 
            transform translate-y-0 group-hover:-translate-y-10
          ">
            {description}
          </h2>
          <p
            className="
            text-white/80 font-light text-base
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            transform translate-y-4 group-hover:-translate-y-10
          ">
            {subdescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
