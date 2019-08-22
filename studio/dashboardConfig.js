export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d5df20164c0b88419de357d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ujz6sjsg',
                  apiId: '64354929-d7b6-4801-aed2-57193c934477'
                },
                {
                  buildHookId: '5d5df201affbcd371c2e7882',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-emwrukga',
                  apiId: 'a46263c8-8ff2-42ae-9226-f8caaf0a78f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrrfly/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-emwrukga.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
