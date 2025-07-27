'use client'

import { memo, useMemo } from 'react'
import { ArrowRight, Twitter, Linkedin, Mail, Calendar, MessageSquare } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'
import { Badge } from '@/components/ui/badge'

const contactOptions = [
  {
    title: "Email",
    description: "Send us a message directly",
    icon: Mail,
    action: {
      text: "Send Message",
      href: "mailto:ayushbodade1@gmail.com",
      external: false
    }
  },
  {
    title: "Consultation", 
    description: "Schedule a call",
    icon: Calendar,
    action: {
      text: "Book Call",
      href: "https://calendly.com/ayushbodade1/one-on-one",
      external: true
    }
  },
  {
    title: "Follow",
    description: "Updates and insights",
    icon: MessageSquare,
    socialLinks: [
      {
        icon: Twitter,
        href: "https://x.com/shinkahq",
        label: "Twitter"
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/company/shinkahq",
        label: "LinkedIn"
      }
    ]
  }
] as const

type ContactOption = typeof contactOptions[number]

const Contact = memo(function Contact() {
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
  
  const gridClass = useMemo(() => 
    `${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-3 gap-8'}`, 
    [isMobile]
  )
  
  const cardClass = useMemo(() => 
    `group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-accent/10 rounded-xl ${isMobile ? 'p-6' : 'p-8'} hover:border-accent/30 transition-all duration-500`, 
    [isMobile]
  )

  return (
    <section id="contact" className={sectionClass}>
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
            CONTACT
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={headingClass}
          >
            GET IN{' '}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/90 to-accent">
                TOUCH
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
            Ready to{' '}
            <span className="text-accent font-semibold">transform</span>{' '}
            your enterprise with{' '}
            <span className="text-accent font-semibold">AI</span>?
          </ResponsiveText>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`grid ${gridClass}`}>
            {contactOptions.map((option, index) => (
              <div key={index} className={cardClass}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="text-center">
                    <ResponsiveText
                      as="h3"
                      mobileSize="text-lg"
                      tabletSize="text-xl"
                      desktopSize="text-xl"
                      className="font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300"
                    >
                      {option.title}
                    </ResponsiveText>
                    
                    <ResponsiveText
                      mobileSize="text-sm"
                      tabletSize="text-base"
                      desktopSize="text-base"
                      className="text-muted-foreground leading-relaxed mb-6"
                    >
                      {option.description}
                    </ResponsiveText>

                    {'action' in option && option.action && (
                      <a 
                        href={option.action.href}
                        target={option.action.external ? "_blank" : undefined}
                        rel={option.action.external ? "noopener noreferrer" : undefined}
                        className="group/link inline-flex items-center gap-2 text-accent font-medium hover:translate-x-1 transition-all duration-300"
                      >
                        <span>{option.action.text}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}

                    {'socialLinks' in option && option.socialLinks && (
                      <div className="flex justify-center gap-4 mt-6">
                        {option.socialLinks.map((social: any, socialIndex: number) => (
                          <a
                            key={socialIndex}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-300"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5 text-accent group-hover/social:scale-110 transition-transform duration-300" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Contact 