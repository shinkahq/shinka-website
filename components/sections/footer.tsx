'use client'

import { Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'

const socialLinks = [
  {
    href: "https://x.com/shinkahq",
    icon: Twitter,
    label: "Twitter"
  },
  {
    href: "https://linkedin.com/company/shinkahq", 
    icon: Linkedin,
    label: "LinkedIn"
  }
]

export default function Footer() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <footer className="border-t border-border/30 py-6 md:py-8">
             <ResponsiveContainer maxWidth="responsive">
        {/* Mobile: Stacked Layout */}
        <Show below="md">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Image 
                src="/shinka-logo.png" 
                alt="Shinka" 
                width={60} 
                height={24} 
                className="h-5 w-auto" 
              />
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:ayushbodade1@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm flex items-center justify-center"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <ResponsiveText
                mobileSize="text-xs"
                className="text-muted-foreground font-light"
              >
                © 2025 Shinka. Building super-intelligence for the world and beyond.
              </ResponsiveText>
            </div>
          </div>
        </Show>

        {/* Tablet & Desktop: Horizontal Layout */}
        <Show above="md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image 
                src="/shinka-logo.png" 
                alt="Shinka" 
                width={80} 
                height={32} 
                className="h-6 w-auto" 
              />
              <a 
                href="mailto:ayushbodade1@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-muted-foreground text-sm font-light">
              © 2025 Shinka. Building super-intelligence for the world and beyond.
            </div>
          </div>
        </Show>
      </ResponsiveContainer>
    </footer>
  )
} 