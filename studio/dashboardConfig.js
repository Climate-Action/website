export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages',
      },
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d723cc78dc5c4cb92ae95f6',
                  title: 'Sanity Studio',
                  name: 'climate-action-studio',
                  apiId: '307d5644-5a6f-4a7a-9ad3-e2b4a61c54de',
                },
                {
                  buildHookId: '5d723cc78dc5c4ce96ae95f4',
                  title: 'Landing pages Website',
                  name: 'climate-action',
                  apiId: 'c179ad39-647c-4172-9604-d696bb0ed21e',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nixolas1/climate-action',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://climate-action.netlify.com', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' },
    },
  ],
}
