'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-foreground mb-2">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">
            We're sorry, but something unexpected happened. Please try again.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={reset}
            className="bg-foreground hover:bg-foreground/90 text-background"
          >
            Try again
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            Go home
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground mb-2">
              Error details (dev only)
            </summary>
            <pre className="text-xs bg-muted p-4 rounded overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  <br />
                  <br />
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
} 