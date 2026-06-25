import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Clock, Calendar, User } from "lucide-react";

import Card from "@/components/ui/Card";
import { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({
  article,
}: {
  article: ArticleMeta;
}) {
  return (
    <Link href={`/artikel/${article.slug}`} className="group block h-full">
      <Card
        variant="simple"
        className="h-full overflow-hidden p-0 rounded-xl border border-primary-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-full flex-col p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-primary-600">
            {article.title}
          </h3>

          {/* Description */}
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-600">
            {article.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-5">
            <div className="border-t border-gray-100 pt-4">
              {/* Author */}
              <div className="mb-3">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-400">
                  Ditulis oleh
                </p>

                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 flex-shrink-0 text-primary-500" />

                  <span className="text-[10px] font-medium text-gray-700">
                    {article.author}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4 text-primary-500" />

                  <time className="text-[10px] font-medium text-gray-700" dateTime={article.publishedAt}>
                    {format(
                      new Date(article.publishedAt),
                      "dd MMM yyyy",
                      {
                        locale: id,
                      }
                    )}
                  </time>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4 text-primary-500" />

                  <span className="text-[10px] font-medium text-gray-700">{article.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}