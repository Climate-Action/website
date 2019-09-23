export default {
  name: 'sortBy',
  title: 'Sort By',
  type: 'string',
  options: {
    list: [
      { title: 'Popularity', value: 'popularity' },
      { title: 'Newest first', value: 'newest' },
      { title: 'Oldest first', value: 'oldest' },
      { title: 'Type', value: 'type' },
      { title: 'Name', value: 'name' },
    ],
  },
}
