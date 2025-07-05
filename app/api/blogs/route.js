import { client } from '@/lib/sanity.client';

export async function GET() {
  const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    slug,
    "mainImage": mainImage.asset->_ref
  }`;

  const blogs = await client.fetch(query);
  return Response.json(blogs);
}
