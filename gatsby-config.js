module.exports = {
  siteMetadata: {
    title: 'Tom Rodrigues',
    name: 'Tom Rodrigues',
    siteUrl: 'https://tommrodrigues.github.io',
    description: 'Tom Rodrigues’s blog',
    hero: {
      heading: 'Perspectives on science, technology, and design.',
      maxWidth: 652
    },
    social: [
      {
        name: 'github',
        url: 'https://github.com/Tommrodrigues'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/tommrodrigues/'
      },
      {
        name: 'buymeacoffee',
        url: 'https://www.buymeacoffee.com/tommrodrigues'
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: false,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Novela by Narative',
        short_name: 'Novela',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-163903660-1'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
      }
    }
  ]
}
