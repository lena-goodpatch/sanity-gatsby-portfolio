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
                  buildHookId: '5f2d55a736a7b074d9147fda',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rhdb1azr',
                  apiId: '1df1d06c-61e2-44a1-8263-7f185ce1096c'
                },
                {
                  buildHookId: '5f2d55a70ee93268399299ed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-obcfiqno',
                  apiId: 'df4d7e45-a1d8-4a98-a75e-5a95bb9c5bd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lena-goodpatch/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-obcfiqno.netlify.app',
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
