'use client'

import { memo } from 'react'
import { Button } from "@/components/ui/button"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const Hero = memo(function Hero() {
  const { isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()
  const paddingClass = isXs ? 'py-12' : isMobile ? 'py-16' : isTablet ? 'py-20' : is3Xl ? 'py-32' : is4Xl ? 'py-40' : is5Xl ? 'py-48' : 'py-24 lg:py-32'

  return (
    <section className={`${paddingClass} bg-gradient-to-b from-background to-muted/20`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center">
          <ResponsiveText
            as="h1"
            mobileSize={isXs ? "text-2xl" : "text-3xl"}
            tabletSize="text-4xl lg:text-5xl"
            desktopSize={is3Xl ? "text-6xl lg:text-7xl" : is4Xl ? "text-7xl lg:text-8xl" : is5Xl ? "text-8xl lg:text-9xl" : "text-5xl lg:text-7xl"}
            className="font-semibold text-foreground mb-4 sm:mb-6 md:mb-8 3xl:mb-12 4xl:mb-16 5xl:mb-20 tracking-tight leading-[1.1]"
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
            mobileSize={isXs ? "text-base" : "text-lg"}
            tabletSize="text-xl"
            desktopSize={is3Xl ? "text-2xl" : is4Xl ? "text-3xl" : is5Xl ? "text-4xl" : "text-2xl"}
            className="text-muted-foreground mb-6 sm:mb-8 md:mb-12 3xl:mb-16 4xl:mb-20 5xl:mb-24 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We make enterprise processes{' '}
            <span className="font-semibold text-primary">1000x more efficient</span>{' '}
            with AI agents, models, integrations, and automations.
          </ResponsiveText>

          {/* Clear CTA Button */}
          <div className="flex justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="px-6 sm:px-8 3xl:px-12 4xl:px-16 5xl:px-20 py-2 sm:py-3 3xl:py-4 4xl:py-6 5xl:py-8 text-base sm:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="#contact" className="scroll-smooth">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Hero 