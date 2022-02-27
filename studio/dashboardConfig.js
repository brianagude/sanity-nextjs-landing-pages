export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '621ac138aa679a9685740f9a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-is4rxpth',
                  apiId: 'a667200a-75ea-4a70-8f93-c4669f721050'
                },
                {
                  buildHookId: '621ac138ae1b82a27139a9f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pnpfo1gk',
                  apiId: '706bee93-ff33-4f0f-a0a2-ae967b7c027d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brianagude/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pnpfo1gk.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
