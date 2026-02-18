import { client } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/Blog/ShareButtons";
import LatestPostsCarousel from "@/components/Blog/LatestPostsCarousel";
import Breadcrumbs from '@/components/Shared/Breadcrumbs';


export async function generateStaticParams() {
  const blogs = await client.fetch(`*[_type == "blogPost"]{ slug }`);
  return blogs.map((blog) => ({ slug: blog.slug.current }));
}

export const revalidate = 3600;

async function getBlogData(slug) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title,
      subtitle,
      slug,
      mainImage,
      headings[]{
        headingTitle,
        subHeading,
        sectionImage,
        isIntroduction,
        description1,
        description2,
        description3,
        introImage,
        imageSource,
        quote,
        quoteAuthor,
        authorPosition,
        authorImage
      },
      summary
    }
  `;
  const blog = await client.fetch(query, { slug });

  if (!blog) return notFound();
  return blog;
}

async function getRelatedBlogs(currentSlug) {
  const query = `
    *[_type == "blogPost" && slug.current != $currentSlug] | order(_createdAt desc)[0...3]{
      _id,
      title,
      subtitle,
      slug,
      mainImage
    }
  `;
  return await client.fetch(query, { currentSlug });
}

export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const blog = await getBlogData(resolvedParams.slug);
  const relatedBlogs = await getRelatedBlogs(resolvedParams.slug);

  const getImageUrl = (imgRef) => {
    if (!imgRef || !imgRef.asset?._ref) return "";
    const refParts = imgRef.asset._ref.replace("image-", "").split("-");
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${refParts[0]}-${refParts[1]}.${refParts[2]}`;
  };

  const mainImageUrl = getImageUrl(blog.mainImage);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="mt-10 py-8 md:py-16 mt-4 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start md:items-center">
          {/* Image */}
          <div className="relative h-[280px] md:h-[520px] overflow-hidden bg-neutral-900 shadow-xl  md:rounded-none">
            <img src={mainImageUrl} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Title */}
          <div className="space-y-4 px-6 md:px-0 md:space-y-6 w-full max-w-7xl md:col-span-2">
            <Breadcrumbs label="Blog" />
            <h1 className="text-[28px] md:mr-5 md:text-[52px] lg:text-[60px] font-semibold leading-[1.1] md:leading-[1.05] tracking-tight">
              {blog.title}
            </h1>

            {blog.subtitle && (
              <p className="text-[14px] md:text-[18px] text-white/60 leading-[1.6] md:leading-[1.7] mr-5">
                {blog.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="px-6 md:px-24  py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-8 md:gap-20 2xl:gap-72  mb-12">
          {/* SIDEBAR - Hidden on mobile */}
          <aside className="hidden md:block sticky top-24 h-fit">
            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/40 mb-4">IN THIS ARTICLE</h3>

              <nav className="space-y-3">
                {blog.headings?.map((section, i) => (
                  <a key={i} href={`#section-${i}`} className="block text-[14px] text-white/60 hover:text-white transition">
                    {section.headingTitle}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              {/* Dotted Divider */}
              <div className="border-t border-dashed border-white/20 my-5"></div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/40 mb-4">SHARE ARTICLE</h3>

              <ShareButtons />
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="space-y-10  md:space-y-16 w-full max-w-7xl">
            {blog.headings?.map((section, i) => (
              <div key={i} id={`section-${i}`} className="space-y-4 md:space-y-8 scroll-mt-24">
                <h2 className="text-[24px] md:text-[36px] font-semibold tracking-tight leading-tight">
                  {section.headingTitle}
                </h2>

                {section.isIntroduction ? (
                  <>
                    {section.description1 && (
                      <p className="text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] md:leading-[1.85]">
                        {section.description1}
                      </p>
                    )}

                    {section.introImage && (
                      <div className="space-y-2">
                        <img 
                          src={getImageUrl(section.introImage)} 
                          className="rounded-[12px] md:rounded-[18px] w-full object-cover" 
                          alt="Section illustration"
                        />
                        {section.imageSource && (
                          <p className="text-[10px] md:text-[11px] text-white/35 tracking-wide">
                            © {section.imageSource}
                          </p>
                        )}
                      </div>
                    )}

                    {section.description2 && (
                      <p className="text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] md:leading-[1.85]">
                        {section.description2}
                      </p>
                    )}

                    {section.quote && (
                      <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] p-5 md:p-8 rounded-[14px] md:rounded-[18px] backdrop-blur">
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                          {section.authorImage && (
                            <img 
                              src={getImageUrl(section.authorImage)} 
                              className="w-10 h-10 md:w-12 md:h-12 rounded-full" 
                              alt="Author"
                            />
                          )}

                          <div className="space-y-2 md:space-y-3">
                            <p className="text-[16px] md:text-[20px] italic text-white/90 leading-[1.5] md:leading-[1.6]">
                              "{section.quote}"
                            </p>

                            <div className="text-[12px] md:text-[13px] text-white/55">
                              <div className="text-white font-medium">{section.quoteAuthor}</div>
                              {section.authorPosition && <div>{section.authorPosition}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {section.description3 && (
                      <p className="text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] md:leading-[1.85]">
                        {section.description3}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {section.subHeading && (
                      <p className="text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] md:leading-[1.85]">
                        {section.subHeading}
                      </p>
                    )}
                    {section.sectionImage && (
                      <img 
                        src={getImageUrl(section.sectionImage)} 
                        className="rounded-[12px] md:rounded-[18px] w-full object-cover" 
                        alt={section.headingTitle}
                      />
                    )}
                  </>
                )}
              </div>
            ))}

            {/* SUMMARY */}
            {blog.summary && (
              <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] rounded-[16px] md:rounded-[20px] p-6 md:p-10 mt-12 md:mt-20">
                <h2 className="text-[22px] md:text-[26px] font-semibold mb-3 md:mb-4">Summary</h2>

                <p className="text-[14px] md:text-[15.5px] text-white/65 leading-[1.7] md:leading-[1.85]">
                  {blog.summary}
                </p>
              </div>
            )}

            {/* Mobile Share Buttons - Only visible on mobile */}
            <div className="md:hidden pt-8 border-t border-white/10">
              <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/40 mb-4">SHARE ARTICLE</h3>
              <ShareButtons />
            </div>
          </article>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="px-6 md:px-24 py-12 md:py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-8 md:mb-10">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight mb-1 md:mb-2">
              Dysol Blog
            </h2>

            <p className="text-white/55 text-[14px] md:text-[15px]">
              Welcome to Dysol — strategies, insights, and news.
            </p>
          </div>

          <a 
            href="/blog" 
            className="bg-white text-black px-6 md:px-7 py-2.5 md:py-3 rounded-full font-medium hover:bg-white/90 transition shadow-sm text-[14px] md:text-[15px] text-center md:inline-block w-fit"
          >
            Latest articles →
          </a>
        </div>

        <LatestPostsCarousel blogs={relatedBlogs} />
      </section>
    </main>
  );
}
