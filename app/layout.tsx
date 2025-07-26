import type { Metadata, Viewport } from "next"
import StructuredData from "@/lib/metadata"
import { SEO_CONFIG, getBaseUrl } from "@/lib/seo"
import { fontVariables } from "@/lib/fonts"
import { DynamicGoogleAnalytics } from "@/lib/dynamic-imports"
import LayoutProvider from "@/components/layout/layout-provider"
import "@/lib/styles.css"

// Export viewport configuration using Next.js 15 API
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5f3' },
    { media: '(prefers-color-scheme: dark)', color: '#2c2622' }
  ],
  colorScheme: 'light dark',
  viewportFit: 'cover',
}

// Optimized metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  ...SEO_CONFIG,
  manifest: '/manifest.json',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    url: getBaseUrl(),
    siteName: "Shinka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/shinka-logo.png',
        width: 1200,
        height: 630,
        alt: 'Shinka - Enterprise AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.BING_VERIFICATION || '',
      "baidu-site-verification": process.env.BAIDU_VERIFICATION || '',
    }
  },
  other: {
    "mobile-agent": `format=html5; url=${getBaseUrl()}`,
    "applicable-device": "pc,mobile",
    "MobileOptimized": "width",
    "HandheldFriendly": "true",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${fontVariables} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" href="/shinka-logo.png" as="image" type="image/png" />
        <meta name="theme-color" content="#f7f5f3" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body 
        className="font-sans antialiased min-h-screen bg-background text-foreground"
        suppressHydrationWarning
      >
        <LayoutProvider>
          {children}
        </LayoutProvider>
        <DynamicGoogleAnalytics />
      </body>
    </html>
  )
}
