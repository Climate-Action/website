export default {
  title: 'Simple Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Header', value: 'h2' },
        { title: 'Label', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    {
      type: 'embedHTML',
    },
  ],
}
