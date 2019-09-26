export default {
  name: 'header',
  title: 'Header section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'simplePortableText',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [ { type: 'internalLink' } ],
    },
  ],
}
