'use client'

import { ArrowRight, Twitter, Linkedin } from "lucide-react"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText } from '@/components/responsive'

const contactOptions = [
  {
    title: "Consultation",
    description: "Schedule a call to discuss your AI needs",
    action: {
      text: "Book",
      href: "https://calendly.com/ayushbodade1/one-on-one",
      external: true
    }
  },
  {
    title: "Follow",
    description: "Updates and insights",
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
    <section id="contact" className={`${isMobile ? 'py-16' : 'py-24'} bg-background`}>
             <ResponsiveContainer maxWidth="2xl">
        <div className="space-y-12 md:space-y-16">
          {contactOptions.map((option, index) => (
            <div key={index} className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center justify-between'} group`}>
              <div className={isMobile ? 'text-center' : ''}>
                <ResponsiveText
                  as="h3"
                  mobileSize="text-2xl"
                  tabletSize="text-3xl"
                  desktopSize="text-3xl"
                  className="font-medium text-foreground mb-2 md:mb-3"
                >
                  {option.title}
                </ResponsiveText>
                <ResponsiveText
                  mobileSize="text-base"
                  tabletSize="text-lg"
                  desktopSize="text-lg"
                  className="text-muted-foreground font-light"
                >
                  {option.description}
                </ResponsiveText>
              </div>

              {/* Action Button */}
              {option.action && (
                <div className={isMobile ? 'text-center' : ''}>
                  <a 
                    href={option.action.href}
                    target={option.action.external ? "_blank" : undefined}
                    rel={option.action.external ? "noopener noreferrer" : undefined}
                    className={`${isMobile ? 'text-base' : 'text-lg'} text-foreground hover:opacity-70 transition-opacity font-light flex items-center ${isMobile ? 'justify-center' : ''}`}
                  >
                    {option.action.text} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </div>
              )}

              {/* Social Links */}
              {option.socialLinks && (
                <div className={`flex items-center ${isMobile ? 'justify-center space-x-8' : 'space-x-6'}`}>
                  {option.socialLinks.map((social, socialIndex) => (
                    <a 
                      key={socialIndex}
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className={`${isMobile ? 'h-6 w-6' : 'h-5 w-5'}`} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  )
} 