'use client'

import { memo, useMemo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const industries = [
  {
    title: "Private Equity",
    description: "Slow deal sourcing, liquidity bottlenecks, operational complexity?",
    solutions: [
      "Automated deal sourcing from financial datasets",
      "AI-powered document analysis and insights",
      "Real-time portfolio performance monitoring"
    ]
  },
  {
    title: "Banking",
    description: "Regulatory compliance, customer loyalty, fraud detection?",
    solutions: [
      "AI-powered risk assessment and fraud prevention",
      "AI agents for 24/7 intelligent assistance",
      "Automated KYC and compliance checks"
    ]
  },
  {
    title: "Pharmaceutical",
    description: "Rising R&D costs, regulatory complexity, supply chain disruptions?",
    solutions: [
      "AI-accelerated drug discovery and target identification",
      "Adaptive clinical trial design and monitoring",
      "Automated regulatory dossier assembly"
    ]
  },
  {
    title: "Supply Chain",
    description: "Material shortages, forecasting errors, inventory management inefficiencies?",
    solutions: [
      "AI-driven order processing and workflow automation",
      "Intelligent order fulfillment optimization",
      "Automated operational efficiency improvements",
      "Cost reduction through AI-powered management"
    ]
  }
] as const

const IndustryModule = memo(function IndustryModule({ industry, index }: { industry: typeof industries[0], index: number }) {
  const { isMobile } = useResponsive()
  
  const containerClass = useMemo(() => 
    `group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-accent/10 rounded-xl ${isMobile ? 'p-4' : 'p-6'} hover:border-accent/30 transition-all duration-500`, 
    [isMobile]
  )
  
  return (
    <div className={containerClass}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-start justify-between mb-4">
        <ResponsiveText
          as="h3"
          mobileSize="text-lg"
          tabletSize="text-xl"
          desktopSize="text-xl"
          className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
        >
          {industry.title}
        </ResponsiveText>
        <ArrowUpRight className="w-5 h-5 text-accent/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
      
      <ResponsiveText
        mobileSize="text-sm"
        tabletSize="text-base"
        desktopSize="text-base"
        className="text-muted-foreground leading-relaxed mb-6"
      >
        {industry.description}
      </ResponsiveText>
      
      <div className="space-y-3">
        {industry.solutions.map((solution, solutionIndex) => (
          <div key={solutionIndex} className="group/item flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent/50 to-accent/70 mt-2 group-hover/item:from-accent group-hover/item:to-accent transition-all duration-300 flex-shrink-0" />
            <ResponsiveText
              mobileSize="text-xs"
              tabletSize="text-sm"
              desktopSize="text-sm"
              className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300 flex-1"
            >
              {solution}
            </ResponsiveText>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
})

const Industries = memo(function Industries() {
  const { isMobile } = useResponsive()

  const sectionClass = useMemo(() => 
    `${isMobile ? 'py-12' : 'py-24'} relative overflow-hidden`, 
    [isMobile]
  )
  
  const headerClass = useMemo(() => 
    `text-center ${isMobile ? 'mb-12' : 'mb-20'}`, 
    [isMobile]
  )
  
  const badgeClass = useMemo(() => 
    `${isMobile ? 'mb-4' : 'mb-8'} border-foreground/20 text-foreground font-mono bg-accent/5 backdrop-blur-sm`, 
    [isMobile]
  )
  
  const headingClass = useMemo(() => 
    `font-bold text-foreground ${isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`, 
    [isMobile]
  )
  
  const backgroundClass = useMemo(() => 
    `absolute inset-0 ${isMobile ? 'opacity-3' : 'opacity-5'}`, 
    [isMobile]
  )
  
  const backgroundSize = useMemo(() => 
    isMobile ? '40px 40px' : '60px 60px', 
    [isMobile]
  )
  
  const backgroundImage = useMemo(() => 
    `linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)`, 
    []
  )

  return (
    <section className={sectionClass}>
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
            INDUSTRIES
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={headingClass}
          >
            INDUSTRY{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-accent">
                CHALLENGES
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize="text-base"
            tabletSize="text-lg"
            desktopSize="text-xl"
            className="text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Real{' '}
            <span className="text-accent font-semibold">problems</span>.{' '}
            Real{' '}
            <span className="text-accent font-semibold">solutions</span>.
          </ResponsiveText>
        </div>

        <Show below="lg">
          <div className="space-y-6">
            {industries.map((industry, index) => (
              <IndustryModule key={index} industry={industry} index={index} />
            ))}
          </div>
        </Show>

        <Show above="lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {industries.slice(0, 2).map((industry, index) => (
                <IndustryModule key={index} industry={industry} index={index} />
              ))}
            </div>
            <div className="space-y-8">
              {industries.slice(2, 4).map((industry, index) => (
                <IndustryModule key={index + 2} industry={industry} index={index + 2} />
              ))}
            </div>
          </div>
        </Show>
      </ResponsiveContainer>
    </section>
  )
})

export default Industries 