import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface ArticleMeta {
  title: string;
  description: string;
  slug: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured: boolean;
  thumbnail: string;
  tags: string[];
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

// Fungsi untuk membaca daftar semua file di direktori (termasuk sub-direktori jika ada)
function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

export function getAllArticles(): Article[] {
  const files = getMDXFiles(articlesDirectory);

  const articles: Article[] = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    // Hitung reading time jika tidak ada di frontmatter
    const calculatedReadingTime = readingTime(content).text;

    return {
      meta: {
        title: data.title,
        description: data.description,
        slug: data.slug || slug,
        category: data.category,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        readingTime: data.readingTime || calculatedReadingTime,
        featured: data.featured === true,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
      },
      content,
    };
  });

  // Urutkan artikel dari yang terbaru
  return articles.sort((a, b) => {
    return new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime();
  });
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const calculatedReadingTime = readingTime(content).text;

    return {
      meta: {
        title: data.title,
        description: data.description,
        slug: data.slug || slug,
        category: data.category,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        readingTime: data.readingTime || calculatedReadingTime,
        featured: data.featured === true,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
      },
      content,
    };
  } catch (error) {
    console.error(`Error getting article with slug ${slug}:`, error);
    return null;
  }
}

export function getFeaturedArticles(): Article[] {
  const articles = getAllArticles();
  return articles.filter((article) => article.meta.featured);
}

export function getRelatedArticles(category: string, currentSlug: string, limit = 3): Article[] {
  const articles = getAllArticles();
  return articles
    .filter((article) => article.meta.category === category && article.meta.slug !== currentSlug)
    .slice(0, limit);
}
