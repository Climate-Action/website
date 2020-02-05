import Icon from 'react-icons/lib/md/face'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: Icon,
  // icon: FiUser,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      type: 'reference',
      to: [{ type: 'personType' }],
      title: 'Type of Climate Action Taker',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'countryPicker',
    },
    {
      name: 'title',
      title: 'Job title',
      type: 'string',
    },
    {
      name: 'ambassador',
      title: 'Ambassador',
      type: 'boolean',
    },
    {
      name: 'anonymous',
      title: 'Is Anonymous',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Links to profile or company page',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
