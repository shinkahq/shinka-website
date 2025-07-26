'use client'

import dynamic from 'next/dynamic'

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-foreground" />
  </div>
)

// Analytics components (client-side only)
export const DynamicAnalytics = dynamic(
  () => import('@/lib/analytics').then(mod => ({ default: mod.AnalyticsProvider })),
  {
    ssr: false,
    loading: () => null,
  }
)

export const DynamicGoogleAnalytics = dynamic(
  () => import('@/lib/analytics').then(mod => ({ default: mod.GoogleAnalytics })),
  {
    ssr: false,
    loading: () => null,
  }
)

// Performance monitoring (client-side only)
export const DynamicPerformanceMonitor = dynamic(
  () => import('@/lib/performance').then(mod => ({
    default: () => {
      if (typeof window !== 'undefined') {
        mod.initializePerformanceOptimizations()
      }
      return null
    }
  })),
  {
    ssr: false,
    loading: () => null,
  }
) 