// // app/our-work/[slug]/page.jsx
// export default function ProjectDetail({ params }) {
//   // Sample data - replace with your actual data fetching
//   const projectData = {
//     title: params.slug.replace(/-/g, ' '),
//     image: `/${params.slug}.jpg`, // assumes images are named after slugs
//     description: 'This is a detailed description of the project...',
//     timeline: {
//       start: 'Jan 2023',
//       end: 'Dec 2023',
//     },
//     tags: ['Design', 'Development', params.slug.split('-')[0]],
//     sections: {
//       innovation: 'Innovation journey details...',
//       challenge: 'Project challenges description...',
//       approach: 'Our methodology approach...',
//       solution: 'The implemented solution...',
//     },
//     finalWords: 'The successful outcome of this project...',
//   };

//   return (
//     <main className="text-white">
//       {/* Hero Section - Full screen background */}
//       <section
//         className="h-screen w-full flex flex-col justify-between p-6 md:p-12"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${projectData.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}>
//         <div className="container mx-auto">
//           {/* Breadcrumb */}
//           <nav className="text-sm mb-8">
//             <span className="opacity-80">Our Work / </span>
//             <span className="font-medium">{projectData.title}</span>
//           </nav>

//           {/* Project Title */}
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
//             {projectData.title}
//           </h1>

//           {/* Dashed Line */}
//           <div className="border-t-2 border-dashed border-white/30 my-6 w-24"></div>

//           {/* Project Description */}
//           <p className="text-lg md:text-xl max-w-2xl opacity-90">
//             {projectData.description}
//           </p>
//         </div>
//       </section>

//       {/* Two Column Content Section */}
//       <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 p-6 md:p-12 bg-gray-900">
//         {/* Left Column (1fr) */}
//         <div className="md:col-span-1 space-y-8">
//           {/* Project Image */}
//           <div className="rounded-xl overflow-hidden">
//             <img
//               src={projectData.image}
//               alt={projectData.title}
//               className="w-full h-64 object-cover"
//             />
//           </div>

//           {/* Timeline */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">TIME LINE</h2>
//             <div className="border-t-2 border-dashed border-white/20 my-4"></div>
//             <p className="opacity-80">
//               {projectData.timeline.start} — {projectData.timeline.end}
//             </p>
//             <div className="border-t-2 border-dashed border-white/20 my-4"></div>
//           </div>

//           {/* Tags */}
//           <div>
//             <div className="flex flex-wrap gap-2">
//               {projectData.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column (2fr) */}
//         <div className="md:col-span-2 space-y-12">
//           <Section
//             title="The end-to-end innovation journey"
//             content={projectData.sections.innovation}
//           />
//           <Section
//             title="The challenge"
//             content={projectData.sections.challenge}
//           />
//           <Section
//             title="Our approach"
//             content={projectData.sections.approach}
//           />
//           <Section
//             title="The solution"
//             content={projectData.sections.solution}
//           />

//           {/* Final Words */}
//           <div className="bg-white/5 p-8 rounded-xl border border-white/10">
//             <p className="text-lg italic">{projectData.finalWords}</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// // Reusable section component
// function Section({ title, content }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <p className="opacity-90 leading-relaxed">{content}</p>
//     </div>
//   );
// }

// app/our-work/[slug]/page.jsx
import { client } from '@/lib/sanity.client';
import { projectQuery } from '@/lib/sanity.queries';
// import Image from 'next/image';
import { notFound } from 'next/navigation';
import CaseStudyCarousel from '@/components/Shared/CaseStudyCarousel';
import ProductCarousel from '@/components/Shared/ProductCarousel';

