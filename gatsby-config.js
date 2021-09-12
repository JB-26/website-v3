module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Joshua Blewitt - IT Professional",
    description: `A portfolio website showing the work and information about Joshua Blewitt - an IT Professional`,
    author: `Joshua Blewitt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
