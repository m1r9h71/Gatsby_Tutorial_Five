module.exports = {
    siteMetadata: {
        title: `Gatsby Tutorial 4: Querying for data`,
    },
    plugins: [
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};