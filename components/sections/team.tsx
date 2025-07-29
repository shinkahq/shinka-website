'use client'

import { useState, memo, useMemo, useCallback } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'

const experience = [
  { name: "QX Labs", role: "Founding AI Engineer", size: "large" },
  { name: "Unsiloed AI", role: "Founding AI Engineer", size: "medium" },
  { name: "Massachusetts Institute of Technology", role: "Undergraduate Researcher", size: "large" },
  { name: "Tsinghua University", role: "Research Collaborator", size: "medium" },
  { name: "University of Amsterdam", role: "Guest Researcher", size: "small" },
  { name: "IIT Bombay", role: "Research Intern", size: "medium" },
  { name: "EPAM Systems", role: "Innovation Center", size: "small" },
  { name: "Covenants", role: "Tech Lead", size: "medium" }
] as const

const Team = memo(function Team() {
  const { isMobile, isXs, isSm, isMd } = useResponsive()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClick = useCallback((index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index)
    }
  }, [isMobile, activeIndex])

  const sectionClass = useMemo(() => 
    `${isXs ? 'py-8' : isMobile ? 'py-12' : 'py-24'} relative overflow-hidden`, 
    [isMobile, isXs]
  )
  
  const headerClass = useMemo(() => 
    `text-center ${isXs ? 'mb-8' : isMobile ? 'mb-12' : 'mb-20'}`, 
    [isMobile, isXs]
  )
  
  const badgeClass = useMemo(() => 
    `${isXs ? 'mb-3' : isMobile ? 'mb-4' : 'mb-8'} border-foreground/20 text-foreground font-mono bg-accent/5 backdrop-blur-sm`, 
    [isMobile, isXs]
  )
  
  const headingClass = useMemo(() => 
    `font-bold text-foreground ${isXs ? 'mb-3' : isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`, 
    [isMobile, isXs]
  )
  
  const backgroundClass = useMemo(() => 
    `absolute inset-0 ${isXs ? 'opacity-2' : isMobile ? 'opacity-3' : 'opacity-5'}`, 
    [isMobile, isXs]
  )
  
  const backgroundSize = useMemo(() => 
    isXs ? '30px 30px' : isMobile ? '40px 40px' : '60px 60px', 
    [isMobile, isXs]
  )
  
  const backgroundImage = useMemo(() => 
    `linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)`, 
    []
  )

  // Improved responsive spacing and layout
  const containerClass = useMemo(() => {
    if (isXs) return 'grid grid-cols-1 gap-4 justify-items-center pt-2 pb-8'
    if (isSm) return 'grid grid-cols-2 gap-4 gap-y-6 justify-items-center pt-3 pb-10'
    if (isMd) return 'flex flex-wrap justify-center items-baseline gap-4 gap-y-8 pt-3 pb-10'
    return 'flex flex-wrap justify-center items-baseline gap-6 gap-y-10 pt-4 pb-12'
  }, [isXs, isSm, isMd])

  return (
    <section id="team" className={sectionClass}>
      <div className={backgroundClass}>
        <div className="absolute inset-0" style={{
          backgroundImage,
          backgroundSize
        }} />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={headerClass}>
          <Badge variant="outline" className={badgeClass}>
            EXPERIENCE
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={headingClass}
          >
            TEAM
          </ResponsiveText>
          <ResponsiveText
            mobileSize={isXs ? "text-sm" : "text-base"}
            tabletSize="text-lg"
            desktopSize="text-xl"
            className="text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We are{' '}
            <span className="text-accent font-semibold">researchers</span>,{' '}
            <span className="text-accent font-semibold">engineers</span>, and{' '}
            <span className="text-accent font-semibold">problem solvers</span>.
          </ResponsiveText>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={containerClass}>
            {experience.map((item, index) => {
              const sizeClasses = {
                small: isXs ? 'text-sm' : isSm ? 'text-base' : isMd ? 'text-lg' : 'text-lg md:text-xl',
                medium: isXs ? 'text-base' : isSm ? 'text-lg' : isMd ? 'text-xl' : 'text-xl md:text-2xl', 
                large: isXs ? 'text-lg' : isSm ? 'text-xl' : isMd ? 'text-2xl' : 'text-2xl md:text-3xl'
              }[item.size]

              const isActive = activeIndex === index

              return (
                <div 
                  key={index}
                  className="group relative flex flex-col items-center max-w-full"
                >
                  {/* Main text container with better responsive padding and enhanced touch targets */}
                  <div 
                    className={`relative ${isMobile ? 'px-4 py-4 cursor-pointer touch-manipulation' : 'px-3 py-2'} transition-all duration-500 ${isMobile ? '' : 'group-hover:-translate-y-1'} text-center ${isMobile ? 'min-h-[44px] flex items-center justify-center' : ''}`}
                    onClick={() => handleItemClick(index)}
                    role={isMobile ? "button" : undefined}
                    tabIndex={isMobile ? 0 : undefined}
                  >
                    <span className={`font-medium ${sizeClasses} transition-colors duration-300 text-foreground/70 ${isMobile ? 'text-accent' : 'group-hover:text-accent'} ${isXs || isSm ? 'text-center' : ''} leading-tight select-none`}>
                      {item.name}
                    </span>
                    
                    {/* Improved underline effect */}
                    <div className={`absolute -bottom-1 left-3 right-3 h-[2px] bg-accent transition-all duration-500 ${isMobile ? (isActive ? 'scale-x-100' : 'scale-x-0') : 'scale-x-0 group-hover:scale-x-100'} origin-center`} />
                  </div>
                  
                  {/* Enhanced role tooltip positioning */}
                  <div className={`absolute top-full ${isXs ? 'mt-1' : 'mt-2'} left-1/2 -translate-x-1/2 pointer-events-none z-20`}>
                    <span className={`${isXs ? 'text-xs' : isSm ? 'text-xs' : 'text-sm'} text-accent transform transition-all duration-500 whitespace-nowrap font-medium text-center block ${isMobile ? (isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2') : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                      {item.role}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Team 