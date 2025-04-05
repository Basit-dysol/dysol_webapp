import { client } from '@/lib/sanity.client';

export async function GET() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt
    }
  `);

  return new Response(JSON.stringify(posts), {
    headers: {
      'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
      'CDN-Cache-Control': 'public, max-age=3600',
    },
  });
}
