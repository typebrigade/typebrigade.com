module.exports = {
  siteMetadata: {
    title: `Type Brigade`,
    description: `Vancouver’s typography speaker series and conference.`,
    author: `@typebrigade`,
    url: `https://typebrigade.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
            },
          },
        ],
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
  ],
}
