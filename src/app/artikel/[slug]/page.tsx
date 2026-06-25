import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ArticleCard from "../_components/ArticleCard";
import { MDXComponents } from "../_components/MDXComponents";
import ShareButtons from "../_components/ShareButtons";
import TableOfContents from "../_components/TableOfContents";
import ReadingStats from "@/components/ReadingStats";
import { inter } from "@/lib/font";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.meta.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) return {};

  const siteUrl = "https://www.ivcaremedika.com";

  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: {
      canonical: `${siteUrl}/artikel/${resolvedParams.slug}`,
    },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      url: `${siteUrl}/artikel/${resolvedParams.slug}`,
      images: [{ url: `${siteUrl}${article.meta.thumbnail}` }],
      publishedTime: article.meta.publishedAt,
      modifiedTime: article.meta.updatedAt || article.meta.publishedAt,
      authors: [article.meta.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
      images: [`${siteUrl}${article.meta.thumbnail}`],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.meta.category, resolvedParams.slug);

  const siteUrl = "https://www.ivcaremedika.com";
  const authorSlug = article.meta.author.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/artikel/${resolvedParams.slug}`,
    },
    headline: article.meta.title,
    description: article.meta.description,
    image: [`${siteUrl}${article.meta.thumbnail}`],
    articleSection: article.meta.category,
    keywords: article.meta.tags?.join(", "),
    inLanguage: "id-ID",
    author: {
      "@type": "Person",
      name: article.meta.author,
      url: `${siteUrl}/penulis/${authorSlug}`,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "IVCare Medika",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-ivcaremedika.png`,
      },
    },
    datePublished: article.meta.publishedAt,
    dateModified: article.meta.updatedAt || article.meta.publishedAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50 pt-28 pb-20">
        <Container>
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 mt-10">
            <Link
              href="/artikel"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              <p className="text-xs md:text-base text-left">
                Kembali ke Artikel
              </p>
            </Link>
          </div>

          <article className="max-w-6xl mx-auto">
            {/* Header / Meta */}
            <header className="mt-20 mb-10 text-center max-w-3xl mx-auto">
              <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-1.5 rounded-full mb-6">
                {article.meta.category}
              </span>
              <h1 className="text-lg md:text-3xl text-navy-900 mb-6 leading-tight">
                {article.meta.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm font-medium">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary-500" />
                  {article.meta.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                  <time dateTime={article.meta.publishedAt}>
                    {format(new Date(article.meta.publishedAt), "dd MMMM yyyy", {
                      locale: id,
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary-500" />
                  {article.meta.readingTime}
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="relative aspect-video max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src={article.meta.thumbnail}
                alt={article.meta.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col xl:flex-row gap-12 relative">
              {/* Left Sidebar (Share) */}
              <aside className="xl:w-auto flex-shrink-0 order-2 xl:order-1 hidden md:block">
                <div className="flex flex-col gap-8 sticky top-28">
                  {/* <ShareButtons title={article.meta.title} /> */}

                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Informasi Artikel
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-primary-500" />
                        {article.meta.author}
                      </div>

                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <time dateTime={article.meta.publishedAt}>
                          {format(new Date(article.meta.publishedAt), "dd MMMM yyyy", {
                            locale: id,
                          })}
                        </time>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary-500" />
                        {article.meta.readingTime}
                      </div>
                    </div>
                  </div>

                  {/* 🔥 NEW: Reading Progress */}
                  <ReadingStats
                    readingTime={parseInt(article.meta.readingTime)}
                  />
                </div>
              </aside>

              {/* MDX Content */}
              <div className="flex-1 max-w-3xl min-w-0 order-1 xl:order-2">
                <div className={`${inter.className} prose prose-lg max-w-none`}>
                  <MDXRemote source={article.content} components={MDXComponents} />
                </div>

                {/* Mobile Share (Bottom) */}
                <div className="mt-12 pt-8 border-t border-gray-200 md:hidden">
                  <ShareButtons title={article.meta.title} />
                </div>

              </div>

              {/* Right Sidebar (TOC) */}
              <aside className="xl:w-72 flex-shrink-0 order-3 hidden xl:block">
                <div className="sticky top-28 space-y-6">

                  <TableOfContents />

                  <ShareButtons title={article.meta.title} />


                  {/* Informasi Artikel */}
                  {/* <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Informasi Artikel
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-primary-500" />
                        {article.meta.author}
                      </div>

                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <time dateTime={article.meta.publishedAt}>
                          {format(new Date(article.meta.publishedAt), "dd MMMM yyyy", {
                            locale: id,
                          })}
                        </time>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-primary-500" />
                        {article.meta.readingTime}
                      </div>
                    </div>
                  </div> */}

                </div>
              </aside>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-24 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-navy-900 mb-8 border-l-4 border-primary-500 pl-4">
                Artikel Terkait
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.meta.slug} article={rel.meta} />
                ))}
              </div>
            </div>
          )}

          {/* CTA Bottom */}
          {/* <Section id="cta-article-detail" className="bg-primary-50 rounded-3xl p-10 mt-20 border border-primary-100 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-sm">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-xl">
              <h4 className="text-2xl font-bold text-navy-900 mb-3">
                Punya keluhan serupa atau butuh pemeriksaan medis?
              </h4>
              <p className="text-gray-600">
                Konsultasikan secara gratis dengan tim medis kami via WhatsApp. Kami siap melakukan kunjungan ke rumah Anda.
              </p>
            </div>
            <Button
              href="https://wa.me/6281354872379"
              variant="primary"
              size="lg"
              className="whitespace-nowrap flex-shrink-0"
            >
              Hubungi WhatsApp
            </Button>
          </Section> */}
        </Container >
      </main >
    </>
  );
}
