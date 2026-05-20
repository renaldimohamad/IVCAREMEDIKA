import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.ivcaremedika.com",
  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "daily", // lebih agresif untuk SEO baru
  priority: 0.9,

  exclude: ["/admin", "/dashboard"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
export default config;
