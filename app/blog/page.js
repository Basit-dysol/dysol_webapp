import Link from 'next/link';

const blogPosts = [
  { title: 'First Blog Post', slug: 'first-post' },
  { title: 'Second Blog Post', slug: 'second-post' },
];

export default function BlogPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-5 space-y-3">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
