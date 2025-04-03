import { client } from '@/lib/sanity.client';

export const dynamic = 'force-static'; // Opt into static behavior
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const posts = await client.fetch(
    `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "imageUrl": mainImage.asset->url
    }[0...12] // Limit to 12 posts
  `,
    {},
    {
      cache: 'force-cache', // Leverage Sanity's CDN
      next: { tags: ['posts'] }, // For on-demand revalidation
    }
  );

  return Response.json(posts, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
      'CDN-Cache-Control': 'public, max-age=86400', // CDNs cache longer
    },
  });
}
