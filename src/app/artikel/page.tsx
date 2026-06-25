import React from "react";
import { Metadata } from "next";
import { getAllArticles, getFeaturedArticles } from "@/lib/articles";
import ArticleSearchList from "./_components/ArticleSearchList";
import ArticleCard from "./_components/ArticleCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CustomIconWhatsapp } from "@/components/ui/CustomIcon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Artikel Kesehatan & Wellness | IVCare Medika",
  description:
    "Baca artikel terbaru seputar kesehatan, wellness, dan panduan medis dari para ahli IVCare Medika. Dapatkan tips hidup sehat setiap hari.",
  openGraph: {
    title: "Artikel Kesehatan & Wellness | IVCare Medika",
    description: "Kumpulan artikel edukatif seputar kesehatan, wellness, dan perawatan di rumah.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ivcaremedika.com/artikel",
  },
};

export default function ArtikelPage() {
  const articles = getAllArticles();
  const featuredArticles = getFeaturedArticles();

  // Ambil list kategori unik
  const categories = Array.from(new Set(articles.map((a) => a.meta.category)));

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      <Container>
        {/* Hero Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-left md:text-center text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Artikel <span className="text-primary-600">Kesehatan</span>
          </h1>
          <p className="text-left md:text-center text-md md:text-lg text-gray-600">
            Temukan informasi kesehatan, panduan perawatan, tips homecare, dan edukasi medis yang ditulis oleh tenaga kesehatan profesional IVCare Medika.
          </p>
        </div>

        {/* Featured Article (Top Priority) */}
        {/* {featuredArticles.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 border-l-4 border-primary-500 pl-4">
              Artikel Pilihan
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <ArticleCard key={article.meta.slug} article={article.meta} />
              ))}
            </div>
          </div>
        )} */}

        {/* Search & Article Grid (Client Component) */}
        <div className="mb-20">
          <h2 className="text-xl md:text-xl font-bold text-navy-900 mb-8 border-l-4 border-primary-500 pl-4">
            Eksplorasi Topik
          </h2>
          <ArticleSearchList articles={articles.map((a) => a.meta)} categories={categories} />
        </div>

        {/* CTA Section */}
        <Section id="cta-article-list" className="bg-navy-900 rounded-xl p-10 text-center text-white mt-16 shadow-xs relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Butuh Konsultasi Langsung?</h2>
            <p className="text-left md:text-center text-sm md:text-base text-gray-600 mb-8">
              Tim medis kami siap mendengarkan keluhan kesehatan Anda dan memberikan solusi perawatan terbaik langsung di rumah.
            </p>
            {/* <Button
              href="https://wa.me/6281354872379"
              variant="primary"
              size="lg"
            >

              <div className="flex gap-0 items-center">

                <p className="text-left">
                  Hubungi via WhatsApp
                </p>

                <CustomIconWhatsapp size={18} />
              </div>
            </Button> */}

            <div className="hidden md:block">
              <Button
                href={siteConfig.whatsapp.url}
                variant="primary"
                size="lg"
                icon={<CustomIconWhatsapp size={18} />}>
                Booking via WhatsApp
              </Button>
            </div>

            <div className="block md:hidden">
              <Button
                href={siteConfig.whatsapp.url}
                variant="primary"
                size="sm"
                icon={<CustomIconWhatsapp size={18} />}>
                Booking via WhatsApp
              </Button>
            </div>

          </div>
        </Section>
      </Container>
    </main>
  );
}
