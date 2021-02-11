import Icon from 'react-icons/lib/md/local-library'

export default {
  name: 'company',
  title: 'Company',
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
      to: [{ type: 'companyType' }],
      title: 'Type of Company',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'countryPicker',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
