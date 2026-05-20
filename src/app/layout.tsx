import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ivcaremedika.com"),

  title: "IVCareMedika | Premium Homecare & Vitamin Infusion",

  description:
    "Layanan homecare premium bertaraf internasional yang menghadirkan tenaga medis profesional langsung ke rumah Anda. Mengutamakan keamanan, kesterilan, dan kenyamanan pasien.",

  keywords: [
    "homecare indonesia",
    "homecare jakarta",
    "infus vitamin ke rumah",
    "iv therapy jakarta",
    "dokter ke rumah",
    "perawat ke rumah",
    "medical check up rumah",
  ],

  alternates: {
    canonical: "https://www.ivcaremedika.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.ivcaremedika.com",
    locale: "id_ID",
    title: "IVCareMedika | Homecare & Infus Vitamin Profesional",
    description:
      "Layanan homecare premium dengan tenaga medis profesional langsung ke rumah Anda.",
    siteName: "IVCareMedika",

    images: [
      {
        url: "/nurse-elderly-patient.webp",
        width: 1200,
        height: 630,
        alt: "Homecare nurse from IVCareMedika providing care to patient at home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IVCareMedika | Homecare & Infus Vitamin",
    description:
      "Layanan homecare profesional: infus vitamin, dokter ke rumah, perawat homecare.",
    images: ["/nurse-elderly-patient.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth h-full">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans min-h-full flex flex-col text-slate-600 bg-white selection:bg-sky-100 selection:text-sky-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
