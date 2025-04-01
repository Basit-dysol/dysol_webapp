export default function ProjectPage({ params }) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Project: {params.project.replace('-', ' ').toUpperCase()}
      </h1>
      <p>Details about this amazing project.</p>
    </main>
  );
}
