export default {
    type: 'object',
    name: 'callToAction',
    title: 'Call To Action',
    fields: [
      {
        name: 'modulePadding',
        type: 'string',
        default: '1rem 0 3rem',
        title: 'Padding',
      },
      {
        name: 'cta',
        type: 'cta',
        title: 'Call to action',
      },
    ],
    preview: {
      select: {
        heading: 'cta.title',
      },
      prepare({ heading }) {
        return {
          title: `${heading}`,
          subtitle: 'Call To Action',
        }
      },
    },
  }
  