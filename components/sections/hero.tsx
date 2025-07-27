'use client'

import { memo } from 'react'
import { Badge } from "@/components/ui/badge"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const Hero = memo(function Hero() {
  const { isMobile, isTablet } = useResponsive()
  const paddingClass = isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24 lg:py-32'

  return (
    <section className={`${paddingClass} bg-gradient-to-b from-background to-muted/20`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 md:mb-8 border-foreground/20 text-foreground font-medium bg-background/50 backdrop-blur-sm">
            ENTERPRISE SOLUTIONS
          </Badge>
          
          <ResponsiveText
            as="h1"
            mobileSize="text-3xl"
            tabletSize="text-4xl lg:text-5xl"
            desktopSize="text-5xl lg:text-7xl"
            className="font-semibold text-foreground mb-6 md:mb-8 tracking-tight leading-[1.1]"
          >
            <span className="inline-block">
              <span className="text-primary font-bold">AI Agents</span>,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-bold">Models</span>,
            </span>
            <br />
            <span className="inline-block">
              <span className="text-primary/90 font-bold">Integrations</span> &{' '}
              <span className="text-foreground">Automations</span>
            </span>
            <br />
            <span className="text-muted-foreground font-medium">For Enterprises</span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize="text-lg"
            tabletSize="text-xl"
            desktopSize="text-2xl"
            className="text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We make enterprise processes{' '}
            <span className="font-semibold text-primary">1000x more efficient</span>{' '}
            with AI agents, models, integrations, and automations.
          </ResponsiveText>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Hero 