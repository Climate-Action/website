export default {
    type: 'object',
    name: 'splitView',
    title: 'Split View',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
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
        name: 'itc',
        type: 'array',
        title: 'Image, Text, CTA',
        of: [
          {
            title: 'Image Text CTA',
            type: 'imageTextCta',
          },
        ],
      },
    ],
    preview: {
      select: {
        heading: 'name',
      },
      prepare({ heading }) {
        return {
          title: `${heading}`,
          subtitle: 'Split View',
        }
      },
    },
  }
  