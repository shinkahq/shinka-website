'use client'

import React from 'react'
import useResponsive from '@/lib/use-responsive'
import { cn } from '@/lib/utils'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  // Padding options
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive'
  // Max width options
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'responsive'
  // Center the container
  center?: boolean
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  padding = 'responsive',
  maxWidth = 'responsive',
  center = true,
}) => {
  const { isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()

  // Responsive padding
  const getPadding = () => {
    if (padding === 'none') return ''
    if (padding === 'responsive') {
      return isXs ? 'px-2 py-1' : isMobile ? 'px-4 py-2' : isTablet ? 'px-6 py-4' : is3Xl ? 'px-12 py-8' : is4Xl ? 'px-16 py-10' : is5Xl ? 'px-20 py-12' : 'px-8 py-6'
    }
    const paddingMap = {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    }
    return paddingMap[padding] || 'p-4'
  }

  // Responsive max width
  const getMaxWidth = () => {
    if (maxWidth === 'none') return ''
    if (maxWidth === 'full') return 'w-full'
    if (maxWidth === 'responsive') {
      return isXs ? 'max-w-full' : isMobile ? 'max-w-full' : isTablet ? 'max-w-4xl' : is3Xl ? 'max-w-7xl' : is4Xl ? 'max-w-8xl' : is5Xl ? 'max-w-9xl' : 'max-w-6xl'
    }
    const maxWidthMap = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
      '8xl': 'max-w-8xl',
      '9xl': 'max-w-9xl',
    }
    return maxWidthMap[maxWidth] || 'max-w-4xl'
  }

  return (
    <div
      className={cn(
        getPadding(),
        getMaxWidth(),
        center && 'mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
} 