export default {
    name: 'companyList',
    title: 'Company section',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        description: 'Just used to identify it in the studio',
        type: 'string',
      }
    ],
    preview: {
      select: {
        heading: 'name',
      },
      prepare({ heading }) {
        return {
          title: `${heading}`,
          subtitle: 'Company section',
        }
      },
    },
  }
  