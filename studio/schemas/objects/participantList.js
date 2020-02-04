export default {
  name: 'participantList',
  title: 'Participant section',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Just used to identify it in the studio',
      type: 'string',
    },
    {
      name: 'sort',
      title: 'Sort by',
      description: 'NOTE: not implemented yet',
      type: 'sortBy',
    },
  ],
}
