import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/nav-ux.css";
import { defaultMetadata } from "@/lib/seo";
import { JsonLd, organizationJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RightRoad from "@/components/RightRoad";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={serviceJsonLd} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="pt-[72px] min-h-screen relative">
          {children}
        </main>
        <Footer />
        <RightRoad />
      </body>
    </html>
  );
}
