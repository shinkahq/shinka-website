'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Bot, Workflow, Zap, ChevronRight } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, ResponsiveGrid } from '@/components/responsive'

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that analyze financial documents, monitor transactions, detect anomalies, and automate compliance workflows across enterprise systems."
  },
  {
    icon: Workflow,
    title: "AI Models",
    description: "Custom models for detecting financial fraud, analyzing legal contracts, predicting market risks, and identifying regulatory violations with industry-specific training."
  },
  {
    icon: Zap,
    title: "Integrations & Automations",
    description: "Seamless integration with Bloomberg, Salesforce, SAP, and legacy banking systems. End-to-end automation for AML screening, trade settlement, quality control, and regulatory submissions."
  }
]

export default function Services() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section id="services" className={`${isMobile ? 'py-16' : 'py-24'} bg-muted/30`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center mb-12 md:mb-20">
          <ResponsiveText
            as="h2"
            mobileSize="text-3xl"
            tabletSize="text-4xl"
            desktopSize="text-4xl lg:text-5xl"
            className="font-medium text-foreground mb-4 md:mb-6 tracking-tight"
          >
            What We Build
          </ResponsiveText>
          <ResponsiveText
            mobileSize="text-base"
            tabletSize="text-lg"
            desktopSize="text-lg"
            className="text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Solving enterprise problems with AI across Private Equity, Banking, Pharma, Supply Chain & more
          </ResponsiveText>
        </div>

        <ResponsiveGrid
          cols={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="responsive"
        >
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border/50 shadow-sm bg-background hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className={`${isMobile ? 'p-6' : 'p-8'}`}>
                <div className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center ${isMobile ? 'mb-4' : 'mb-6'} group-hover:bg-muted/80 transition-colors`}>
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <ResponsiveText
                  as="h3"
                  mobileSize="text-lg"
                  tabletSize="text-xl"
                  desktopSize="text-xl"
                  className="font-medium text-foreground mb-3 md:mb-4"
                >
                  {service.title}
                </ResponsiveText>
                <ResponsiveText
                  mobileSize="text-sm"
                  tabletSize="text-base"
                  desktopSize="text-base"
                  className="text-muted-foreground leading-relaxed font-light mb-4 md:mb-6"
                >
                  {service.description}
                </ResponsiveText>
                <div className="flex items-center text-foreground font-medium">
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-base"
                  >
                    Learn more
                  </ResponsiveText>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </ResponsiveContainer>
    </section>
  )
} 