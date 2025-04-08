// lib/sanity.client.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '4s37y94g',
  dataset: 'production',
  apiVersion: '2025-04-03', // Match your Studio version
  perspective: 'drafts',
  useCdn: false,
});
