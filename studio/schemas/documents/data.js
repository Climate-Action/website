import Icon from 'react-icons/lib/md/local-library'

export default {
  name: 'data',
  icon: Icon,
  title: 'Data Source',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'source',
      title: 'Source / Author',
      type: 'string',
    },
    {
      name: 'url',
      type: 'link',
      title: 'URL to source',
    },
    {
      name: 'type',
      type: 'reference',
      to: [{ type: 'dataType' }],
      title: 'Grouped under',
    },
  ],
}
