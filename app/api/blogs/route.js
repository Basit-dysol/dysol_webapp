import { client } from '@/lib/sanity.client';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  try {
    console.log('🔁 Starting fetch for blogs from Sanity');

    const query = `
      *[_type == "blogPost"] {
        _id,
        title,
        subtitle,
        slug,
        mainImage,
        tags
      }
    `;

    const blogs = await client.fetch(query);

    console.log('✅ Blogs received from Sanity:', blogs.length);

    return Response.json(blogs, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
        'CDN-Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('❌ Error fetching blogs:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
