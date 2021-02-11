export default {
  name: 'toolList',
  title: 'Tool section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Just used to identify it in the studio',
      type: 'string',
    },
  ],
  preview: {
    select: {
      heading: 'name',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Tool section',
      }
    },
  },
}
