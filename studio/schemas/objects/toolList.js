export default {
  name: 'toolList',
  title: 'Tool section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Just used to identify it in the studio',
      type: 'string',
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'reference', to: [{type:'tool'}]}],
    },
    /* {
      name: 'type',
      title: 'Filter on single type',
      description: 'Empty for all types',
      type: 'reference',
      to: [ { type: 'toolType' } ],
    },
    {
      name: 'sort',
      title: 'Sort by',
      description: 'NOTE: not implemented yet',
      type: 'sortBy',
    }, */
  ],
}
