export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'theme',
      type: 'theme',
      title: 'Theme',
    },
    {
      name: 'modulePadding',
      type: 'modulePadding',
      title: 'Module Padding',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'imageOnRight',
      type: 'boolean',
      title: 'Image on the right',
      default: false,
    },
    {
      name: 'smallImage',
      type: 'boolean',
      title: 'Small image',
      default: false,
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `${heading}`,
        subtitle: 'Image section',
        media,
      }
    },
  },
}
