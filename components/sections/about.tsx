'use client'

import { Badge } from "@/components/ui/badge"
import { Building2, Zap } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'

const features = [
  {
    title: "Advanced Research",
    description: "Pushing the boundaries of what's possible with AI"
  },
  {
    title: "Enterprise Integration", 
    description: "Seamless deployment into existing systems"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your organization"
  }
]

export default function About() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section id="about" className={`${isMobile ? 'py-16' : 'py-24'}`}>
             <ResponsiveContainer maxWidth="responsive">
        {/* Mobile: Single Column Layout */}
        <Show below="lg">
          <div className="space-y-8 md:space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 md:mb-6 border-foreground text-foreground font-medium">
                Research-Driven
              </Badge>
              <ResponsiveText
                as="h2"
                mobileSize="text-3xl"
                tabletSize="text-4xl"
                desktopSize="text-4xl lg:text-5xl"
                className="font-medium text-foreground mb-6 md:mb-8 tracking-tight"
              >
                Built for Enterprise Scale
              </ResponsiveText>
              <ResponsiveText
                mobileSize="text-base"
                tabletSize="text-lg"
                desktopSize="text-lg"
                className="text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light"
              >
                At Shinka, we combine cutting-edge AI research with practical enterprise solutions. Our team of
                researchers and engineers work together to create AI products that don't just work in theory, but
                deliver real value in production environments.
              </ResponsiveText>
              <div className="flex items-center justify-center space-x-6 md:space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-base"
                    className="text-foreground font-medium"
                  >
                    Enterprise-Ready
                  </ResponsiveText>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-base"
                    className="text-foreground font-medium"
                  >
                    Production-Tested
                  </ResponsiveText>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="space-y-6 md:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                    <div>
                      <ResponsiveText
                        mobileSize="text-base"
                        tabletSize="text-lg"
                        desktopSize="text-lg"
                        className="font-medium text-foreground mb-1 md:mb-2"
                      >
                        {feature.title}
                      </ResponsiveText>
                      <ResponsiveText
                        mobileSize="text-sm"
                        tabletSize="text-base"
                        desktopSize="text-base"
                        className="text-muted-foreground font-light"
                      >
                        {feature.description}
                      </ResponsiveText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Show>

        {/* Desktop: Two Column Layout */}
        <Show above="lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-foreground text-foreground font-medium">
                Research-Driven
              </Badge>
              <ResponsiveText
                as="h2"
                desktopSize="text-4xl lg:text-5xl"
                className="font-medium text-foreground mb-8 tracking-tight"
              >
                Built for Enterprise Scale
              </ResponsiveText>
              <ResponsiveText
                desktopSize="text-lg"
                className="text-muted-foreground mb-8 leading-relaxed font-light"
              >
                At Shinka, we combine cutting-edge AI research with practical enterprise solutions. Our team of
                researchers and engineers work together to create AI products that don't just work in theory, but
                deliver real value in production environments.
              </ResponsiveText>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-foreground" />
                  <span className="text-foreground font-medium">Enterprise-Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-foreground" />
                  <span className="text-foreground font-medium">Production-Tested</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground font-light">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Show>
      </ResponsiveContainer>
    </section>
  )
} 