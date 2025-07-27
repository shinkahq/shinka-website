'use client'

import { Bot, Workflow, Zap, ChevronRight } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that analyze financial documents, monitor transactions, detect anomalies, and automate compliance workflows across enterprise systems.",
    code: "01"
  },
  {
    icon: Workflow,
    title: "AI Models",
    description: "Custom models for detecting financial fraud, analyzing legal contracts, predicting market risks, and identifying regulatory violations with industry-specific training.",
    code: "02"
  },
  {
    icon: Zap,
    title: "Integrations & Automations",
    description: "Seamless integration with Bloomberg, Salesforce, SAP, and legacy banking systems. End-to-end automation for AML screening, trade settlement, quality control, and regulatory submissions.",
    code: "03"
  }
]

export default function Services() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section id="services" className={`${isMobile ? 'py-12' : 'py-24'} relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background/95`}>
      {/* Simplified background for mobile */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </>
      )}
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-20 md:mb-32'}`}>
          <Badge variant="outline" className={`${isMobile ? 'mb-4' : 'mb-8'} border-accent/40 text-accent font-mono bg-accent/5 backdrop-blur-sm`}>
            <Zap className="w-3 h-3 mr-1" />
            {isMobile ? 'SOLUTIONS' : 'SYSTEM.SOLUTIONS'}
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={`font-bold text-foreground ${isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`}
          >
            WHAT WE{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-accent">
                BUILD
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            </span>
          </ResponsiveText>
          
          {!isMobile && (
            <ResponsiveText
              mobileSize="text-base"
              tabletSize="text-lg"
              desktopSize="text-xl"
              className="text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Solving complex problems across{' '}
              <span className="text-accent font-semibold">Private Equity</span>,{' '}
              <span className="text-accent font-semibold">Banking</span>,{' '}
              <span className="text-accent font-semibold">Pharma</span>,{' '}
              <span className="text-accent font-semibold">Supply Chain</span>
              <span className="text-accent font-semibold">and more</span>
            </ResponsiveText>
          )}
        </div>

        <div className={`space-y-${isMobile ? '8' : '16 md:space-y-24'}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connection line - only on desktop */}
              {!isMobile && index < services.length - 1 && (
                <div className="absolute left-8 top-20 w-[1px] h-16 bg-gradient-to-b from-accent/50 to-transparent" />
              )}
              
              <div className={`flex ${isMobile ? 'flex-col gap-4' : 'items-start gap-8 md:gap-12'}`}>
                {/* Left side - Icon and code */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Simplified icon container for mobile */}
                    <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} relative`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 transform rotate-45 rounded-lg group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500" />
                      <div className="absolute inset-2 bg-background/90 transform rotate-45 rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-accent group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                    </div>
                    
                    {/* Code number */}
                    <div className={`absolute -bottom-1 -right-1 ${isMobile ? 'w-5 h-5 text-xs' : 'w-6 h-6 text-xs'} bg-accent text-accent-foreground rounded-full flex items-center justify-center font-mono font-bold`}>
                      {service.code}
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  <div className={`flex items-center gap-${isMobile ? '2' : '4'} mb-${isMobile ? '2' : '4'}`}>
                    <ResponsiveText
                      as="h3"
                      mobileSize="text-lg"
                      tabletSize="text-2xl"
                      desktopSize="text-3xl"
                      className="font-bold text-foreground font-mono tracking-wide group-hover:text-accent transition-colors duration-500"
                    >
                      {service.title.toUpperCase()}
                    </ResponsiveText>
                  </div>
                  
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-lg"
                    className={`text-muted-foreground leading-relaxed mb-${isMobile ? '4' : '6'} max-w-3xl`}
                  >
                    {service.description}
                  </ResponsiveText>

                  {/* Action link - simplified for mobile */}
                  <div className="group/link flex items-center gap-2 text-accent font-mono text-sm cursor-pointer">
                    <span className="group-hover/link:translate-x-2 transition-transform duration-300">
                      {isMobile ? '[EXPLORE]' : ''}
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                    <div className={`${isMobile ? 'w-4' : 'w-8'} h-[1px] bg-accent group-hover/link:w-${isMobile ? '8' : '16'} transition-all duration-300`} />
                  </div>
                </div>
              </div>

              {/* Scanning line effect - only on desktop */}
              {!isMobile && (
                <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  )
} 