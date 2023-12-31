// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap([
    {
      loc: 'https://www.acidwall.icu',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.acidwall.icu/sitemap',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ])
}