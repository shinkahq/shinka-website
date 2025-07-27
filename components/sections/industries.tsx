'use client'

import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'
import { ArrowUpRight } from 'lucide-react'

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
]

function IndustryCard({ industry, index }: { industry: typeof industries[0], index: number }) {
  const { isMobile } = useResponsive()
  
  return (
    <div className="group relative border border-accent/10 rounded-2xl p-6 md:p-8 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent/10" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <ResponsiveText
            as="h3"
            mobileSize="text-xl"
            tabletSize="text-2xl"
            desktopSize="text-2xl"
            className="font-medium text-foreground group-hover:text-accent transition-colors duration-300"
          >
            {industry.title}
          </ResponsiveText>
          <ArrowUpRight className="w-5 h-5 text-accent/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        
        <ResponsiveText
          mobileSize="text-sm"
          tabletSize="text-base"
          desktopSize="text-base"
          className="text-muted-foreground mb-6 md:mb-8 font-light"
        >
          {industry.description}
        </ResponsiveText>
        
        <div className="space-y-3 md:space-y-4">
          {industry.solutions.map((solution, solutionIndex) => (
            <div 
              key={solutionIndex} 
              className="flex items-center space-x-3 group/item"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent/40 to-accent/60 group-hover/item:from-accent group-hover/item:to-accent transition-all duration-300"></div>
              <ResponsiveText
                mobileSize="text-xs"
                tabletSize="text-sm"
                desktopSize="text-sm"
                className="text-muted-foreground font-light group-hover/item:text-foreground transition-colors duration-300"
              >
                {solution}
              </ResponsiveText>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

export default function Industries() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section className={`${isMobile ? 'py-16' : 'py-24'} bg-background/50 backdrop-blur-sm border-y border-accent/10`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center mb-12 md:mb-20">
          <ResponsiveText
            as="h2"
            mobileSize="text-3xl"
            tabletSize="text-4xl"
            desktopSize="text-4xl lg:text-5xl"
            className="font-medium text-foreground mb-4 md:mb-6 tracking-tight"
          >
            Industry Challenges
          </ResponsiveText>
          <ResponsiveText
            mobileSize="text-base"
            tabletSize="text-lg"
            desktopSize="text-lg"
            className="text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Real problems. Real solutions.
          </ResponsiveText>
        </div>

        {/* Mobile: Single Column Layout */}
        <Show below="lg">
          <div className="space-y-6 md:space-y-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} index={index} />
            ))}
          </div>
        </Show>

        {/* Desktop: Two Column Layout */}
        <Show above="lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {industries.slice(0, 2).map((industry, index) => (
                <IndustryCard key={index} industry={industry} index={index} />
              ))}
            </div>
            <div className="space-y-8">
              {industries.slice(2, 4).map((industry, index) => (
                <IndustryCard key={index + 2} industry={industry} index={index + 2} />
              ))}
            </div>
          </div>
        </Show>
      </ResponsiveContainer>
    </section>
  )
} 