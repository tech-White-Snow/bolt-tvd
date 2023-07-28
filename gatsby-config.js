require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Bolt.tv',
    description: 'BOLT is an award-winning, full service commercial production company',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "xu8n095wfb6m",
        accessToken: "1maNM74gRYOAdPIzFpG6xpLysH1OKDsEDIJe4AzMoBo",
        host: process.env.CONTENTFUL_HOST,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
  ],
};
