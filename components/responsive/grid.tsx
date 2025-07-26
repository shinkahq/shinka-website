'use client'

import React from 'react'
import useResponsive from '@/lib/use-responsive'
import { cn } from '@/lib/utils'

interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  // Grid columns for different breakpoints
  cols?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  // Gap between items
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive'
  // Auto-fit behavior
  autoFit?: boolean
  minItemWidth?: string
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'responsive',
  autoFit = false,
  minItemWidth = '250px',
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  const getGridCols = () => {
    if (autoFit) {
      return `grid-cols-[repeat(auto-fit,minmax(${minItemWidth},1fr))]`
    }

    const currentCols = isMobile 
      ? cols.mobile || 1 
      : isTablet 
        ? cols.tablet || 2 
        : cols.desktop || 3

    const colsMap: { [key: number]: string } = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    }
    return colsMap[currentCols] || 'grid-cols-3'
  }

  const getGap = () => {
    if (gap === 'none') return 'gap-0'
    if (gap === 'responsive') {
      return isMobile ? 'gap-2' : isTablet ? 'gap-4' : 'gap-6'
    }
    const gapMap = {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }
    return gapMap[gap] || 'gap-4'
  }

  return (
    <div className={cn('grid', getGridCols(), getGap(), className)}>
      {children}
    </div>
  )
} 