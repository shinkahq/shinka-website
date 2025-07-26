'use client'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

export function AnalyticsProvider() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export function GoogleAnalytics() {
  // Only render in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  if (!GA_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
} 