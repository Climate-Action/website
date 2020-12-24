export default {
    name: 'modulePadding',
    title: 'Module Padding',
    type: 'object',
    fields: [
      {
        name: 'verticalPadding',
        type: 'string',
        validation: Rule => Rule.required(),
        options: {
          list: [{
            value: 'none',
            title: 'None (0rem)'
          }, {
            value: 'tight',
            title: 'Tight (0.5rem)'
          }, {
            value: 'base',
            title: 'Base (1rem)'
          }, {
            value: 'nice',
            title: 'Nice (2rem)'
          }, {
            value: 'relaxed',
            title: 'Relaxed (4rem)'
          }, {
            value: 'zen',
            title: 'Zen (6rem)'
          }],
          layout: 'radio',
        },
      },
      {
        name: 'horizontalPadding',
        type: 'string',
        validation: Rule => Rule.required(),
        options: {
          list: [{
            value: 'none',
            title: 'None (0rem)'
          }, {
            value: 'tight',
            title: 'Tight (0.5rem)'
          }, {
            value: 'base',
            title: 'Base (1rem)'
          }, {
            value: 'nice',
            title: 'Nice (2rem)'
          }, {
            value: 'relaxed',
            title: 'Relaxed (4rem)'
          }, {
            value: 'zen',
            title: 'Zen (6rem)'
          }],
          layout: 'radio',
        },
      },
    ],
  }
  