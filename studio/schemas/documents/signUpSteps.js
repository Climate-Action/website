import Icon from 'react-icons/lib/md/format-list-numbered'

export default {
  name: 'signUpSteps',
  title: 'SignUp Steps',
  icon: Icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Just used to identify it in the studio',
      type: 'string',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'step' }],
    },
  ],
}
