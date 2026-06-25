"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Cari semua heading h2 dan h3 di dalam container artikel
    const elements = Array.from(document.querySelectorAll("article h2, article h3"));
    
    const items: TOCItem[] = elements.map((elem) => {
      // Jika heading belum punya ID, buat ID otomatis dari teksnya
      if (!elem.id) {
        elem.id = elem.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || "heading";
      }
      return {
        id: elem.id,
        title: elem.textContent || "",
        level: Number(elem.tagName.substring(1)), // 2 untuk h2, 3 untuk h3
      };
    });

    setHeadings(items);

    // Setup IntersectionObserver untuk update active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-28 hidden xl:block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
        Daftar Isi
      </h4>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm py-1.5 transition-colors ${
              heading.level === 3 ? "ml-4" : ""
            } ${
              activeId === heading.id
                ? "text-primary-600 font-semibold"
                : "text-gray-600 hover:text-primary-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
