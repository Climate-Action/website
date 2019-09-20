// import {FiUser} from "react-icons/fi";

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
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
      name: 'linkedinId',
      type: 'string',
      title: 'LinkedIn Username',
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
