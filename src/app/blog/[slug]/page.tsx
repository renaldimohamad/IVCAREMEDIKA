import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ChevronLeft, Calendar, User, Clock } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js 16 Dynamic Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} — Edukasi Kesehatan`,
    description: `Dapatkan informasi edukasi lengkap mengenai ${title} dari tim medis ahli IVCareMedika. Tips hidup sehat, layanan homecare medis, & terapi infus vitamin Jakarta.`,
    alternates: {
      canonical: `https://www.ivcaremedika.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <main className="flex-grow pt-32 pb-20">
        <Section id="blog-post" background="white">
          <Container className="max-w-3xl">
            {/* Back Button Link */}
            <div className="mb-8">
              <Link
                href="/#home"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-primary-500 transition-colors"
              >
                <ChevronLeft size={14} />
                Kembali ke Beranda
              </Link>
            </div>

            {/* Metainfo Header */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-navy-600/40 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                20 Mei 2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              <span className="flex items-center gap-1.5">
                <User size={14} />
                Tim Medis IVCareMedika
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                5 Menit Baca
              </span>
            </div>

            {/* Heading 1 (Primary Article Tag) */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-700 leading-tight mb-8 tracking-tight text-left">
              {title}
            </h1>

            {/* Rich Content Core */}
            <div className="prose prose-slate max-w-none text-sm md:text-base text-navy-600/70 leading-relaxed font-bold space-y-6 text-left">
              <p>
                Kesehatan dan imunitas optimal kini menjadi prioritas utama bagi masyarakat urban modern. Di tengah padatnya aktivitas sehari-hari di Jakarta, mengantre di klinik atau rumah sakit seringkali menjadi kendala waktu yang sangat merepotkan.
              </p>
              <p>
                Untuk itu, layanan <Link href="/#services" className="text-primary-600 hover:underline">homecare medis</Link> dan <Link href="/#services" className="text-primary-600 hover:underline">infus vitamin ke rumah (IV Therapy / Vitamin Drip)</Link> menjadi alternatif premium yang semakin diminati. Tidak hanya praktis karena dilakukan langsung di kediaman Anda, layanan ini juga menawarkan tingkat kesterilan mutlak yang setara dengan standar rumah sakit internasional.
              </p>

              <div className="bg-primary-50/50 border border-primary-100/35 rounded-3xl p-6 md:p-8 my-10">
                <h3 className="text-navy-700 font-extrabold text-lg mb-3">Mengapa Memilih Layanan Homecare IVCareMedika?</h3>
                <ul className="list-disc pl-5 space-y-2 text-navy-600/80">
                  <li><strong>Praktis & Nyaman:</strong> Tanpa antre di rumah sakit atau menerobos kemacetan lalu lintas.</li>
                  <li><strong>Supervisi Medis STR:</strong> Seluruh tindakan ditangani oleh perawat profesional berlisensi STR aktif.</li>
                  <li><strong>Kesterilan SOP Mutlak:</strong> Perlengkapan baru, steril, sekali pakai (disposable) yang dibuka langsung di hadapan Anda.</li>
                </ul>
              </div>

              <p>
                Jika Anda atau keluarga membutuhkan layanan medis intensif seperti perawatan geriatri (lansia), pendampingan pasien stroke, penanganan luka pasca operasi, atau infus multivitamin booster imunitas tubuh, tim medis IVCareMedika siap membantu kapan pun dibutuhkan.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 my-12"></div>

            {/* Internal CTA Card */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-[2.5rem] p-8 md:p-10 text-white text-center shadow-luxury">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-3 tracking-tight">
                Butuh Layanan Homecare Medis Sekarang?
              </h3>
              <p className="text-xs text-white/80 font-bold max-w-lg mx-auto mb-6 leading-relaxed">
                Dokter dan perawat berlisensi STR kami siap meluncur ke rumah Anda di wilayah Jakarta dengan peralatan steril lengkap berstandar klinis.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  href="https://wa.me/6281354872379"
                  variant="white"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Hubungi WhatsApp Medis
                </Button>
                <Link
                  href="/#services"
                  className="px-6 py-3.5 rounded-full border border-white/35 text-xs font-heading font-extrabold text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Lihat Semua Layanan
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
