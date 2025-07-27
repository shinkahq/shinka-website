import { Inter } from 'next/font/google'

// Ultra-optimized font configuration similar to Perplexity's style
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ],
  preload: true,
  adjustFontFallback: true,
  // Extended weights for better typography
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
})

export const fontVariables = inter.variable

// Font preload helper for critical performance
export const preloadFonts = () => {
  if (typeof document !== 'undefined') {
    const weights = ['400', '500', '600', '700']
    weights.forEach(weight => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = `/fonts/inter-latin-${weight}-normal.woff2`
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }
} 