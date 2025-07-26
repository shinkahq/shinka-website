'use client'

import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'

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
    <div className="border-b border-border/30 pb-6 md:pb-8">
      <ResponsiveText
        as="h3"
        mobileSize="text-xl"
        tabletSize="text-2xl"
        desktopSize="text-2xl"
        className="font-medium text-foreground mb-3 md:mb-4"
      >
        {industry.title}
      </ResponsiveText>
      <ResponsiveText
        mobileSize="text-sm"
        tabletSize="text-base"
        desktopSize="text-base"
        className="text-muted-foreground mb-4 md:mb-6 font-light"
      >
        {industry.description}
      </ResponsiveText>
      <div className="space-y-2 md:space-y-3">
        {industry.solutions.map((solution, solutionIndex) => (
          <div key={solutionIndex} className="flex items-center space-x-3">
            <div className="w-1 h-1 bg-foreground rounded-full"></div>
            <ResponsiveText
              mobileSize="text-xs"
              tabletSize="text-sm"
              desktopSize="text-sm"
              className="text-muted-foreground font-light"
            >
              {solution}
            </ResponsiveText>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Industries() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section className={`${isMobile ? 'py-16' : 'py-24'}`}>
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
          <div className="space-y-8 md:space-y-12">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} index={index} />
            ))}
          </div>
        </Show>

        {/* Desktop: Two Column Layout */}
        <Show above="lg">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              {industries.slice(0, 2).map((industry, index) => (
                <IndustryCard key={index} industry={industry} index={index} />
              ))}
            </div>
            <div className="space-y-12">
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