import ProductCard from '../ProductCard';

const projects = [
  {
    title: 'Project A',
    description: 'Description of Project A',
    slug: 'project-a',
  },
  {
    title: 'Project B',
    description: 'Description of Project B',
    slug: 'project-b',
  },
  {
    title: 'Project C',
    description: 'Description of Project C',
    slug: 'project-c',
  },
];

export default function OurWorkSection() {
  return (
    <section className="py-16 px-6 bg-[#1A1A1A]">
      <h2 className="text-3xl font-bold text-center">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <ProductCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
