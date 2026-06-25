import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.ivcaremedika.com",
  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "weekly", // Artikel biasanya weekly, home daily (jika diubah)
  priority: 0.8,

  transform: async (config, path) => {
    let priority = config.priority;
    // Beri prioritas lebih tinggi pada artikel untuk indexing
    if (path.includes('/artikel/')) {
      priority = 0.9;
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

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
