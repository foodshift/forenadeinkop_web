module.exports = {
  siteMetadata: {
    title: "Förenade Inköp",
    description:
      "Ett informationsprojekt inom ramen för Jordbruksverkets satsning på korta livsmedelskedjor. Projektet har som övergripande mål att bidra till att fler inköpsföreningar startas samt att befintliga inköpsföreningar inleder djupare samarbeten.",
    author: "@food_shift",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#19a974",
        theme_color: "#19a974",
        display: "minimal-ui",
        icon: "src/images/FI_Logotyp_RGB-03.svg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://foodshift.se/t/290/posts.json",
        rootKey: "blog",
        schemas: {
          blog: `
                  post_stream: post_stream
              `,
          post_stream: `
                  posts: [post]
              `,
          post: `
                  id: Int
                  cooked: String
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-discourse-topic-list",
      options: {
        url: "https://foodshift.se",
        endPoint: "tags/c/events/13/forenade-inkop/l/agenda.json",
        rootKey: "calendar",
      },
    },
    {
      resolve: "gatsby-source-discourse-topic-list",
      options: {
        url: "https://foodshift.se",
        endPoint: "c/forenade-inkop/kooperativ/35.json",
        rootKey: "kooperativ",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
