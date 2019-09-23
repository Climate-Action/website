export default {
  name: 'dataList',
  title: 'Data section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Just used to identify it in the studio',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Filter on single type',
      description: 'Empty for all types',
      type: 'reference',
      to: [ { type: 'dataType' } ],
    },
    {
      name: 'sort',
      title: 'Sort by',
      description: 'NOTE: not implemented yet',
      type: 'sortBy',
    },
  ],
}
