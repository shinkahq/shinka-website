'use client'

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

export default function Hero() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section className={`${isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24 lg:py-32'}`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 md:mb-8 border-foreground text-foreground font-medium">
            <Sparkles className="w-3 h-3 mr-1" />
            Enterprise AI Solutions
          </Badge>
          
          <ResponsiveText
            as="h1"
            mobileSize="text-3xl"
            tabletSize="text-4xl lg:text-5xl"
            desktopSize="text-5xl lg:text-7xl"
            className="font-medium text-foreground mb-6 md:mb-8 tracking-tight leading-[0.9]"
          >
            AI Agents, Models,
            <br />
            <span className="text-foreground">Integrations & Automations</span>
            <br />
            <span className="text-foreground">For Enterprises</span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize="text-lg"
            tabletSize="text-xl"
            desktopSize="text-xl"
            className="text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We make enterprise processes 1000x more efficient with AI agents, models, integrations, and automations.
          </ResponsiveText>
        </div>
      </ResponsiveContainer>
    </section>
  )
} 