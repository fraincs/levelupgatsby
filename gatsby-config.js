module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A new blog',
  },
  pathPrefix: '/levelupgatsby',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'image',
            path: `${__dirname}/src/images/`
        }
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
          excerpt_separator: `<!-- end -->`
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
    ],
}
