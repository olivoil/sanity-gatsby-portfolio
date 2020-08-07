export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f2c9a867d007fc93701bbb7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ot2f24hs',
                  apiId: '4ece63d4-8128-4b57-b457-1d47a244cbea'
                },
                {
                  buildHookId: '5f2c9a8660b7127ad8df35d4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8cjn4p84',
                  apiId: '90c57b7c-4b22-460d-be53-36667cf2df8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olivoil/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8cjn4p84.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
