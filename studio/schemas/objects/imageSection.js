export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'theme',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [{
          value: 'white',
          title: 'White'
        }, {
          value: 'dark',
          title: 'Theme Dark'
        }, {
          value: 'light',
          title: 'Theme Light'
        }],
        layout: 'radio',
      },
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'imageOnRight',
      type: 'boolean',
      title: 'Image on the right',
      default: false,
    },
    {
      name: 'smallImage',
      type: 'boolean',
      title: 'Small image',
      default: false,
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
    {
      name: 'ctaSize',
      type: 'string',
      validation: Rule => Rule.required(),
      default: 'small',
      options: {
        list: [{
          value: 'small',
          title: 'Small'
        }, {
          value: 'large',
          title: 'Large'
        }],
        layout: 'radio',
      },
    },
    {
      name: 'ctaPosition',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [{
          value: 'default',
          title: 'Default'
        }, {
          value: 'left',
          title: 'Left'
        }, {
          value: 'center',
          title: 'Center'
        }, {
          value: 'right',
          title: 'Right'
        }],
        layout: 'radio',
      },
    }
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
