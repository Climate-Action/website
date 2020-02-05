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
      name: 'white',
      type: 'boolean',
      title: 'White',
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
