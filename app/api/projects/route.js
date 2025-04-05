import { client } from '@/lib/sanity.client';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  try {
    console.log('🔁 Starting fetch from Sanity');

    const query = `
      *[_type == "project"] {
        _id,
        title,
        slug,
        mainImage,
        overview,
        tags,
        projectIdea
      }
    `;

    const projects = await client.fetch(query);

    console.log('✅ Projects received from Sanity:', projects);

    return Response.json(projects, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
        'CDN-Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('❌ Error fetching projects:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
