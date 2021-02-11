export default {
    type: 'object',
    name: 'imageTextCta',
    title: 'Image Text CTA',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'figure',
        title: 'Image',
      },
      {
        name: 'text',
        type: 'simplePortableText',
        title: 'Text',
      },
      {
        name: 'callToAction',
        type: 'callToAction',
        title: 'Call to action',
      },
    ],
    preview: {
      select: {
        heading: 'name',
      },
      prepare({ heading }) {
        return {
          title: `${heading}`,
          subtitle: 'Image Text CTA',
        }
      },
    },
  }
  