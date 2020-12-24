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
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [{
          value: 'white',
          title: 'White'
        }, {
          value: 'dark',
          title: 'Theme Dark'
        }, {
          value: 'light',
          title: 'Theme Light'
        }],
        layout: 'radio',
      },
    },
    {
      name: 'modulePadding',
      type: 'string',
      default: '1rem 0 3rem',
      title: 'Padding',
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
