// Ultra-optimized performance utilities

// Cached DOM elements and values
let logoPreloaded = false
let fontsPreconnected = false
let scrollOptimized = false

// Super fast resource preloading
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined' || logoPreloaded) return
  
  // Batch DOM operations for better performance
  const fragment = document.createDocumentFragment()
  
  // Preload logo image
  const logoLink = document.createElement('link')
  logoLink.rel = 'preload'
  logoLink.href = '/shinka-logo.png'
  logoLink.as = 'image'
  logoLink.type = 'image/png'
  fragment.appendChild(logoLink)
  
  document.head.appendChild(fragment)
  logoPreloaded = true
}

// Optimized font preconnection
export const preconnectFonts = () => {
  if (typeof window === 'undefined' || fontsPreconnected) return
  
  const fragment = document.createDocumentFragment()
  
  const gfontsLink = document.createElement('link')
  gfontsLink.rel = 'preconnect'
  gfontsLink.href = 'https://fonts.googleapis.com'
  fragment.appendChild(gfontsLink)
  
  const gstaticLink = document.createElement('link')
  gstaticLink.rel = 'preconnect'
  gstaticLink.href = 'https://fonts.gstatic.com'
  gstaticLink.crossOrigin = 'anonymous'
  fragment.appendChild(gstaticLink)
  
  document.head.appendChild(fragment)
  fontsPreconnected = true
}

// Ultra-optimized scroll behavior
export const optimizeScrollBehavior = () => {
  if (typeof window === 'undefined' || scrollOptimized) return

  // Enable smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Optimize touch interactions immediately
  document.body.style.touchAction = 'manipulation'
  
  // Reduce motion for users who prefer it
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto'
  }
  
  scrollOptimized = true
}

// Lightweight lazy image observer
export const createFastImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
        }
      })
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  )
}

// Ultra-fast debounce (minimal overhead)
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | undefined
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Ultra-fast throttle (minimal overhead)
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Minimal performance tracking (only in development)
export const trackPerformance = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return

  // Only track in development to avoid production overhead
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('navigation') || entry.name.includes('paint')) {
          console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`)
        }
      }
    }).observe({ entryTypes: ['navigation', 'paint'] })
  } catch (e) {
    // Ignore if not supported
  }
}

// Route prefetching (super lightweight)
export const prefetchRoutes = (routes: string[]) => {
  if (typeof window === 'undefined') return
  
  // Use requestIdleCallback for better performance
  const prefetch = () => {
    const fragment = document.createDocumentFragment()
    
    routes.forEach(route => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = route
      fragment.appendChild(link)
    })
    
    document.head.appendChild(fragment)
  }
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetch)
  } else {
    setTimeout(prefetch, 1)
  }
}

// Single initialization function (minimal calls)
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return

  // Batch all optimizations
  const initialize = () => {
    preloadCriticalResources()
    preconnectFonts()
    optimizeScrollBehavior()
    trackPerformance()
  }

  // Use the fastest available method
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true })
  } else {
    initialize()
  }
} 