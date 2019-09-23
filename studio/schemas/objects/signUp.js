export default {
  name: 'signUp',
  title: 'Sign Up section',
  type: 'object',
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
      type: 'reference',
      to: [ { type: 'signUpSteps' } ],
    },
  ],
}
