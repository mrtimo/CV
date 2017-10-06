module.exports = {
  siteMetadata: {
    title: 'Reece Lucas | CV',
    description: 'Reece Lucas CV – Front End Developer based in London',
    href: 'https://cv.reecelucas.com/',
    imageUrl: '',
    imageAlt: '',
    themeColour: '#426591',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Reece Lucas CV',
        short_name: 'R Lucas CV',
        start_url: '/',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          }
        ],
        background_color: '#426591',
        theme_color: '#426591',
        display: 'standalone'
      },
    },
    'gatsby-plugin-offline'
  ],
  pathPrefix: '/'
};
