import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.madodesign.co";
const title = "Mado Design — Design for SMEs, without the full-time hire";
const description =
  "Mado Design offers Web & UI Design, Digital Marketing Design Support, and APAC Design Localisation to businesses — a dedicated design partner without the commitment of a full-time hire.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Mado Design",
    images: [{ url: "/assets/mado-logo.png" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/assets/mado-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
