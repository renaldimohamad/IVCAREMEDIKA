"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ArticleMeta } from "@/lib/articles";
import ArticleCard from "./ArticleCard";
import Button from "@/components/ui/Button";

interface Props {
  articles: ArticleMeta[];
  categories: string[];
}

export default function ArticleSearchList({ articles, categories }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Kategori");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory =
        selectedCategory === "Semua Kategori" || article.category === selectedCategory;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex-1 w-full relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-navy-900 bg-white shadow-sm"
            placeholder="Cari artikel, topik, atau tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
          {["Semua Kategori", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                ? "bg-primary-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">Artikel Tidak Ditemukan</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Maaf, kami tidak dapat menemukan artikel yang sesuai dengan pencarian "{searchQuery}" pada kategori {selectedCategory}.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Semua Kategori");
            }}
          >
            Reset Pencarian
          </Button>
        </div>
      )}
    </div>
  );
}
