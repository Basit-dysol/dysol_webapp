// lib/sanity.client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-04-03', // Match your Studio version
  useCdn: true, // Enable CDN for faster public reads
  perspective: 'published', // Only fetch public content
});
