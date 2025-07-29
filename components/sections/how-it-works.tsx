'use client'

import { memo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const HowItWorks = memo(function HowItWorks() {
  const { isMobile, isXs } = useResponsive()

  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Integrate with your existing systems and data sources seamlessly",
      icon: "🔗"
    },
    {
      number: "02", 
      title: "Configure",
      description: "Set up AI agents and models tailored to your specific use cases",
      icon: "⚙️"
    },
    {
      number: "03",
      title: "Automate",
      description: "Watch as AI handles complex tasks and processes automatically",
      icon: "🤖"
    },
    {
      number: "04",
      title: "Scale",
      description: "Grow your operations with intelligent automation that adapts",
      icon: "📈"
    }
  ]

  return (
    <section className={`${isXs ? 'py-12' : 'py-16 md:py-24'} bg-gradient-to-b from-background to-muted/20 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--primary) / 0.1) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary) / 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary) / 0.1) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary) / 0.1) 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>
      
      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={`text-center ${isXs ? 'mb-8' : 'mb-12 md:mb-16'}`}>
          <Badge variant="outline" className={`${isXs ? 'mb-3' : 'mb-4 md:mb-6'} border-foreground/20 text-foreground font-medium bg-background/50 backdrop-blur-sm`}>
            HOW IT WORKS
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
            tabletSize="text-3xl"
            desktopSize="text-4xl"
            className="font-bold text-foreground mb-4 tracking-tight"
          >
            Simple{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              4-Step Process
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize={isXs ? "text-sm" : "text-base"}
            tabletSize="text-lg"
            desktopSize="text-xl"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Get started with AI automation in minutes, not months
          </ResponsiveText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`${isXs ? 'p-4' : 'p-6 md:p-8'} text-center bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group`}
            >
              <div className={`${isXs ? 'text-3xl' : 'text-4xl md:text-5xl'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              <div className="text-sm font-mono text-primary mb-3 opacity-80">
                {step.number}
              </div>
              
              <ResponsiveText
                mobileSize={isXs ? "text-base" : "text-lg"}
                tabletSize="text-xl"
                desktopSize="text-2xl"
                className="font-bold text-foreground mb-3"
              >
                {step.title}
              </ResponsiveText>
              
              <ResponsiveText
                mobileSize={isXs ? "text-xs" : "text-sm"}
                tabletSize="text-base"
                desktopSize="text-lg"
                className="text-muted-foreground leading-relaxed"
              >
                {step.description}
              </ResponsiveText>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        {!isMobile && (
          <div className="hidden lg:block mt-8">
            <div className="flex justify-center items-center space-x-4">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-primary/50 to-primary/30"></div>
                  {index < steps.length - 1 && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </ResponsiveContainer>
    </section>
  )
})

export default HowItWorks 