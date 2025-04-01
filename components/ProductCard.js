import Link from 'next/link';

export default function ProductCard({ title, description, slug }) {
  return (
    <Link href={`/our-work/${slug}`} className="block">
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </Link>
  );
}
