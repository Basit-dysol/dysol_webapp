import ProductCardOurWork from '@/components/Ourworkpage-component/ProductCardOurWork';

export default function OurWorkPage() {
  const projects = [
    {
      image: '/project-a.png',
      description: 'Wound VAC Device',
      subdescription:
        'Enhances wound treatment by speeding healing and improving outcomes',
      slug: 'wound-vac-device',
      tags: [
        'Biomedical Engineering',
        'Product & Industrial Design',
        '3D Printing',
      ],
    },
    {
      image: '/project-b.png',
      description: 'World’s First Solar Breast Pump',
      subdescription:
        'Sustainable and accessible healthcare solution for emerging markets',
      slug: 'solar-breast-pump',
      tags: ['Renewable Energy', 'Product Design', 'Embedded Systems'],
    },
    {
      image: '/project-c.png',
      description: 'Iris Identification Device',
      subdescription:
        'Advanced biometric security system for high-risk environments',
      slug: 'iris-identification-device',
      tags: ['Biometric Security', 'AI & ML', 'Computer Vision'],
    },
    {
      image: '/project-d.png',
      description: 'Baby Rocker',
      subdescription: 'A smart, automated rocking solution for infants',
      slug: 'baby-rocker',
      tags: ['IoT', 'Smart Home', 'Embedded Systems'],
    },
    {
      image: '/project-e.png',
      description: 'Smart Blood Pressure Monitor',
      subdescription: 'Real-time health monitoring with AI-powered insights',
      slug: 'smart-bp-monitor',
      tags: ['Healthcare Tech', 'Wearables', 'AI Diagnostics'],
    },
    {
      image: '/project-f.png',
      description: 'AI AC Control Device',
      subdescription:
        'Smart air conditioning control using AI for energy efficiency',
      slug: 'ai-ac-control',
      tags: ['Smart Homes', 'AI Automation', 'Energy Efficiency'],
    },
  ];

  return (
    <main className="py-24 px-20 text-white">
      {/* Page Header */}
      <div className="mb-12">
        <h2 className="mt-12 text-white/50 items-start text-left ">
          <a href="/">Home</a> / <span>Our Work</span>
        </h2>
        <h2 className="mt-8 text-5xl font-medium items-start text-left">
          Our portfolio of innovations
        </h2>
        <p className="text-white/70 mt-4">
          Dysol is proud to design the future, one innovative project at a time.
        </p>
      </div>

      {/* Grid for Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
        {projects.map((project) => (
          <ProductCardOurWork key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}
