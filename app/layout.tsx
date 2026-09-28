import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { IG } from "./site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const title = "FFA — sistem za telesne transformacije | Lični i online trener, Novi Beograd";
const description =
  "FFA je sistem za telesne transformacije: trening, ishrana i praćenje napretka pod jednim planom. Lični trening u Endorfin Trening Centru na Novom Beogradu ili online saradnja.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title,
  description,
  keywords: [
    "lični trener Novi Beograd",
    "personalni trener Beograd",
    "online trener",
    "transformacija tela",
    "mršavljenje",
    "Endorfin Trening Centar",
    "FFA",
  ],
  openGraph: {
    title: "FFA — Telo se menja sistemom",
    description,
    locale: "sr_RS",
    type: "website",
    siteName: "FFA",
  },
  twitter: { card: "summary_large_image", title: "FFA — Telo se menja sistemom", description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "FFA",
  slogan: "be wise and stay strong",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Džona Kenedija 31g",
    addressLocality: "Novi Beograd",
    addressCountry: "RS",
  },
  areaServed: ["Beograd", "Online"],
  sameAs: [IG],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" suppressHydrationWarning className={`${anton.variable} ${inter.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
