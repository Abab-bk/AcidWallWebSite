module.exports = {
    siteUrl: 'https://www.acidwall.icu',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.acidwall.icu/server-sitemap-index.xml', // <==== Add here
      ],
    },
  }