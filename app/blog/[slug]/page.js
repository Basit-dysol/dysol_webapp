export default function BlogPost({ params }) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{params.slug.replace('-', ' ')}</h1>
      <p>This is the blog post content.</p>
    </main>
  );
}
