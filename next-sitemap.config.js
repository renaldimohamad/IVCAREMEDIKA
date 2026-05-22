/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ivcaremedika.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/static/", "/api/"],
      },
    ],
    additionalSitemaps: [
      "https://www.ivcaremedika.com/sitemap.xml",
    ],
  },
  exclude: ["/api/*"],
};
