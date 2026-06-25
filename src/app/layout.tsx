import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import { inter, plusJakartaSans } from "@/lib/font";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.ivcaremedika.com"),
  title: {
    default: "IVCareMedika | Premium Homecare & Vitamin Infusion Jakarta",
    template: "%s | IVCareMedika",
  },
  description:
    "Layanan homecare medis premium bertaraf internasional. Menghadirkan dokter, perawat STR berlisensi, dan infus vitamin (IV Therapy) langsung ke rumah Anda dengan jaminan kesterilan mutlak 100%.",
  keywords: [
    "homecare indonesia",
    "homecare jakarta",
    "infus vitamin ke rumah",
    "iv therapy jakarta",
    "vitamin drip",
    "dokter ke rumah",
    "perawat ke rumah",
    "medical check up rumah",
    "layanan kesehatan homecare",
    "wellness service indonesia",
    "perawat stroke",
    "perawat geriatri lansia",
    "ivcare medika",
  ],
  alternates: {
    canonical: "https://www.ivcaremedika.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.ivcaremedika.com",
    siteName: "IVCareMedika",
    title: "IVCareMedika | Premium Homecare & Vitamin Infusion Jakarta",
    description:
      "Layanan homecare medis premium bertaraf internasional. Menghadirkan dokter, perawat STR berlisensi, dan infus vitamin (IV Therapy) langsung ke rumah Anda.",
    images: [
      {
        url: "/logo-ivcaremedika.png",
        width: 1200,
        height: 630,
        alt: "IVCareMedika Premium Homecare & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVCareMedika | Premium Homecare & Vitamin Infusion Jakarta",
    description:
      "Layanan homecare medis premium bertaraf internasional langsung di rumah Anda. Menghadirkan perawat & dokter profesional.",
    images: ["/logo-ivcaremedika.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth h-full w-full overflow-x-clip">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} min-h-full w-full flex flex-col text-slate-600 bg-white selection:bg-sky-100 selection:text-sky-900 antialiased overflow-x-clip`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
