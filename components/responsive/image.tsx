'use client'

import React from 'react'
import useResponsive from '@/lib/use-responsive'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  // Different sources for different screen sizes
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc?: string
  // Sizing behavior
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  // Aspect ratio
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall' | string
  // Loading behavior
  loading?: 'lazy' | 'eager'
  // High DPI support
  highDPI?: boolean
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  fit = 'cover',
  aspectRatio,
  loading = 'lazy',
  highDPI = true,
}) => {
  const { isMobile, isTablet, isDesktop, isHighDPI } = useResponsive()

  const getImageSrc = () => {
    // Use device-specific sources if provided
    if (mobileSrc && isMobile) return mobileSrc
    if (tabletSrc && isTablet) return tabletSrc
    if (desktopSrc && isDesktop) return desktopSrc
    
    // Add high DPI suffix if supported and requested
    if (highDPI && isHighDPI && src) {
      const [name, ext] = src.split(/\.(?=[^.]+$)/)
      return `${name}@2x.${ext}`
    }
    
    return src
  }

  const getObjectFit = () => {
    const fitMap = {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    }
    return fitMap[fit]
  }

  const getAspectRatio = () => {
    if (!aspectRatio) return ''
    
    const ratioMap: Record<string, string> = {
      square: 'aspect-square',
      video: 'aspect-video',
      wide: 'aspect-[21/9]',
      tall: 'aspect-[3/4]',
    }
    
    return ratioMap[aspectRatio] || `aspect-[${aspectRatio}]`
  }

  return (
    <img
      src={getImageSrc()}
      alt={alt}
      loading={loading}
      className={cn(
        'w-full h-auto',
        getObjectFit(),
        getAspectRatio(),
        className
      )}
    />
  )
} 