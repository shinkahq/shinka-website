'use client'

import { Users } from 'lucide-react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'

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
] as const

export default function Team() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section id="team" className={`${isMobile ? 'py-12' : 'py-24'} relative overflow-hidden`}>
      {/* Subtle background grid */}
      <div className={`absolute inset-0 ${isMobile ? 'opacity-3' : 'opacity-5'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '60px 60px'
        }} />
      </div>
      
      {/* Subtle accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <Badge variant="outline" className={`${isMobile ? 'mb-4' : 'mb-8'} border-accent/40 text-accent font-mono bg-accent/5 backdrop-blur-sm`}>
            <Users className="w-3 h-3 mr-1" />
            EXPERIENCE
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={`font-bold text-foreground ${isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`}
          >
            TEAM
          </ResponsiveText>
          <ResponsiveText
            mobileSize="text-base"
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
          <div className={`flex flex-wrap justify-center items-center gap-${isMobile ? '4' : '6 md:gap-8'}`}>
            {experience.map((item, index) => {
              const sizeClasses = {
                small: isMobile ? 'text-base' : 'text-lg md:text-xl',
                medium: isMobile ? 'text-lg' : 'text-xl md:text-2xl',
                large: isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
              }[item.size]

              return (
                <div 
                  key={index}
                  className="group relative py-2 px-1"
                >
                  <div className="relative transition-all duration-500 group-hover:-translate-y-1">
                    <span className={`font-medium ${sizeClasses} transition-colors duration-300 text-foreground/70 group-hover:text-accent`}>
                      {item.name}
                    </span>
                    
                    {/* Gradient underline */}
                    <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  </div>
                  
                  {/* Role tooltip */}
                  <div className={`absolute ${isMobile ? '-bottom-6' : '-bottom-8'} left-1/2 -translate-x-1/2 pointer-events-none z-10`}>
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-accent bg-gradient-to-r from-background/90 via-background/95 to-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/20 transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap font-medium`}>
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