export async function generateStaticParams() {
  const projects = await client.fetch(`*[_type == "project"] { slug }`);

  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export const revalidate = 3600; // Revalidate every hour

async function getProjectData(slug) {
  const project = await client.fetch(projectQuery, { slug });

  if (!project) {
    return notFound();
  }

  return project;
}

export default async function ProjectDetail({ params }) {
  const { slug } = params;
  if (!slug) {
    return notFound();
  }

  const project = await getProjectData(slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    next: { revalidate: 3600 },
  });

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
  // console.log('✅ Projects received from API:', projects);

  // Get main image URL (using your existing function)
  const getImageUrl = (imgRef) => {
    const refParts = imgRef.replace('image-', '').split('-');
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${refParts[0]}-${refParts[1]}.${refParts[2]}`;
  };

  const mainImage = project.projectImages[project.landingImageIndex || 0];
  const imageUrl = getImageUrl(mainImage?.asset?._ref);

  return (
    <main className="text-white">
      <section
        className="relative w-full flex flex-col justify-between 2xl:px-32 xl:px-24 2xl:py-20 xl:py-20  px-12 xl:aspect-[156/100]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="container">
          <div className="flex items-center mt-16 gap-2 opacity-80">
            <img
              src="/ourworkdetail/home.svg"
              alt="Home icon"
              className="w-4 h-4 inline-block"
            />
            <span>
              Home / Selected Work /
              <span className="font-medium opacity-100">{project.title}</span>
            </span>
          </div>
        </div>

        {/* Content positioned at bottom */}
        <div className="container mt-auto">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-10">
            {project.title}
          </h1>
          <div className="border-t-1 border-dashed border-white/30 my-6 w-1/2"></div>
          {project.projectIdea && (
            <div className="pb-8">
              {/* Add bottom padding if needed */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/ourworkdetail/idea.svg"
                  alt="Lightbulb icon"
                  className="w-8 h-8 inline-block"
                />
                <h2 className="text-2xl m-0 inline-block">
                  It started with an idea
                </h2>
              </div>
              <p className="text-lg md:text-xl max-w-2xl opacity-90">
                {project.projectIdea}
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Content Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 py-20 gap-8 md:gap-16 2xl:px-32 xl:px-24 px-12">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-8">
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Project Title */}
          <h2 className="text-3xl font-medium text-white">{project.title}</h2>

          {/* Dotted Line Divider */}
          <div className="border-t-2 border-dashed border-white/20 my-4"></div>

          {/* Timeline Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">TIMELINE</h3>
            {/* {project.timeline && ( */}
            <p className="opacity-80 text-lg">
              Aug2024 - Dec2025
              {/* {project.timeline.start} — {project.timeline.end} */}
            </p>
            {/* )} */}
          </div>
          <div className="border-t-2 border-dashed border-white/20 my-3"></div>

          {/* Services/Tags Section */}
          {project.tags?.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SERVICES</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/5 text-white text-sm px-4 py-2 rounded-full ">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-12">
          {project.overview && (
            <Section
              title="The end-to-end innovation journey"
              content={project.overview}
            />
          )}

          {project.challenge?.length > 0 && (
            <Section
              title="The challenge"
              content={project.challenge.join('\n\n')}
            />
          )}

          {project.approach?.length > 0 && (
            <Section
              title="Our approach"
              content={project.approach.join('\n\n')}
            />
          )}

          {project.solution?.length > 0 && (
            <Section
              title="The solution"
              content={project.solution.join('\n\n')}
            />
          )}

          {project.finalWords && (
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <p className="text-lg italic">{project.finalWords}</p>
            </div>
          )}
        </div>
      </section>

      <section className="w-full py-20 gap-8 md:gap-16 2xl:px-24 xl:px-24 px-12">
        <p className="text-white/78 font-[Inter] text-xl uppercase">
          Slideshow
        </p>
        <h1 className="font-medium text-3xl pb-9 pt-4">Product Images</h1>
        <ProductCarousel projects={project.projectImages} />
      </section>

      <section className="w-full py-20 gap-8 md:gap-16 2xl:px-24 xl:px-24 px-12">
        <h1 className="font-medium text-3xl py-8">More case studies</h1>
        <CaseStudyCarousel projects={projects} />
      </section>
    </main>
  );
}

// Section component remains the same
function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-3xl font-medium mb-4">{title}</h2>
      <p className="opacity-60 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
