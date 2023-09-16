/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.acidwall.icu',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: true
  }