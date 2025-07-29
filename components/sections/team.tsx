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
  const { isMobile, isXs } = useResponsive()
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

        <div className="relative max-w-5xl mx-auto">
          <div className={`flex flex-wrap justify-center items-center gap-${isXs ? '3' : isMobile ? '4' : '6 md:gap-8'}`}>
            {experience.map((item, index) => {
              const sizeClasses = {
                small: isXs ? 'text-sm' : isMobile ? 'text-base' : 'text-lg md:text-xl',
                medium: isXs ? 'text-base' : isMobile ? 'text-lg' : 'text-xl md:text-2xl',
                large: isXs ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
              }[item.size]

              const isActive = activeIndex === index

              return (
                <div 
                  key={index}
                  className="group relative py-2 px-1"
                  onClick={() => handleItemClick(index)}
                >
                  <div className={`relative transition-all duration-500 ${isMobile ? '' : 'group-hover:-translate-y-1'}`}>
                    <span className={`font-medium ${sizeClasses} transition-colors duration-300 text-foreground/70 ${isMobile ? 'text-accent cursor-pointer' : 'group-hover:text-accent'}`}>
                      {item.name}
                    </span>
                    
                    <div className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500 ${isMobile ? (isActive ? 'w-full' : 'w-0') : 'w-0 group-hover:w-full'}`} />
                  </div>
                  
                  <div className={`absolute ${isXs ? '-bottom-5' : isMobile ? '-bottom-6' : '-bottom-8'} left-1/2 -translate-x-1/2 pointer-events-none z-10`}>
                    <span className={`${isXs ? 'text-xs' : isMobile ? 'text-xs' : 'text-sm'} text-accent transform transition-all duration-500 whitespace-nowrap font-medium ${isMobile ? (isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2') : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
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