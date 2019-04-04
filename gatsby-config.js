module.exports = {
  siteMetadata: {
    title: `Kevin Brock - Web Developer`,
    description: `React, Gatsby, Nodejs and other web development topics with Kevin Brock`,
    author: `@kbrock84`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/static-data`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Brock - Web Developer`,
        short_name: `Kevin Brock`,
        start_url: `/`,
        background_color: `#ff0077`,
        theme_color: `#ff0077`,
        display: `minimal-ui`,
        icon: `src/images/sticky-bot_dark.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://a265c61cda3b4cf19f1926b4d52f900b@sentry.io/1424442",
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },

    `gatsby-plugin-typescript`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
