'use client'

import React from 'react'
import useResponsive, { type Breakpoint, type DeviceType } from '@/lib/use-responsive'

interface ShowProps {
  children: React.ReactNode
  // Show on specific breakpoints
  above?: Breakpoint
  below?: Breakpoint
  between?: [Breakpoint, Breakpoint]
  only?: Breakpoint | Breakpoint[]
  // Show on specific device types
  on?: DeviceType | DeviceType[]
  // Show based on orientation
  portrait?: boolean
  landscape?: boolean
  // Show based on capabilities
  touch?: boolean
  desktop?: boolean
  // Hydration behavior
  fallback?: 'show' | 'hide' | 'desktop'
}

export const Show: React.FC<ShowProps> = ({
  children,
  above,
  below,
  between,
  only,
  on,
  portrait,
  landscape,
  touch,
  desktop,
  fallback = 'desktop', // Default to desktop behavior during SSR
}) => {
  const responsive = useResponsive()

  // During hydration, use fallback behavior to prevent mismatch
  if (!responsive.isHydrated) {
    switch (fallback) {
      case 'show':
        return <>{children}</>
      case 'hide':
        return null
      case 'desktop':
        // Show if it would be shown on desktop (lg breakpoint)
        if (above) {
          const BREAKPOINTS = { 
            xs: 0, 
            'xs-sm': 375, 
            sm: 640, 
            md: 768, 
            lg: 1024, 
            xl: 1280, 
            '2xl': 1536, 
            '3xl': 1920, 
            '4xl': 2560, 
            '5xl': 3840 
          }
          return 1024 >= BREAKPOINTS[above] ? <>{children}</> : null
        }
        if (below) {
          const BREAKPOINTS = { 
            xs: 0, 
            'xs-sm': 375, 
            sm: 640, 
            md: 768, 
            lg: 1024, 
            xl: 1280, 
            '2xl': 1536, 
            '3xl': 1920, 
            '4xl': 2560, 
            '5xl': 3840 
          }
          return 1024 < BREAKPOINTS[below] ? <>{children}</> : null
        }
        // Default to showing for desktop-first approach
        return <>{children}</>
      default:
        return <>{children}</>
    }
  }

  // After hydration, use normal responsive logic
  // Check breakpoint conditions
  if (above && !responsive.isAbove(above)) return null
  if (below && !responsive.isBelow(below)) return null
  if (between && !responsive.isBetween(between[0], between[1])) return null
  
  if (only) {
    const breakpoints = Array.isArray(only) ? only : [only]
    if (!breakpoints.includes(responsive.currentBreakpoint)) return null
  }

  // Check device type conditions
  if (on) {
    const devices = Array.isArray(on) ? on : [on]
    if (!devices.includes(responsive.deviceType)) return null
  }

  // Check orientation conditions
  if (portrait !== undefined && responsive.isPortrait !== portrait) return null
  if (landscape !== undefined && responsive.isLandscape !== landscape) return null

  // Check capability conditions
  if (touch !== undefined && responsive.isTouchDevice !== touch) return null
  if (desktop !== undefined && responsive.isDesktop !== desktop) return null

  return <>{children}</>
} 