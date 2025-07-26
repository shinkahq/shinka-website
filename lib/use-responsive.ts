'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

// Tailwind CSS default breakpoints
const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

type Breakpoint = keyof typeof BREAKPOINTS
type DeviceType = 'mobile' | 'tablet' | 'desktop'
type Orientation = 'portrait' | 'landscape'

interface WindowDimensions {
  width: number
  height: number
}

interface ResponsiveState {
  // Current window dimensions
  windowDimensions: WindowDimensions
  
  // Current breakpoint
  currentBreakpoint: Breakpoint
  
  // Device type detection
  deviceType: DeviceType
  
  // Orientation
  orientation: Orientation
  
  // Breakpoint checks (memoized)
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2Xl: boolean
  
  // Device type checks (memoized)
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  
  // Orientation checks (memoized)
  isPortrait: boolean
  isLandscape: boolean
  
  // Utility functions (stable references)
  isAbove: (breakpoint: Breakpoint) => boolean
  isBelow: (breakpoint: Breakpoint) => boolean
  isBetween: (min: Breakpoint, max: Breakpoint) => boolean
  
  // Touch device detection
  isTouchDevice: boolean
  
  // High DPI detection
  isHighDPI: boolean
  
  // Hydration state
  isHydrated: boolean
}

// Memoized helper functions for better performance
const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width >= BREAKPOINTS['2xl']) return '2xl'
  if (width >= BREAKPOINTS.xl) return 'xl'
  if (width >= BREAKPOINTS.lg) return 'lg'
  if (width >= BREAKPOINTS.md) return 'md'
  if (width >= BREAKPOINTS.sm) return 'sm'
  return 'xs'
}

const getDeviceType = (width: number): DeviceType => {
  // Check user agent for mobile devices (cached for performance)
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isMobileUA = /mobile|android|ios|iphone|ipad|tablet|blackberry|windows phone/i.test(userAgent)
    
    // If it's a mobile user agent and small screen, it's mobile
    if (isMobileUA && width < BREAKPOINTS.md) return 'mobile'
    
    // If it's a mobile user agent but larger screen (like iPad), consider it tablet
    if (isMobileUA && width < BREAKPOINTS.lg) return 'tablet'
  }
  
  // Fallback to width-based detection
  if (width < BREAKPOINTS.md) return 'mobile'
  if (width < BREAKPOINTS.lg) return 'tablet'
  return 'desktop'
}

const getOrientation = (width: number, height: number): Orientation => {
  return width > height ? 'landscape' : 'portrait'
}

// Default/SSR-safe dimensions (assume desktop first for hydration consistency)
const DEFAULT_DIMENSIONS = {
  width: 1024, // Default to lg breakpoint for SSR
  height: 768,
}

const useResponsive = (): ResponsiveState => {
  // Start with SSR-safe state (desktop-first)
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(DEFAULT_DIMENSIONS)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isHighDPI, setIsHighDPI] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Optimized resize handler with throttling
  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return

    const width = window.innerWidth
    const height = window.innerHeight

    // Only update if dimensions actually changed (prevents unnecessary renders)
    setWindowDimensions(prev => {
      if (prev.width === width && prev.height === height) return prev
      return { width, height }
    })
  }, [])

  // Hydration-safe initialization
  useEffect(() => {
    // Mark as hydrated and set real dimensions
    setIsHydrated(true)
    
    if (typeof window === 'undefined') return

    // Set real dimensions after hydration
    const width = window.innerWidth
    const height = window.innerHeight
    setWindowDimensions({ width, height })

    // Detect touch device (cache result)
    const touchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(touchSupported)

    // Detect high DPI (cache result)
    const highDPI = window.devicePixelRatio > 1
    setIsHighDPI(highDPI)

    // Optimized resize handler with requestAnimationFrame
    let ticking = false
    const optimizedResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleResize()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('resize', optimizedResize, { passive: true })
    window.addEventListener('orientationchange', optimizedResize, { passive: true })

    return () => {
      window.removeEventListener('resize', optimizedResize)
      window.removeEventListener('orientationchange', optimizedResize)
    }
  }, [handleResize])

  // Memoized derived state (only recalculates when dimensions change)
  const derivedState = useMemo(() => {
    const { width, height } = windowDimensions
    
    const currentBreakpoint = getCurrentBreakpoint(width)
    const deviceType = getDeviceType(width)
    const orientation = getOrientation(width, height)

    // Breakpoint checks
    const isXs = currentBreakpoint === 'xs'
    const isSm = currentBreakpoint === 'sm'
    const isMd = currentBreakpoint === 'md'
    const isLg = currentBreakpoint === 'lg'
    const isXl = currentBreakpoint === 'xl'
    const is2Xl = currentBreakpoint === '2xl'

    // Device type checks
    const isMobile = deviceType === 'mobile'
    const isTablet = deviceType === 'tablet'
    const isDesktop = deviceType === 'desktop'

    // Orientation checks
    const isPortrait = orientation === 'portrait'
    const isLandscape = orientation === 'landscape'

    return {
      currentBreakpoint,
      deviceType,
      orientation,
      isXs,
      isSm,
      isMd,
      isLg,
      isXl,
      is2Xl,
      isMobile,
      isTablet,
      isDesktop,
      isPortrait,
      isLandscape,
    }
  }, [windowDimensions])

  // Memoized utility functions (stable references)
  const utilityFunctions = useMemo(() => ({
    isAbove: (breakpoint: Breakpoint) => windowDimensions.width >= BREAKPOINTS[breakpoint],
    isBelow: (breakpoint: Breakpoint) => windowDimensions.width < BREAKPOINTS[breakpoint],
    isBetween: (min: Breakpoint, max: Breakpoint) => 
      windowDimensions.width >= BREAKPOINTS[min] && windowDimensions.width < BREAKPOINTS[max],
  }), [windowDimensions.width])

  // Return memoized state object (prevents unnecessary re-renders)
  return useMemo(() => ({
    windowDimensions,
    ...derivedState,
    ...utilityFunctions,
    isTouchDevice,
    isHighDPI,
    isHydrated,
  }), [windowDimensions, derivedState, utilityFunctions, isTouchDevice, isHighDPI, isHydrated])
}

export default useResponsive
export type { ResponsiveState, Breakpoint, DeviceType, Orientation, WindowDimensions } 