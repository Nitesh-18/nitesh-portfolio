/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nitesh-ranjankar.me/",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 1.0,
  sitemapSize: 7000,
  // Exclude private/admin routes
  exclude: ["/server-sitemap.xml", "/admin/*"],
  alternateRefs: [
    {
      href: "https://www.nitesh-ranjankar.me/",
      hreflang: "en",
    },
    {
      href: "https://www.nitesh-ranjankar.me/",
      hreflang: "x-default",
    },
  ],
};
