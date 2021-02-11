export default {
    name: 'moduleWidth',
    title: 'Module Width',
    type: 'object',
    fields: [
      {
        name: 'max',
        type: 'string',
        validation: Rule => Rule.required(),
        options: {
          list: [{
            value: 'x-small',
            title: 'Smallest (22rem)'
          }, {
            value: 'small',
            title: 'Small (40rem)'
          }, {
            value: 'medium',
            title: 'Medium (60rem)'
          }, {
            value: 'large',
            title: 'Large (80rem)'
          }, {
            value: 'x-large',
            title: 'Largest (100rem)'
          }],
          layout: 'radio',
        },
      },
    ],
  }
  