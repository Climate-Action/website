export default {
  title: 'Header Text',
  name: 'headerText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Big header', value: 'h1' },
        { title: 'Medium header', value: 'h2' },
        { title: 'Small header', value: 'h3' },
        { title: 'Label', value: 'h4' },
        { title: 'Ingress', value: 'h5' },
      ],
      lists: [],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
      },
    },
  ],
}
