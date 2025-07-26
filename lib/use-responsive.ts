'use client'

import { useState, useEffect, useCallback } from 'react'

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
  
  // Breakpoint checks
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2Xl: boolean
  
  // Device type checks
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  
  // Orientation checks
  isPortrait: boolean
  isLandscape: boolean
  
  // Utility functions
  isAbove: (breakpoint: Breakpoint) => boolean
  isBelow: (breakpoint: Breakpoint) => boolean
  isBetween: (min: Breakpoint, max: Breakpoint) => boolean
  
  // Touch device detection
  isTouchDevice: boolean
  
  // High DPI detection
  isHighDPI: boolean
}

const useResponsive = (): ResponsiveState => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  })
  
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isHighDPI, setIsHighDPI] = useState(false)

  // Get current breakpoint based on width
  const getCurrentBreakpoint = useCallback((width: number): Breakpoint => {
    if (width >= BREAKPOINTS['2xl']) return '2xl'
    if (width >= BREAKPOINTS.xl) return 'xl'
    if (width >= BREAKPOINTS.lg) return 'lg'
    if (width >= BREAKPOINTS.md) return 'md'
    if (width >= BREAKPOINTS.sm) return 'sm'
    return 'xs'
  }, [])

  // Get device type based on width and user agent
  const getDeviceType = useCallback((width: number): DeviceType => {
    // Check user agent for mobile devices
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
  }, [])

  // Get orientation
  const getOrientation = useCallback((width: number, height: number): Orientation => {
    return width > height ? 'landscape' : 'portrait'
  }, [])

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return

    const width = window.innerWidth
    const height = window.innerHeight

    setWindowDimensions({ width, height })
  }, [])

  // Initialize dimensions and event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initial setup
    const width = window.innerWidth
    const height = window.innerHeight
    setWindowDimensions({ width, height })

    // Detect touch device
    const touchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(touchSupported)

    // Detect high DPI
    const highDPI = window.devicePixelRatio > 1
    setIsHighDPI(highDPI)

    // Debounce resize events
    let timeoutId: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 150)
    }

    window.addEventListener('resize', debouncedResize)
    window.addEventListener('orientationchange', debouncedResize)

    return () => {
      window.removeEventListener('resize', debouncedResize)
      window.removeEventListener('orientationchange', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [handleResize])

  // Calculate derived state
  const currentBreakpoint = getCurrentBreakpoint(windowDimensions.width)
  const deviceType = getDeviceType(windowDimensions.width)
  const orientation = getOrientation(windowDimensions.width, windowDimensions.height)

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

  // Utility functions
  const isAbove = useCallback((breakpoint: Breakpoint) => {
    return windowDimensions.width >= BREAKPOINTS[breakpoint]
  }, [windowDimensions.width])

  const isBelow = useCallback((breakpoint: Breakpoint) => {
    return windowDimensions.width < BREAKPOINTS[breakpoint]
  }, [windowDimensions.width])

  const isBetween = useCallback((min: Breakpoint, max: Breakpoint) => {
    return windowDimensions.width >= BREAKPOINTS[min] && windowDimensions.width < BREAKPOINTS[max]
  }, [windowDimensions.width])

  return {
    windowDimensions,
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
    isAbove,
    isBelow,
    isBetween,
    isTouchDevice,
    isHighDPI,
  }
}

export default useResponsive
export type { ResponsiveState, Breakpoint, DeviceType, Orientation, WindowDimensions } 