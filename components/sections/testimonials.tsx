'use client'

import { memo } from 'react'
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const Testimonials = memo(function Testimonials() {
  const { isMobile } = useResponsive()

  const testimonials = [
    {
      quote: "Shinka's AI agents transformed our customer service operations. We've seen a 95% reduction in response times and significantly improved customer satisfaction.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc.",
      avatar: "👩‍💼"
    },
    {
      quote: "The integration was seamless and the results were immediate. Our team can now focus on strategic work while AI handles the routine tasks.",
      author: "Michael Rodriguez",
      role: "VP of Operations",
      company: "DataCorp",
      avatar: "👨‍💼"
    },
    {
      quote: "We've achieved 1000x efficiency gains in our data processing workflows. Shinka's platform is truly revolutionary for enterprise automation.",
      author: "Dr. Emily Watson",
      role: "Head of AI",
      company: "InnovateLabs",
      avatar: "👩‍🔬"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
        }} />
      </div>
      
      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 border-foreground/20 text-foreground font-medium bg-background/50 backdrop-blur-sm">
            TESTIMONIALS
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-3xl"
            desktopSize="text-4xl"
            className="font-bold text-foreground mb-4 tracking-tight"
          >
            Loved by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Industry Leaders
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize="text-base"
            tabletSize="text-lg"
            desktopSize="text-xl"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            See how leading companies are transforming their operations with our AI solutions
          </ResponsiveText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex flex-col h-full">
                {/* Quote */}
                <div className="flex-grow">
                  <div className="text-2xl text-primary/60 mb-4">"</div>
                  <ResponsiveText
                    mobileSize="text-sm"
                    tabletSize="text-base"
                    desktopSize="text-lg"
                    className="text-foreground leading-relaxed mb-6 italic"
                  >
                    {testimonial.quote}
                  </ResponsiveText>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="text-2xl md:text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <ResponsiveText
                      mobileSize="text-sm"
                      tabletSize="text-base"
                      desktopSize="text-lg"
                      className="font-semibold text-foreground"
                    >
                      {testimonial.author}
                    </ResponsiveText>
                    <ResponsiveText
                      mobileSize="text-xs"
                      tabletSize="text-sm"
                      desktopSize="text-base"
                      className="text-muted-foreground"
                    >
                      {testimonial.role}, {testimonial.company}
                    </ResponsiveText>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 text-center">
          <ResponsiveText
            mobileSize="text-sm"
            tabletSize="text-base"
            desktopSize="text-lg"
            className="text-muted-foreground mb-6"
          >
            Trusted by Fortune 500 companies and startups alike
          </ResponsiveText>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-foreground/40">Fortune 500</div>
            <div className="text-2xl font-bold text-foreground/40">YC Alumni</div>
            <div className="text-2xl font-bold text-foreground/40">Tech Leaders</div>
            <div className="text-2xl font-bold text-foreground/40">AI Pioneers</div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Testimonials 