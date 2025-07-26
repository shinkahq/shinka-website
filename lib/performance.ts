// Performance utilities and configurations

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return

  // Preload logo image
  const logoLink = document.createElement('link')
  logoLink.rel = 'preload'
  logoLink.href = '/shinka-logo.png'
  logoLink.as = 'image'
  logoLink.type = 'image/png'
  document.head.appendChild(logoLink)

  // Preload critical fonts
  const fontLink = document.createElement('link')
  fontLink.rel = 'preconnect'
  fontLink.href = 'https://fonts.gstatic.com'
  fontLink.crossOrigin = 'anonymous'
  document.head.appendChild(fontLink)
}

// Optimize scroll behavior
export const optimizeScrollBehavior = () => {
  if (typeof window === 'undefined') return

  // Enable smooth scrolling for hash links
  document.documentElement.style.scrollBehavior = 'smooth'

  // Optimize scroll performance
  let scrollTimeout: NodeJS.Timeout
  const optimizedScrollHandler = () => {
    document.body.style.pointerEvents = 'none'
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      document.body.style.pointerEvents = 'auto'
    }, 150)
  }

  window.addEventListener('scroll', optimizedScrollHandler, { passive: true })
  
  return () => {
    window.removeEventListener('scroll', optimizedScrollHandler)
    clearTimeout(scrollTimeout)
  }
}

// Lazy load non-critical images
export const createLazyImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          imageObserver.unobserve(img)
        }
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  })

  return imageObserver
}

// Debounce utility for better performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for better performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Performance metrics tracking
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return

  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${entry.name}: ${entry.value}ms`)
      }
    }
  })

  try {
    observer.observe({ entryTypes: ['measure', 'navigation'] })
  } catch (e) {
    // Fallback for older browsers
    console.warn('Performance observer not supported')
  }

  return observer
}

// Mobile-specific optimizations
export const optimizeForMobile = () => {
  if (typeof window === 'undefined') return

  // Prevent zoom on input focus for iOS
  const viewport = document.querySelector('meta[name=viewport]')
  if (viewport) {
    viewport.setAttribute('content', 
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    )
  }

  // Optimize touch interactions
  document.body.style.touchAction = 'manipulation'

  // Reduce motion for users who prefer it
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto'
  }
}

// Prefetch routes for better navigation
export const prefetchRoutes = (routes: string[]) => {
  if (typeof window === 'undefined') return

  routes.forEach(route => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = route
    document.head.appendChild(link)
  })
}

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return

  // Run optimizations after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources()
      optimizeScrollBehavior()
      optimizeForMobile()
      trackPerformanceMetrics()
      
      // Prefetch critical routes
      prefetchRoutes(['/founder', '/'])
    })
  } else {
    preloadCriticalResources()
    optimizeScrollBehavior()
    optimizeForMobile()
    trackPerformanceMetrics()
    prefetchRoutes(['/founder', '/'])
  }
} 