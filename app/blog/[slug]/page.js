import { client } from '@/lib/sanity.client';
import { notFound } from 'next/navigation';

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
        sectionImage
      },
      summary
    }
  `;
  const blog = await client.fetch(query, { slug });

  if (!blog) return notFound();
  return blog;
}

export default async function BlogDetail({ params }) {
  const blog = await getBlogData(params.slug);

  const getImageUrl = (imgRef) => {
    if (!imgRef || !imgRef.asset?._ref) return '';
    const refParts = imgRef.asset._ref.replace('image-', '').split('-');
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${refParts[0]}-${refParts[1]}.${refParts[2]}`;
  };

  const mainImageUrl = getImageUrl(blog.mainImage);

  return (
    <main className="text-white px-6 md:px-24 py-12">
      {/* Header */}
      <section
        className="rounded-xl mb-12 bg-cover bg-center text-left p-12"
        style={{
          backgroundImage: `url(${mainImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h1 className="text-4xl md:text-6xl font-bold">{blog.title}</h1>
        {blog.subtitle && (
          <p className="mt-4 text-xl text-white/80">{blog.subtitle}</p>
        )}
      </section>

      {/* Table of Contents */}
      <aside className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">In This Article</h2>
        <ul className="list-disc list-inside text-white/70">
          {blog.headings?.map((section, i) => (
            <div key={i} id={`section-${i}`} className="space-y-6">
              <h2 className="text-3xl font-bold">{section.headingTitle}</h2>

              {/* If it's the special Introduction layout */}
              {section.isIntroduction ?
                <>
                  {/* Description 1 */}
                  {section.description1 && (
                    <p className="text-white/80">{section.description1}</p>
                  )}

                  {/* Image with source */}
                  {section.introImage && (
                    <div>
                      <img
                        src={getImageUrl(section.introImage)}
                        alt="Intro section"
                        className="rounded-xl w-full max-h-[400px] object-cover"
                      />
                      {section.imageSource && (
                        <p className="text-sm text-white/50 mt-2">
                          © {section.imageSource}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Description 2 */}
                  {section.description2 && (
                    <p className="text-white/80">{section.description2}</p>
                  )}

                  {/* Quote block */}
                  {section.quote && (
                    <div className="bg-white/5 border-l-4 border-blue-400 p-4 italic rounded-lg text-lg">
                      “{section.quote}”
                      {(section.quoteAuthor || section.authorPosition) && (
                        <div className="mt-3 text-white/60 text-sm not-italic">
                          — {section.quoteAuthor}
                          {section.authorPosition &&
                            `, ${section.authorPosition}`}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description 3 */}
                  {section.description3 && (
                    <p className="text-white/80">{section.description3}</p>
                  )}
                </>
              : <>
                  {/* Non-introduction section */}
                  {section.subHeading && (
                    <p className="text-white/70">{section.subHeading}</p>
                  )}
                  {section.sectionImage && (
                    <img
                      src={getImageUrl(section.sectionImage)}
                      alt={section.headingTitle}
                      className="rounded-xl w-full max-h-[400px] object-cover"
                    />
                  )}
                </>
              }
            </div>
          ))}
        </ul>
      </aside>

      {/* Sections */}
      <article className="space-y-16">
        {blog.headings?.map((section, i) => (
          <div key={i} id={`section-${i}`} className="space-y-4">
            <h2 className="text-3xl font-bold">{section.headingTitle}</h2>
            {section.subHeading && (
              <p className="text-lg opacity-80">{section.subHeading}</p>
            )}
            {section.sectionImage && (
              <img
                src={getImageUrl(section.sectionImage)}
                alt={section.headingTitle}
                className="rounded-lg w-full max-h-[400px] object-cover"
              />
            )}
            <div className="border-b border-white/10 my-4" />
          </div>
        ))}
      </article>

      {/* Summary */}
      {blog.summary && (
        <section className="mt-16 p-6 border border-white/10 rounded-xl bg-white/5">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-white/70">{blog.summary}</p>
        </section>
      )}
    </main>
  );
}
