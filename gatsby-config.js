module.exports = {
  siteMetadata: {
    title: `Type Brigade`,
    description: `Vancouver’s typography meetup`,
    author: `@typebrigade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#default-layouts
        defaultLayouts: {
          default: require.resolve("./src/components/TemplateBlogPost.jsx"),
        },
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [],
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
