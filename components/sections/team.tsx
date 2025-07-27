'use client'

import { useRef, useState } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const experience = [
  {
    name: "QX Labs",
    role: "Founding AI Engineer",
    size: "large"
  },
  {
    name: "Unsiloed AI",
    role: "Founding AI Engineer",
    size: "medium"
  },
  {
    name: "Massachusetts Institute of Technology",
    role: "Undergraduate Researcher",
    size: "large"
  },
  {
    name: "Tsinghua University",
    role: "Research Collaborator",
    size: "medium"
  },
  {
    name: "University of Amsterdam",
    role: "Guest Researcher",
    size: "small"
  },
  {
    name: "IIT Bombay",
    role: "Research Intern",
    size: "medium"
  },
  {
    name: "EPAM Systems",
    role: "Innovation Center",
    size: "small"
  },
  {
    name: "Covenants",
    role: "Tech Lead",
    size: "medium"
  }
]

export default function Team() {
  const { isMobile } = useResponsive()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="team" className={`${isMobile ? 'py-16' : 'py-24'} bg-background overflow-hidden`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center mb-12 md:mb-20">
          <ResponsiveText
            as="h2"
            mobileSize="text-3xl"
            tabletSize="text-4xl"
            desktopSize="text-4xl lg:text-5xl"
            className="font-medium text-foreground mb-4 md:mb-6 tracking-tight"
          >
            Team
          </ResponsiveText>
          <ResponsiveText
            mobileSize="text-base"
            tabletSize="text-lg"
            desktopSize="text-lg"
            className="text-muted-foreground max-w-2xl mx-auto font-light"
          >
            We are researchers, engineers, and problem solvers.
          </ResponsiveText>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {experience.map((item, index) => {
              const sizeClasses = {
                small: 'text-lg md:text-xl',
                medium: 'text-xl md:text-2xl',
                large: 'text-2xl md:text-3xl'
              }[item.size]
              
              const delayClass = `animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards`
              const staggerDelay = `delay-[${index * 100}ms]`
              
              const isActive = activeIndex === index
              
              return (
                <div 
                  key={index}
                  className={`group relative py-2 px-1 ${delayClass} ${staggerDelay}`}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <div className={`relative transition-all duration-300 ${isActive ? '-translate-y-1' : ''} md:group-hover:-translate-y-1`}>
                    <span className={`font-medium ${sizeClasses} ${isActive ? 'text-foreground' : 'text-foreground/70'} md:group-hover:text-foreground transition-colors duration-300 cursor-pointer md:cursor-default`}>
                      {item.name}
                    </span>
                    <div className={`absolute -bottom-1 left-0 h-[2px] bg-foreground/30 transition-all duration-300 ${isActive ? 'w-full bg-foreground' : 'w-0 md:group-hover:w-full md:group-hover:bg-foreground'}`} />
                  </div>
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none ${isMobile ? 'md:pointer-events-none' : 'pointer-events-none'}`}>
                    <span className={`text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full transform transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0'} whitespace-nowrap`}>
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
} 