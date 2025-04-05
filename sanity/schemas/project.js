export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectIdea',
      title: 'Project Idea (Sub Heading)',
      type: 'string',
    },
    {
      name: 'projectImages',
      title: 'Project Images (Carousel)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: (Rule) =>
        Rule.min(1).warning('At least one image is required'),
    },
    {
      name: 'tags',
      title: 'SEO Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'landingImageIndex',
      title: 'Landing Page Background (Index of Image)',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'overview',
      title: 'End to End Innovation Journey',
      type: 'text',
      rows: 6,
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'approach',
      title: 'Our Approach',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'solution',
      title: 'The Solution',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'finalWords',
      title: 'Final Words',
      type: 'text',
      rows: 3,
    },
  ],
};
