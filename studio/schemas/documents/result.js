import Icon from 'react-icons/lib/md/check'

export default {
  type: 'document',
  name: 'result',
  icon: Icon,
  title: 'Result',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'intro',
      type: 'simplePortableText',
      title: 'Intro',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'url',
      type: 'link',
      title: 'URL to tool',
      description: 'If the tool is not a downloadable file, link to it instead',
    },
    {
      name: 'authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
      title: 'Authors',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `${heading}`,
        subtitle: 'Image section',
        media,
      }
    },
  },
}
