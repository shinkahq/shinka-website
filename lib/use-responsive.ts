'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

// Tailwind CSS default breakpoints (cached as constants)
const BREAKPOINTS = {
  xs: 0,
  'xs-sm': 375, // Ultra-small screens (iPhone SE, small Android)
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920, // Full HD and larger
  '4xl': 2560, // 2K displays
  '5xl': 3840, // 4K displays
} as const

type Breakpoint = keyof typeof BREAKPOINTS
type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'ultra-wide'
type Orientation = 'portrait' | 'landscape'

interface WindowDimensions {
  width: number
  height: number
}

interface ResponsiveState {
  windowDimensions: WindowDimensions
  currentBreakpoint: Breakpoint
  deviceType: DeviceType
  orientation: Orientation
  isXs: boolean
  isXsSm: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2Xl: boolean
  is3Xl: boolean
  is4Xl: boolean
  is5Xl: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isUltraWide: boolean
  isPortrait: boolean
  isLandscape: boolean
  isAbove: (breakpoint: Breakpoint) => boolean
  isBelow: (breakpoint: Breakpoint) => boolean
  isBetween: (min: Breakpoint, max: Breakpoint) => boolean
  isTouchDevice: boolean
  isHighDPI: boolean
  isHydrated: boolean
}

// Cached helper functions (no re-creation)
const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width >= 3840) return '5xl'
  if (width >= 2560) return '4xl'
  if (width >= 1920) return '3xl'
  if (width >= 1536) return '2xl'
  if (width >= 1280) return 'xl'
  if (width >= 1024) return 'lg'
  if (width >= 768) return 'md'
  if (width >= 640) return 'sm'
  if (width >= 375) return 'xs-sm'
  return 'xs'
}

const getDeviceType = (width: number): DeviceType => {
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  if (width < 1920) return 'desktop'
  return 'ultra-wide'
}

const getOrientation = (width: number, height: number): Orientation => {
  return width > height ? 'landscape' : 'portrait'
}

// SSR-safe default dimensions (desktop-first for hydration consistency)
const DEFAULT_DIMENSIONS: WindowDimensions = {
  width: 1024,
  height: 768,
}

// Cached device detection (computed once)
let cachedTouchDevice: boolean | null = null
let cachedHighDPI: boolean | null = null

const detectTouchDevice = (): boolean => {
  if (cachedTouchDevice !== null) return cachedTouchDevice
  if (typeof window === 'undefined') return false
  
  cachedTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  return cachedTouchDevice
}

const detectHighDPI = (): boolean => {
  if (cachedHighDPI !== null) return cachedHighDPI
  if (typeof window === 'undefined') return false
  
  cachedHighDPI = window.devicePixelRatio > 1
  return cachedHighDPI
}

const useResponsive = (): ResponsiveState => {
  // Optimized state management
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(DEFAULT_DIMENSIONS)
  const [isHydrated, setIsHydrated] = useState(false)
  const frameRef = useRef<number | undefined>(undefined)
  
  // Cached device properties (computed once)
  const [deviceProps] = useState({
    isTouchDevice: detectTouchDevice(),
    isHighDPI: detectHighDPI(),
  })

  // Ultra-optimized resize handler with throttling
  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return

    // Cancel any pending frame
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      const width = window.innerWidth
      const height = window.innerHeight

      // Only update if dimensions actually changed (prevents unnecessary renders)
      setWindowDimensions(prev => {
        if (prev.width === width && prev.height === height) return prev
        return { width, height }
      })
    })
  }, [])

  // Hydration-safe initialization
  useEffect(() => {
    setIsHydrated(true)
    
    if (typeof window === 'undefined') return

    // Set real dimensions immediately
    const width = window.innerWidth
    const height = window.innerHeight
    setWindowDimensions({ width, height })

    // Optimized event listeners
    const options = { passive: true, capture: false }
    window.addEventListener('resize', handleResize, options)
    window.addEventListener('orientationchange', handleResize, options)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [handleResize])

  // Ultra-optimized derived state (only recalculates when dimensions change)
  const derivedState = useMemo(() => {
    const { width, height } = windowDimensions
    
    const currentBreakpoint = getCurrentBreakpoint(width)
    const deviceType = getDeviceType(width)
    const orientation = getOrientation(width, height)

    return {
      currentBreakpoint,
      deviceType,
      orientation,
      // Pre-computed boolean checks (faster than string comparisons)
      isXs: currentBreakpoint === 'xs',
      isXsSm: currentBreakpoint === 'xs-sm',
      isSm: currentBreakpoint === 'sm',
      isMd: currentBreakpoint === 'md',
      isLg: currentBreakpoint === 'lg',
      isXl: currentBreakpoint === 'xl',
      is2Xl: currentBreakpoint === '2xl',
      is3Xl: currentBreakpoint === '3xl',
      is4Xl: currentBreakpoint === '4xl',
      is5Xl: currentBreakpoint === '5xl',
      isMobile: deviceType === 'mobile',
      isTablet: deviceType === 'tablet',
      isDesktop: deviceType === 'desktop',
      isUltraWide: deviceType === 'ultra-wide',
      isPortrait: orientation === 'portrait',
      isLandscape: orientation === 'landscape',
    }
  }, [windowDimensions])

  // Ultra-optimized utility functions (stable references, minimal computation)
  const utilityFunctions = useMemo(() => {
    const width = windowDimensions.width
    
    return {
      isAbove: (breakpoint: Breakpoint) => width >= BREAKPOINTS[breakpoint],
      isBelow: (breakpoint: Breakpoint) => width < BREAKPOINTS[breakpoint],
      isBetween: (min: Breakpoint, max: Breakpoint) => 
        width >= BREAKPOINTS[min] && width < BREAKPOINTS[max],
    }
  }, [windowDimensions.width])

  // Return optimized state object (minimal re-renders)
  return useMemo(() => ({
    windowDimensions,
    ...derivedState,
    ...utilityFunctions,
    ...deviceProps,
    isHydrated,
  }), [windowDimensions, derivedState, utilityFunctions, deviceProps, isHydrated])
}

export default useResponsive
export type { ResponsiveState, Breakpoint, DeviceType, Orientation, WindowDimensions } 