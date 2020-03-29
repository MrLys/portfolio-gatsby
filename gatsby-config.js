/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = {
    title: `I'm Thomas`
};
module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Tangerine`
          }
        ],
      },
    }
  ]
}
