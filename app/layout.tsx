import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://bloom-beauty-demo-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bloom Beauty Studio — demo web | Samuel Zelíska",
    template: "%s | Demo web Samuela Zelísku",
  },
  description:
    "Samostatne vytvorený ukážkový koncept webovej stránky pre beauty štúdio. Nejde o skutočnú prevádzku ani ponuku služieb.",
  applicationName: "Bloom Beauty Studio — demo projekt",
  category: "Portfolio demo",
  authors: [{ name: "Samuel Zelíska", url: "https://www.samuelzeliska.sk" }],
  openGraph: {
    title: "Bloom Beauty Studio — ukážkový webový koncept",
    description:
      "Demo projekt vytvorený na prezentáciu webového dizajnu a vývoja. Nejde o skutočné beauty štúdio.",
    url: siteUrl,
    siteName: "Portfolio demo Samuela Zelísku",
    images: [{
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ukážkový koncept webu beauty štúdia",
    }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Beauty Studio — ukážkový webový koncept",
    description: "Demo projekt Samuela Zelísku. Nejde o skutočné beauty štúdio.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
