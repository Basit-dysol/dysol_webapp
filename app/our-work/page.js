import ProductCardOurWork from '@/components/Ourworkpage-component/ProductCardOurWork';

export default async function OurWorkPage() {
  try {
    console.log('🔁 Starting fetch from /api/projects');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`,
      {
        next: { revalidate: 3600 },
      }
    );

    console.log('📡 Response status:', res.status);

    const contentType = res.headers.get('content-type');
    console.log('📄 Content-Type:', contentType);

    // Check if response is actually JSON
    if (!res.ok || !contentType?.includes('application/json')) {
      const text = await res.text();
      console.error('❌ Not a valid JSON response. Raw response:', text);
      throw new Error('Invalid JSON response from /api/projects');
    }

    const projects = await res.json();
    console.log('✅ Projects received from API:', projects);

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
            Dysol is proud to design the future, one innovative project at a
            time.
          </p>
        </div>

        {/* Grid for Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          {projects.map((project) => (
            <ProductCardOurWork
              key={project._id}
              image={projects[0]?.projectImages} // First image from array
              description={project.title}
              subdescription={project.projectIdea}
              slug={project.slug.current}
              tags={project.tags}
            />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error('💥 Error in OurWorkPage:', error.message);
    return (
      <main className="py-24 px-20 text-white">
        <h2 className="text-red-500">
          Error loading projects: {error.message}
        </h2>
      </main>
    );
  }
}
