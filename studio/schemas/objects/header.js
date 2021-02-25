export default {
  name: 'header',
  title: 'Header section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'modulePadding',
      type: 'string',
      default: '1rem 0 3rem',
      title: 'Padding',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'simplePortableText',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      name: 'isLabelHeader',
      title: 'Label-style header',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      heading: 'title',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Header section',
      }
    },
  },
}
