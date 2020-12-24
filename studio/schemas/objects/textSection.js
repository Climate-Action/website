import Icon from 'react-icons/lib/md/format-shapes'

export default {
  type: 'object',
  name: 'textSection',
  title: 'Text-block list with image',
  icon: Icon,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'headingStyle',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [{
          value: 'default',
          title: 'Default'
        }, {
          value: 'serif',
          title: 'Serif'
        }],
        layout: 'radio',
      },
    },
    {
      name: 'modulePadding',
      type: 'string',
      default: '4rem 0',
      title: 'Padding',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'List item',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'portableText',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'figure',
            },
          ],
        },
      ],
    },
    {
      name: 'theme',
      type: 'theme',
      title: 'Theme',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      }
    },
  },
}
