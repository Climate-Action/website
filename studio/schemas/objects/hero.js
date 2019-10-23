export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'headerText',
      title: 'Heading',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
    },
    {
      name: 'swap',
      type: 'boolean',
      title: 'Swap image position',
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title
          ? title
            .filter(child => child.style.startsWith('h'))
            .map(block => block.children.map(span => span.text))
            .join(' ')
          : 'No title',
        subtitle: 'Hero section',
        media,
      }
    },
  },
}
