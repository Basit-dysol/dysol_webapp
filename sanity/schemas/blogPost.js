export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Blog Subtitle (Subheading)',
      type: 'string',
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headings',
      title: 'Article Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'isIntroduction',
              title: 'Is This the Introduction Section?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'headingTitle',
              title: 'Heading Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description1',
              title: 'Intro Description 1',
              type: 'text',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'introImage',
              title: 'Intro Image',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'imageSource',
              title: 'Image Source or Caption',
              type: 'string',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'description2',
              title: 'Intro Description 2',
              type: 'text',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'quote',
              title: 'Quote (optional)',
              type: 'text',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'quoteAuthor',
              title: 'Quote Author Name',
              type: 'string',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'authorPosition',
              title: 'Author’s Position/Title',
              type: 'string',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },
            {
              name: 'description3',
              title: 'Intro Description 3',
              type: 'text',
              hidden: ({ parent }) => !parent?.isIntroduction,
            },

            // Default fields for non-introduction sections
            {
              name: 'subHeading',
              title: 'Sub Heading (for other sections)',
              type: 'text',
              hidden: ({ parent }) => parent?.isIntroduction,
            },
            {
              name: 'sectionImage',
              title: 'Image (optional for other sections)',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.isIntroduction,
            },
          ],
        },
      ],
    },
    {
      name: 'summary',
      title: 'Summary (End of Article)',
      type: 'text',
      rows: 5,
    },
  ],
};
