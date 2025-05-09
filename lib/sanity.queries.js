// lib/sanity.queries.js
export const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  projectImages,
  projectIdea,
  overview,
  tags,
  challenge,
  approach,
  solution,
  finalWords,
  timeline,
  landingImageIndex
}`;
