import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Stethoscope, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ArticleCard from "@/app/artikel/_components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

// Dummy author data (ideally this should be fetched from a CMS or a JSON file)
const authors = [
  {
    name: "Faradila Mohamad, S.Kep.,Ns.",
    slug: "faradila-mohamad",
    role: "Perawat Profesional & Penulis Medis",
    bio: "Faradila Mohamad adalah seorang perawat bersertifikasi STR yang berpengalaman dalam perawatan homecare, terapi intravena, dan edukasi kesehatan keluarga. Ia berdedikasi untuk memberikan layanan kesehatan berkualitas tinggi dan berbagi pengetahuannya melalui artikel kesehatan yang terpercaya.",
    image: "/logo-ivcaremedika.png", // Fallback to logo or actual image
    credentials: ["S.Kep.,Ns.", "STR Certified", "Homecare Specialist"],
    socials: ["https://instagram.com/ivcaremedika", "https://wa.me/6281354872379"]
  }
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const author = authors.find(a => a.slug === resolvedParams.slug);

  if (!author) return {};

  return {
    title: `Profil Penulis Medis: ${author.name} | IVCare Medika`,
    description: author.bio,
    alternates: {
      canonical: `https://www.ivcaremedika.com/penulis/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `Profil Penulis Medis: ${author.name} | IVCare Medika`,
      description: author.bio,
      type: "profile",
      url: `https://www.ivcaremedika.com/penulis/${resolvedParams.slug}`,
      images: [{ url: `https://www.ivcaremedika.com${author.image}` }],
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const author = authors.find(a => a.slug === resolvedParams.slug);

  if (!author) {
    notFound();
  }

  // Get articles written by this author
  const allArticles = getAllArticles();
  const authorArticles = allArticles.filter(article => 
    article.meta.author.toLowerCase().includes(author.name.split(',')[0].toLowerCase())
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: `https://www.ivcaremedika.com${author.image}`,
    url: `https://www.ivcaremedika.com/penulis/${author.slug}`,
    worksFor: {
      "@type": "MedicalOrganization",
      name: "IVCare Medika"
    },
    sameAs: author.socials
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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

          <div className="max-w-4xl mx-auto">
            {/* Profile Header Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
              <div className="h-32 bg-primary-500 relative">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]" />
              </div>
              <div className="px-8 pb-8 relative">
                <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 mb-6 gap-6">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden relative flex-shrink-0">
                    <img 
                      src={author.image} 
                      alt={author.name} 
                      className="w-full h-full object-cover p-2"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">{author.name}</h1>
                    <p className="text-primary-600 font-medium">{author.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t border-gray-100 pt-8">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-navy-900 mb-3">Tentang Penulis</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {author.bio}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Kredensial Medis
                      </h3>
                      <ul className="space-y-2">
                        {author.credentials.map((cred, i) => (
                          <li key={i} className="flex items-center text-sm font-medium text-navy-800">
                            <Award className="w-4 h-4 text-primary-500 mr-2" />
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles by Author */}
            <div className="mt-12">
              <div className="flex items-center mb-8 border-l-4 border-primary-500 pl-4">
                <BookOpen className="w-6 h-6 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold text-navy-900">
                  Artikel oleh {author.name.split(',')[0]}
                </h2>
              </div>
              
              {authorArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {authorArticles.map((article) => (
                    <ArticleCard key={article.meta.slug} article={article.meta} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic bg-gray-100 p-6 rounded-xl text-center">
                  Belum ada artikel yang diterbitkan oleh penulis ini.
                </p>
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
