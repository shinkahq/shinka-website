'use client'

import { memo, useMemo } from 'react'
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

// Custom LinkedIn Icon Component
const LinkedinIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// Custom X (Twitter) Icon Component
const XIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

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
        icon: XIcon,
        href: "https://x.com/shinkahq",
        label: "Twitter"
      },
      {
        icon: LinkedinIcon,
        href: "https://linkedin.com/company/shinkahq",
        label: "LinkedIn"
      }
    ]
  }
] as const

type ContactOption = typeof contactOptions[number]

const Contact = memo(function Contact() {
  const { isMobile, isXs } = useResponsive()

  const sectionClass = useMemo(() => 
    `${isXs ? 'py-8' : isMobile ? 'py-12' : 'py-24'} relative overflow-hidden`, 
    [isMobile, isXs]
  )
  
  const headerClass = useMemo(() => 
    `text-center ${isXs ? 'mb-8' : isMobile ? 'mb-12' : 'mb-20'}`, 
    [isMobile, isXs]
  )
  
  const headingClass = useMemo(() => 
    `font-bold text-foreground ${isXs ? 'mb-3' : isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`, 
    [isMobile, isXs]
  )
  
  const backgroundClass = useMemo(() => 
    `absolute inset-0 ${isXs ? 'opacity-2' : isMobile ? 'opacity-3' : 'opacity-5'}`, 
    [isMobile, isXs]
  )
  
  const backgroundSize = useMemo(() => 
    isXs ? '30px 30px' : isMobile ? '40px 40px' : '60px 60px', 
    [isMobile, isXs]
  )
  
  const backgroundImage = useMemo(() => 
    `linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)`, 
    []
  )
  
  const gridClass = useMemo(() => 
    `${isXs ? 'grid-cols-1 gap-4' : isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-3 gap-8'}`, 
    [isMobile, isXs]
  )
  
  const cardClass = useMemo(() => 
    `group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-accent/10 rounded-xl ${isXs ? 'p-4' : isMobile ? 'p-6' : 'p-8'} hover:border-accent/30 transition-all duration-500`, 
    [isMobile, isXs]
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
          
          <ResponsiveText
            as="h2"
            mobileSize={isXs ? "text-xl" : "text-2xl"}
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
                      mobileSize={isXs ? "text-base" : "text-lg"}
                      tabletSize="text-xl"
                      desktopSize="text-xl"
                      className="font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300"
                    >
                      {option.title}
                    </ResponsiveText>
                    
                    <ResponsiveText
                      mobileSize={isXs ? "text-xs" : "text-sm"}
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
                      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
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