import ProductCard from '../ProductCard';

const projects = [
  {
    image: '/project-a.png',
    description: 'Wound VAC Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-a',
  },
  {
    image: '/project-b.png',
    description: 'World’s First Solar Breast Pump',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-b',
  },
  {
    image: '/project-c.png',
    description: 'Iris Identifiction Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-c',
  },
  {
    image: '/project-d.png',
    description: 'Baby Rocker',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-d',
  },
  {
    image: '/project-e.png',
    description: 'Smart Blood Pressure Monitor',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-e',
  },
  {
    image: '/project-f.png',
    description: 'AI AC Control Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'project-f',
  },
];

export default function OurWorkSection() {
  return (
    <section className="py-16 px-20 flex flex-col text-white/90 items-baseline justify-center text-center">
      <h2 className="mt-12 items-start text-left ">OUR WORK</h2>
      <h2 className="mt-2 pb-12 text-[2.5rem] items-start text-left">
        We engineer ideas into impactful products.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
        {projects.map((project) => (
          <ProductCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
