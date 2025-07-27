'use client'

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
]

export default function Contact() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section id="contact" className={`${isMobile ? 'py-12' : 'py-24'} relative overflow-hidden`}>
      {/* Subtle background grid */}
      <div className={`absolute inset-0 ${isMobile ? 'opacity-3' : 'opacity-5'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '60px 60px'
        }} />
      </div>
      
      {/* Subtle accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <Badge variant="outline" className={`${isMobile ? 'mb-4' : 'mb-8'} border-foreground/20 text-foreground font-mono bg-accent/5 backdrop-blur-sm`}>
            CONTACT
          </Badge>
          
          <ResponsiveText
            as="h2"
            mobileSize="text-2xl"
            tabletSize="text-4xl"
            desktopSize="text-5xl lg:text-6xl"
            className={`font-bold text-foreground ${isMobile ? 'mb-4' : 'mb-8'} tracking-tight font-mono`}
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
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-3 gap-8'}`}>
            {contactOptions.map((option, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-accent/10 rounded-xl ${isMobile ? 'p-6' : 'p-8'} hover:border-accent/30 transition-all duration-500`}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`${isMobile ? 'w-12 h-12 mb-4' : 'w-16 h-16 mb-6'} bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 mx-auto`}>
                    <option.icon className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-accent`} />
                  </div>

                  {/* Content */}
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

                    {/* Action Button */}
                    {option.action && (
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

                    {/* Social Links */}
                    {option.socialLinks && (
                      <div className="flex items-center justify-center gap-4">
                        {option.socialLinks.map((social, socialIndex) => (
                          <a 
                            key={socialIndex}
                            href={social.href}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group/social"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
} 