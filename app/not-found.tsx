import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="mb-6">
          <h1 className="text-6xl font-medium text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-medium text-foreground mb-2">
            Page not found
          </h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="bg-foreground hover:bg-foreground/90 text-background">
            <Link href="/">
              Go back home
            </Link>
          </Button>
          
          <div>
            <Button asChild variant="outline">
              <Link href="/#contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 