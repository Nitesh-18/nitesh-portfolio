/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nitesh-portfolio-three.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
  alternateRefs: [
    {
      href: "https://nitesh-portfolio-three.vercel.app",
      hreflang: "en",
    },
    {
      href: "https://nitesh-portfolio-three.vercel.app",
      hreflang: "x-default",
    },
  ],
};
