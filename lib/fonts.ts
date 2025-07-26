import { Inter } from 'next/font/google'

// Ultra-optimized font configuration
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Critical for performance
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ],
  preload: true,
  adjustFontFallback: true,
  // Performance optimizations
  weight: ['400', '500', '600'], // Only load weights we actually use
  style: ['normal'], // Only normal style
})

export const fontVariables = inter.variable

// Font preload helper for critical performance
export const preloadFont = () => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = '/fonts/inter-latin-400-normal.woff2' // Adjust path as needed
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  }
} 