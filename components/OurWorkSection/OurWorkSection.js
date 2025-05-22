import ProductCard from '../ProductCard';

const projects = [
  {
    image: '/project-a.png',
    description: 'Wound VAC <br/> Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'wound-vac-device',
  },
  {
    image: '/project-b.png',
    description: 'World’s First Solar <br/>  Breast Pump',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'world-s-first-solar-breast-pump',
  },
  {
    image: '/project-c.png',
    description: 'Iris Identifiction <br/>  Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'iris-identification-device',
  },
  {
    image: '/project-d.png',
    description: 'Baby <br/> Rocker',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'baby-rocker',
  },
  {
    image: '/project-e.png',
    description: 'Smart Blood <br/> Pressure Monitor',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'smart-blood-pressure-monitor',
  },
  {
    image: '/project-f.png',
    description: 'AI AC <br/>  Control Device',
    subdescription:
      'Enhances wound treatment by speeding healing and improving outcomes',
    slug: 'ai-ac-control-device',
  },
];

export default function OurWorkSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-24 2xl:px-32 flex flex-col text-white/90 items-baseline justify-center text-center">
      {/* Section Header */}
      <h2 className="mt-6 md:mt-12 items-start text-left text-sm md:text-base uppercase tracking-wide">
        OUR WORK
      </h2>

      {/* Section Title */}
      <h2 className="text-3xl md:text-[2.5rem] items-start text-left leading-tight mb-8 md:mb-12">
        {/* <h2 className="mt-2 pb-6 md:pb-12 text-3xl md:text-[2.5rem]  leading-tight font-semibold"> */}
        We engineer ideas into impactful products.
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 w-full justify-items-center mt-2">
        {projects.map((project) => (
          <ProductCard
            key={project.slug}
            {...project}
            className="w-full" // Ensure cards take full width on mobile
          />
        ))}
      </div>
    </section>
  );
}

// import ProductCard from '../ProductCard';

// const projects = [
//   {
//     image: '/project-a.png',
//     description: 'Wound VAC <br/> Device',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'wound-vac-device',
//   },
//   {
//     image: '/project-b.png',
//     description: 'World’s First Solar <br/>  Breast Pump',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'world-s-first-solar-breast-pump',
//   },
//   {
//     image: '/project-c.png',
//     description: 'Iris Identifiction <br/>  Device',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'iris-identification-device',
//   },
//   {
//     image: '/project-d.png',
//     description: 'Baby <br/> Rocker',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'baby-rocker',
//   },
//   {
//     image: '/project-e.png',
//     description: 'Smart Blood <br/> Pressure Monitor',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'smart-blood-pressure-monitor',
//   },
//   {
//     image: '/project-f.png',
//     description: 'AI AC <br/>  Control Device',
//     subdescription:
//       'Enhances wound treatment by speeding healing and improving outcomes',
//     slug: 'ai-ac-control-device',
//   },
// ];

// export default function OurWorkSection() {
//   return (
//     <section className="py-16 px-24 2xl:px-32 flex flex-col text-white/90 items-baseline justify-center text-center">
//       <h2 className="mt-12 items-start text-left ">OUR WORK</h2>
//       <h2 className="mt-2 pb-12 text-[2.5rem] items-start text-left">
//         We engineer ideas into impactful products.
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full justify-items-center mt-2">
//         {projects.map((project) => (
//           <ProductCard key={project.slug} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// }
