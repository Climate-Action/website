export default {
    name: 'modulePlacement',
    title: 'Module Placement',
    type: 'object',
    fields: [
      {
        name: 'value',
        type: 'string',
        validation: Rule => Rule.required(),
        options: {
          list: [{
            value: 'normal',
            title: 'Normal'
          }, {
            value: 'start',
            title: 'Start'
          }, {
            value: 'center',
            title: 'Center'
          }, {
            value: 'end',
            title: 'End'
          }],
          layout: 'radio',
        },
      },
    ],
  }
  