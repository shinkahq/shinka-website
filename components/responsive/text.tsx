'use client'

import React from 'react'
import useResponsive from '@/lib/use-responsive'
import { cn } from '@/lib/utils'

interface ResponsiveTextProps {
  children: React.ReactNode
  className?: string
  // Size variants
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'responsive'
  // Responsive behavior
  mobileSize?: string
  tabletSize?: string
  desktopSize?: string
  // Text element type
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className,
  size = 'responsive',
  mobileSize,
  tabletSize,
  desktopSize,
  as: Component = 'p',
}) => {
  const { isMobile, isTablet, isDesktop, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()

  const getTextSize = () => {
    // Custom responsive sizes
    if (mobileSize && isMobile) return mobileSize
    if (tabletSize && isTablet) return tabletSize
    if (desktopSize && isDesktop) return desktopSize

    // Predefined responsive behavior
    if (size === 'responsive') {
      return isXs ? 'text-xs' : isMobile ? 'text-sm' : isTablet ? 'text-base' : is3Xl ? 'text-lg' : is4Xl ? 'text-xl' : is5Xl ? 'text-2xl' : 'text-lg'
    }

    // Fixed sizes
    const sizeMap = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    }
    return sizeMap[size] || 'text-base'
  }

  return (
    <Component className={cn(getTextSize(), className)}>
      {children}
    </Component>
  )
} 