'use client'

import { memo, useMemo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const Mission = memo(function Mission() {
  const { isMobile, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()
  
  const sectionClass = useMemo(() => 
    `${isXs ? 'py-8' : isMobile ? 'py-12' : is3Xl ? 'py-32' : is4Xl ? 'py-40' : is5Xl ? 'py-48' : 'py-24'} relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background/95`, 
    [isMobile, isXs, is3Xl, is4Xl, is5Xl]
  )
  
  const headerClass = useMemo(() => 
    `text-center ${isXs ? 'mb-8' : isMobile ? 'mb-12' : is3Xl ? 'mb-32' : is4Xl ? 'mb-40' : is5Xl ? 'mb-48' : 'mb-20 md:mb-32'}`, 
    [isMobile, isXs, is3Xl, is4Xl, is5Xl]
  )
  
  const headingClass = useMemo(() => 
    `font-bold text-foreground ${isXs ? 'mb-3' : isMobile ? 'mb-4' : is3Xl ? 'mb-12' : is4Xl ? 'mb-16' : is5Xl ? 'mb-20' : 'mb-8'} tracking-tight font-mono`, 
    [isMobile, isXs, is3Xl, is4Xl, is5Xl]
  )

  return (
    <section id="mission" className={sectionClass}>
      {!isMobile && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={headerClass}>
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
            tabletSize="text-4xl"
            desktopSize={is3Xl ? "text-6xl lg:text-7xl" : is4Xl ? "text-7xl lg:text-8xl" : is5Xl ? "text-8xl lg:text-9xl" : "text-5xl lg:text-6xl"}
            className={headingClass}
          >
            OUR{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-accent">
                MISSION
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            as="h3"
            mobileSize={isXs ? "text-2xl" : "text-3xl"}
            tabletSize="text-4xl lg:text-5xl"
            desktopSize={is3Xl ? "text-6xl lg:text-7xl" : is4Xl ? "text-7xl lg:text-8xl" : is5Xl ? "text-8xl lg:text-9xl" : "text-5xl lg:text-7xl"}
            className="font-semibold text-foreground tracking-tight leading-[1.1]"
          >
            <span className="inline-block">
              <span className="text-primary font-bold">Building</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-bold">super-intelligence</span>
            </span>
            <br />
            <span className="inline-block">
              <span className="text-primary/70 font-bold">for the world</span> &{' '}
              <span className="text-foreground">beyond</span>
            </span>
          </ResponsiveText>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Mission 