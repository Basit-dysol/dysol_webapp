import Link from 'next/link';

export default function OurWorkPage() {
  const projects = [
    'project-1',
    'project-2',
    'project-3',
    'project-4',
    'project-5',
    'project-6',
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Our Work</h1>
      <ul className="mt-5 space-y-3">
        {projects.map((project) => (
          <li key={project}>
            <Link
              href={`/our-work/${project}`}
              className="text-blue-500 hover:underline">
              {project.replace('-', ' ').toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
