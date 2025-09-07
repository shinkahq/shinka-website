'use client'

import { memo } from 'react'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
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

const socialLinks = [
  {
    href: "https://x.com/shinkahq",
    icon: XIcon,
    label: "Twitter"
  },
  {
    href: "https://linkedin.com/company/shinkahq", 
    icon: LinkedinIcon,
    label: "LinkedIn"
  }
]

const Hero = memo(function Hero() {
  const { isMobile, isTablet, isXs, is3Xl, is4Xl, is5Xl } = useResponsive()
  const paddingClass = isXs ? 'py-12' : isMobile ? 'py-16' : isTablet ? 'py-20' : is3Xl ? 'py-32' : is4Xl ? 'py-40' : is5Xl ? 'py-48' : 'py-24 lg:py-32'

  return (
    <section className={`${paddingClass} bg-gradient-to-b from-background to-muted/20`}>
      <ResponsiveContainer maxWidth="responsive">
        <div className="text-center">
          <ResponsiveText
            as="h1"
            mobileSize={isXs ? "text-2xl" : "text-3xl"}
            tabletSize="text-4xl lg:text-5xl"
            desktopSize={is3Xl ? "text-6xl lg:text-7xl" : is4Xl ? "text-7xl lg:text-8xl" : is5Xl ? "text-8xl lg:text-9xl" : "text-5xl lg:text-7xl"}
            className="font-semibold text-foreground mb-4 sm:mb-6 md:mb-8 3xl:mb-12 4xl:mb-16 5xl:mb-20 tracking-tight leading-[1.1]"
          >
            <span className="inline-block">
              <span className="text-primary font-bold">AI Agents</span>,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-bold">Models</span>,
            </span>
            <br />
            <span className="inline-block">
              <span className="text-primary/90 font-bold">Integrations</span> &{' '}
              <span className="text-foreground">Automations</span>
            </span>
            <br />
            <span className="text-muted-foreground font-medium">For Enterprises</span>
          </ResponsiveText>
          
          <ResponsiveText
            mobileSize={isXs ? "text-base" : "text-lg"}
            tabletSize="text-xl"
            desktopSize={is3Xl ? "text-2xl" : is4Xl ? "text-3xl" : is5Xl ? "text-4xl" : "text-2xl"}
            className="text-muted-foreground mb-6 sm:mb-8 md:mb-12 3xl:mb-16 4xl:mb-20 5xl:mb-24 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We make enterprise processes{' '}
            <span className="font-semibold text-primary">1000x more efficient</span>{' '}
            with AI agents, models, integrations, and automations.
          </ResponsiveText>

          {/* Clear CTA Button */}
          <div className="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 3xl:mb-20 4xl:mb-24 5xl:mb-28">
            <Button 
              asChild
              size="lg" 
              className="px-6 sm:px-8 3xl:px-12 4xl:px-16 5xl:px-20 py-2 sm:py-3 3xl:py-4 4xl:py-6 5xl:py-8 text-base sm:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="#contact" className="scroll-smooth">
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12">
            {/* Email Icon */}
            <a 
              href="mailto:founders@shinkahq.com" 
              className="p-3 sm:p-4 3xl:p-5 4xl:p-6 5xl:p-7 bg-accent/5 rounded-xl border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group hover:scale-110"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 3xl:h-7 3xl:w-7 4xl:h-8 4xl:w-8 5xl:h-9 5xl:w-9 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            {/* Social Media Icons */}
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 sm:p-4 3xl:p-5 4xl:p-6 5xl:p-7 bg-accent/5 rounded-xl border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6 3xl:h-7 3xl:w-7 4xl:h-8 4xl:w-8 5xl:h-9 5xl:w-9 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
})

export default Hero 