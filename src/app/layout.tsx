import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Peak — Futuristic Tech Platform for the Next Era",
  description: "Peak delivers a premium, Apple-inspired experience—sleek, fast, and privacy-forward. Explore features, plans, and how to get started in seconds.",
  keywords: ["peak", "futuristic landing page", "apple-inspired design", "premium tech", "minimal UI", "single-page site", "how to buy peak", "tokenomics", "roadmap", "faq"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peak — Futuristic Tech Platform for the Next Era",
    description: "Peak delivers a premium, Apple-inspired experience—sleek, fast, and privacy-forward. Explore features, plans, and how to get started in seconds.",
    type: "website",
    url: "/",
    siteName: "Peak",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "Peak — Futuristic Tech Platform"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak — Futuristic Tech Platform for the Next Era",
    description: "Peak delivers a premium, Apple-inspired experience—sleek, fast, and privacy-forward. Explore features, plans, and how to get started in seconds.",
    images: ["/images/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: [{ url: "/favicon.ico" }],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
