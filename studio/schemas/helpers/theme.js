export default {
    name: 'theme',
    title: 'Theme',
    type: 'object',
    fields: [
      {
        name: 'style',
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
    ],
  }
  