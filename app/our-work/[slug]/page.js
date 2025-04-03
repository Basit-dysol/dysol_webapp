// app/our-work/[slug]/page.jsx
export default function ProjectDetail({ params }) {
  // Sample data - replace with your actual data fetching
  const projectData = {
    title: params.slug.replace(/-/g, ' '),
    image: `/${params.slug}.jpg`, // assumes images are named after slugs
    description: 'This is a detailed description of the project...',
    timeline: {
      start: 'Jan 2023',
      end: 'Dec 2023',
    },
    tags: ['Design', 'Development', params.slug.split('-')[0]],
    sections: {
      innovation: 'Innovation journey details...',
      challenge: 'Project challenges description...',
      approach: 'Our methodology approach...',
      solution: 'The implemented solution...',
    },
    finalWords: 'The successful outcome of this project...',
  };

  return (
    <main className="text-white">
      {/* Hero Section - Full screen background */}
      <section
        className="h-screen w-full flex flex-col justify-between p-6 md:p-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${projectData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <span className="opacity-80">Our Work / </span>
            <span className="font-medium">{projectData.title}</span>
          </nav>

          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
            {projectData.title}
          </h1>

          {/* Dashed Line */}
          <div className="border-t-2 border-dashed border-white/30 my-6 w-24"></div>

          {/* Project Description */}
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            {projectData.description}
          </p>
        </div>
      </section>

      {/* Two Column Content Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 p-6 md:p-12 bg-gray-900">
        {/* Left Column (1fr) */}
        <div className="md:col-span-1 space-y-8">
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={projectData.image}
              alt={projectData.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-xl font-semibold mb-4">TIME LINE</h2>
            <div className="border-t-2 border-dashed border-white/20 my-4"></div>
            <p className="opacity-80">
              {projectData.timeline.start} — {projectData.timeline.end}
            </p>
            <div className="border-t-2 border-dashed border-white/20 my-4"></div>
          </div>

          {/* Tags */}
          <div>
            <div className="flex flex-wrap gap-2">
              {projectData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (2fr) */}
        <div className="md:col-span-2 space-y-12">
          <Section
            title="The end-to-end innovation journey"
            content={projectData.sections.innovation}
          />
          <Section
            title="The challenge"
            content={projectData.sections.challenge}
          />
          <Section
            title="Our approach"
            content={projectData.sections.approach}
          />
          <Section
            title="The solution"
            content={projectData.sections.solution}
          />

          {/* Final Words */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <p className="text-lg italic">{projectData.finalWords}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable section component
function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="opacity-90 leading-relaxed">{content}</p>
    </div>
  );
}
