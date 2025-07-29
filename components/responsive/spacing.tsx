'use client'

import React from 'react'
import useResponsive from '@/lib/use-responsive'

interface ResponsiveSpacingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'responsive'
  type?: 'margin' | 'padding'
  direction?: 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y' | 'all'
}

export const ResponsiveSpacing: React.FC<ResponsiveSpacingProps> = ({
  size = 'responsive',
  type = 'margin',
  direction = 'all',
}) => {
  const { isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()

  const getSpacing = () => {
    let spacing = ''
    
    if (size === 'responsive') {
      spacing = isXs ? '1' : isMobile ? '2' : isTablet ? '4' : is3Xl ? '8' : is4Xl ? '12' : is5Xl ? '16' : '6'
    } else {
      const sizeMap = {
        xs: '1',
        sm: '2',
        md: '4',
        lg: '6',
        xl: '8',
        '2xl': '12',
        '3xl': '16',
        '4xl': '20',
        '5xl': '24',
      }
      spacing = sizeMap[size] || '4'
    }

    const prefix = type === 'margin' ? 'm' : 'p'
    const directionMap = {
      top: 't',
      bottom: 'b',
      left: 'l',
      right: 'r',
      x: 'x',
      y: 'y',
      all: '',
    }
    
    const dir = directionMap[direction]
    return `${prefix}${dir}-${spacing}`
  }

  return <div className={getSpacing()} />
} 