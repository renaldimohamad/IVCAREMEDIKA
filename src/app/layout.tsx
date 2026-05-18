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
  title: "IVCareMedika | Premium Homecare & Vitamin Infusion",
  description: "Layanan homecare premium bertaraf internasional yang menghadirkan tenaga medis profesional langsung ke rumah Anda. Mengutamakan keamanan, kesterilan, dan kenyamanan pasien.",
  keywords: "homecare, vitamin infusion, infus vitamin, medical checkup, wellness, jakarta homecare, ivcare medika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth h-full">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans min-h-full flex flex-col text-slate-600 bg-white selection:bg-sky-100 selection:text-sky-900 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
