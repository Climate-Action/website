export default {
  name: 'largeTextSection',
  title: 'Large Text Section',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'simplePortableText',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title:
          title && title[0]
            ? title[0].children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
            : 'No title',
        subtitle: 'Large text section',
      }
    },
  },
}
