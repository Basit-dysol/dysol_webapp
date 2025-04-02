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
    <main className="flex flex-col items-baseline justify-center bg-[url('/LandingPage.png')] bg-cover bg-center text-center ">
      <h1 className="mt-4 items-start text-left text-lg">Our Work</h1>
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
