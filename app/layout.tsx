import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import StructuredData from "./structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'https://shinkahq.com'),
  title: {
    default: "Shinka - Enterprise AI Solutions",
    template: "%s | Shinka",
  },
  description: "Intelligent AI products for modern enterprises. We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate.",
  keywords: ["AI", "Artificial Intelligence", "Enterprise", "Automation", "Workflows", "Agents", "Shinka", "Business Solutions", "Machine Learning", "AI Agents", "Smart Workflows"],
  authors: [{ name: "Shinka" }],
  creator: "Shinka",
  publisher: "Shinka",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Shinka - Enterprise AI Solutions",
    description: "Intelligent AI products for modern enterprises. We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate.",
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://shinkahq.com',
    siteName: "Shinka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/shinka-logo.png',
        width: 800,
        height: 600,
        alt: 'Shinka - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinka - Enterprise AI Solutions",
    description: "Intelligent AI products for modern enterprises. We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate.",
    creator: "@shinkahq",
    images: ['/shinka-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Shinka",
  referrer: "origin-when-cross-origin",
  category: "technology",
  other: {
    "mobile-agent": "format=html5; url=" + (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://shinkahq.com'),
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "yandex-verification": "YOUR_YANDEX_VERIFICATION_CODE",
    "baidu-site-verification": "YOUR_BAIDU_VERIFICATION_CODE",
    "sogou_site_verification": "YOUR_SOGOU_VERIFICATION_CODE",
    "360-site-verification": "YOUR_360_VERIFICATION_CODE",
    "shenma-site-verification": "YOUR_SHENMA_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black bg-white dark:text-white dark:bg-black ${inter.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Cache-Control" content="max-age=86400" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="geo.region" content="US, EU, CN" />
        <meta name="geo.placename" content="Global" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
