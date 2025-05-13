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
      className="block min-h-max h-[400px]  product-card group w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.1] transform transition-all duration-700"
        />

        <div className="absolute inset-0 transition-all duration-700 rounded-2xl" />

        <div className="transform transition-all duration-700 flex flex-col justify-end px-12 pb-12 w-full text-left absolute top-0 left-0 h-full overflow-hidden">
          <h2
            className="
            text-white/90 text-4xl transform transition-all duration-700
          "
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* {description} */}
          {/* </h2> */}
          <p
            className="
            text-white/80 font-light text-base
            product-card-description
            text-ellipsis
            overflow-hidden transform transition-all duration-700
          ">
            {subdescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
