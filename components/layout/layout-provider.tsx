'use client'

import { Suspense } from 'react'
import { DynamicAnalytics, DynamicPerformanceMonitor } from '@/lib/dynamic-imports'

interface LayoutProviderProps {
  children: React.ReactNode
}

// Ultra-fast loading component
function FastLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-foreground" />
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
      
      {/* Load analytics and performance monitoring asynchronously */}
      <DynamicAnalytics />
      <DynamicPerformanceMonitor />
    </>
  )
} 