export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'file',
      type: 'file',
      title: 'Downloadable File',
      fields: [
        {
          name: 'filename',
          type: 'string',
          title: 'Filename',
        },
      ],
    },
  ],
}
