'use client'

import { memo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'

const Metrics = memo(function Metrics() {
  const { isMobile, isXs } = useResponsive()

  const metrics = [
    {
      number: "1000x",
      label: "Efficiency Gain",
      description: "Process improvement"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliability guarantee"
    },
    {
      number: "50+",
      label: "Enterprise Clients",
      description: "Trusted by leaders"
    },
    {
      number: "24/7",
      label: "AI Operations",
      description: "Always available"
    }
  ]

  return (
    <section className={`${isXs ? 'py-12' : 'py-16 md:py-24'} bg-gradient-to-b from-muted/20 to-background relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 50%)`,
        }} />
      </div>
      
      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={`text-center ${isXs ? 'mb-8' : 'mb-12 md:mb-16'}`}>
          <Badge variant="outline" className={`${isXs ? 'mb-3' : 'mb-4 md:mb-6'} border-foreground/20 text-foreground font-medium bg-background/50 backdrop-blur-sm`}>
            IMPACT METRICS
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
            tabletSize="text-3xl"
            desktopSize="text-4xl"
            className="font-bold text-foreground mb-4 tracking-tight"
          >
            Trusted by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Industry Leaders
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize={isXs ? "text-sm" : "text-base"}
            tabletSize="text-lg"
            desktopSize="text-xl"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our AI solutions are powering the next generation of enterprise automation
          </ResponsiveText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`text-center ${isXs ? 'p-4' : 'p-6'} rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg`}
            >
              <ResponsiveText
                mobileSize={isXs ? "text-xl" : "text-2xl"}
                tabletSize="text-3xl"
                desktopSize="text-4xl"
                className="font-bold text-primary mb-2"
              >
                {metric.number}
              </ResponsiveText>
              
              <ResponsiveText
                mobileSize={isXs ? "text-xs" : "text-sm"}
                tabletSize="text-base"
                desktopSize="text-lg"
                className="font-semibold text-foreground mb-1"
              >
                {metric.label}
              </ResponsiveText>
              
              <ResponsiveText
                mobileSize={isXs ? "text-xs" : "text-xs"}
                tabletSize="text-sm"
                desktopSize="text-base"
                className="text-muted-foreground"
              >
                {metric.description}
              </ResponsiveText>
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Metrics 