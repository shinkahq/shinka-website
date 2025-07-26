'use client'

import { AnalyticsProvider } from '@/app/lib/analytics'
import { Suspense } from 'react'

interface LayoutProviderProps {
  children: React.ReactNode
}

// Fast loading component for suspense
function FastLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-foreground"></div>
    </div>
  )
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <>
      <Suspense fallback={<FastLoading />}>
        <main className="min-h-screen antialiased">
          {children}
        </main>
      </Suspense>
      <AnalyticsProvider />
    </>
  )
} 