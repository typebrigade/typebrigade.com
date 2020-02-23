module.exports = {
  siteMetadata: {
    title: `Type Brigade`,
    description: `Vancouver’s typography meetup`,
    author: `@typebrigade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
