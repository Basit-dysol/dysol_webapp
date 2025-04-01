export default function ProjectDetail({ params }) {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">
        Details for {params.slug.replace('-', ' ')}
      </h1>
    </main>
  );
}
