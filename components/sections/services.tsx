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
    <section id="services" className={`${isMobile ? 'py-16' : 'py-24'} bg-background/50 backdrop-blur-sm border-y border-accent/10`}>
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
              className="group border-accent/10 bg-background/80 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
            >
              <CardContent className={`${isMobile ? 'p-6' : 'p-8'} relative`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-accent/10" />
                
                <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-500`}>
                  <service.icon className="h-6 w-6 text-accent transition-colors duration-500" />
                </div>

                <ResponsiveText
                  as="h3"
                  mobileSize="text-lg"
                  tabletSize="text-xl"
                  desktopSize="text-xl"
                  className="font-medium text-foreground mb-3 md:mb-4 relative"
                >
                  {service.title}
                </ResponsiveText>

                <ResponsiveText
                  mobileSize="text-sm"
                  tabletSize="text-base"
                  desktopSize="text-base"
                  className="text-muted-foreground leading-relaxed font-light mb-6 relative"
                >
                  {service.description}
                </ResponsiveText>

                <div className="flex items-center text-accent font-medium relative">
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-base"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn more
                  </ResponsiveText>
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </ResponsiveContainer>
    </section>
  )
} 