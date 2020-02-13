module.exports = {
  siteMetadata: {
    siteUrl: `https://nbaugh1.github.io`,
    description: `Personal website and blog for Nick Baughman, Software Developer`,
    title: `NPB`,
    author: `Nick Baughman`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/nbaugh1`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/nbaugh1`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/nickbaughman/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
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
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
