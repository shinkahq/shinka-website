'use client'

import { memo, useMemo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const About = memo(function About() {
  const { isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()
  
  const sectionClass = useMemo(() => 
    `${isXs ? 'py-12' : isMobile ? 'py-16' : isTablet ? 'py-20' : is3Xl ? 'py-32' : is4Xl ? 'py-40' : is5Xl ? 'py-48' : 'py-24 lg:py-32'} relative overflow-hidden bg-gradient-to-b from-background to-muted/20`, 
    [isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl]
  )
  
  const headerClass = useMemo(() => 
    `text-center ${isXs ? 'mb-8' : isMobile ? 'mb-12' : isTablet ? 'mb-16' : is3Xl ? 'mb-32' : is4Xl ? 'mb-40' : is5Xl ? 'mb-48' : 'mb-20 lg:mb-32'}`, 
    [isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl]
  )
  
  const headingClass = useMemo(() => 
    `font-bold text-foreground ${isXs ? 'mb-6' : isMobile ? 'mb-8' : isTablet ? 'mb-12' : is3Xl ? 'mb-16' : is4Xl ? 'mb-20' : is5Xl ? 'mb-24' : 'mb-12 lg:mb-16'} tracking-tight font-mono`, 
    [isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl]
  )

  return (
    <section id="about" className={sectionClass}>
      <ResponsiveContainer maxWidth="responsive">
        <div className={headerClass}>
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
            tabletSize="text-4xl lg:text-5xl"
            desktopSize={is3Xl ? "text-6xl lg:text-7xl" : is4Xl ? "text-7xl lg:text-8xl" : is5Xl ? "text-8xl lg:text-9xl" : "text-5xl lg:text-6xl"}
            className={headingClass}
          >
            ABOUT{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-accent">
                US
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            </span>
          </ResponsiveText>

          {/* Japanese Kanji and Description */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent/80 tracking-wider">
                進化
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-lg font-mono">
                  shin·ka
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm lg:text-base font-mono opacity-70">
                  (Japanese)
                </span>
              </div>
            </div>
            
            {/* Vertical separator - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block w-px h-24 bg-accent/20" />
            
            {/* Horizontal separator - shown on mobile/tablet */}
            <div className="lg:hidden w-16 h-px bg-accent/20" />
            
            <div className="text-center lg:text-left space-y-3 sm:space-y-4 max-w-sm lg:max-w-md">
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                Evolution
              </div>
              <div className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                The process of becoming more advanced, progress, development, and improvement
              </div>
            </div>
          </div>
          
          {/* Main Description */}
          <div className="max-w-4xl mx-auto">
            <ResponsiveText
              mobileSize={isXs ? "text-lg" : "text-xl"}
              tabletSize="text-2xl"
              desktopSize={is3Xl ? "text-3xl" : is4Xl ? "text-4xl" : is5Xl ? "text-5xl" : "text-2xl lg:text-3xl"}
              className="text-muted-foreground leading-relaxed font-medium"
            >
              We are an applied research lab.
            </ResponsiveText>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default About
