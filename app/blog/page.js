import BlogCard from '@/components/Blog/BlogCard';

export default async function BlogPage() {
  try {
    console.log('🔁 Starting fetch from /api/blogs');

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });

    console.log('📡 Response status:', res.status);

    const contentType = res.headers.get('content-type');
    console.log('📄 Content-Type:', contentType);

    if (!res.ok || !contentType?.includes('application/json')) {
      const text = await res.text();
      console.error('❌ Not a valid JSON response. Raw response:', text);
      throw new Error('Invalid JSON response from /api/blogs');
    }

    const blogs = await res.json();

    return (
      <main className="py-12 md:py-24 px-6 2xl:px-32 md:px-24 text-white ">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="mt-8 md:mt-12 text-sm md:text-base text-white/50 text-left">
            <a href="/">Home</a> / <span>Blog</span>
          </h2>
          <h2 className="mt-4 md:mt-8 text-3xl md:text-5xl font-medium text-left">
            Design the future with us.
          </h2>
          <p className="text-white/70 mt-2 md:mt-4 text-base md:text-inherit">
            Do you want a deeper look into the innovation, design, and
            technology <br /> that shapes what we do at Dysol? You’ve come to
            the right place.
          </p>
        </div>

        {/* Grid for Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog._id}
              image={blog?.mainImage}
              description={blog.title}
              subdescription={blog.subtitle}
              slug={blog.slug.current}
              tags={blog.tags}
              className={`w-full ${index === 0 ? 'lg:col-span-2' : ''}`}
            />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error('💥 Error in BlogPage:', error.message);
    return (
      <main className="py-12 md:py-24 px-6 md:px-20 text-white">
        <h2 className="text-red-500 text-sm md:text-base">
          Error loading blogs: {error.message}
        </h2>
      </main>
    );
  }
}

// import BlogCard from '@/components/Blog/BlogCard';

// export default async function BlogPage() {
//   try {
//     console.log('🔁 Starting fetch from /api/blogs');

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
//       next: { revalidate: 3600 },
//     });

//     console.log('📡 Response status:', res.status);

//     const contentType = res.headers.get('content-type');
//     console.log('📄 Content-Type:', contentType);

//     // Check if response is actually JSON
//     if (!res.ok || !contentType?.includes('application/json')) {
//       const text = await res.text();
//       console.error('❌ Not a valid JSON response. Raw response:', text);
//       throw new Error('Invalid JSON response from /api/projects');
//     }

//     const projects = await res.json();
//     // console.log('✅ Projects received from API:', projects);

//     return (
//       <main className="py-12 md:py-24 px-6 2xl:px-32 md:px-24 text-white ">
//         {/* Page Header */}
//         <div className="mb-8 md:mb-12">
//           <h2 className="mt-8 md:mt-12 text-sm md:text-base text-white/50 text-left">
//             <a href="/">Home</a> / <span>Blog</span>
//           </h2>
//           <h2 className="mt-4 md:mt-8 text-3xl md:text-5xl font-medium text-left">
//             Design the future with us.
//           </h2>
//           <p className="text-white/70 mt-2 md:mt-4 text-base md:text-inherit">
//             Do you want a deeper look into the innovation, design, and
//             technology <br /> that shapes what we do at Dysol? You’ve come to
//             the right place.
//           </p>
//         </div>

//         {/* Grid for Project Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2">
//           {projects.map((project, index) => (
//             <BlogCard
//               key={project._id}
//               image={project?.projectImages}
//               description={project.title}
//               subdescription={project.projectIdea}
//               slug={project.slug.current}
//               tags={project.tags}
//               className={`w-full ${index === 0 ? 'lg:col-span-2' : ''}`}
//             />
//           ))}
//         </div>
//       </main>
//     );
//   } catch (error) {
//     console.error('💥 Error in OurWorkPage:', error.message);
//     return (
//       <main className="py-12 md:py-24 px-6 md:px-20 text-white">
//         <h2 className="text-red-500 text-sm md:text-base">
//           Error loading projects: {error.message}
//         </h2>
//       </main>
//     );
//   }
// }
