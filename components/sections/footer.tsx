'use client'

import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useResponsive from '@/lib/use-responsive'
import { ResponsiveContainer, ResponsiveText, Show } from '@/components/responsive'

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

const quickLinks = [
  { href: "/#services", label: "Solutions" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" }
]

export default function Footer() {
  const { isMobile, isTablet, isXs } = useResponsive()

  return (
    <footer className={`relative overflow-hidden bg-gradient-to-t from-background/95 to-background border-t border-accent/20 ${isXs ? 'py-8' : isMobile ? 'py-12' : 'py-16'}`}>
      {/* Subtle background grid */}
      <div className={`absolute inset-0 ${isXs ? 'opacity-1' : isMobile ? 'opacity-2' : 'opacity-3'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent) / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: isXs ? '20px 20px' : isMobile ? '30px 30px' : '40px 40px'
        }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        {/* Mobile: Stacked Layout */}
        <Show below="md">
          <div className="space-y-6 sm:space-y-8">
            {/* Logo and Brand */}
            <div className="text-center">
              <Link href="/" className="group inline-flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-300">
                <div className="relative">
                  <Image 
                    src="/shinka-logo.png" 
                    alt="Shinka" 
                    width={isXs ? 60 : 80} 
                    height={isXs ? 24 : 32} 
                    className={`${isXs ? 'h-5' : 'h-6'} w-auto group-hover:scale-105 transition-transform duration-300`} 
                  />
                  <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className={`text-foreground font-mono font-bold ${isXs ? 'text-base' : 'text-lg'} tracking-wide`}>
                    SHINKA
                  </span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-xs sm:text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact & Social */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <a 
                href="mailto:founders@shinkahq.com" 
                className="p-2 sm:p-3 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center pt-4 sm:pt-6 border-t border-accent/10">
              <ResponsiveText
                mobileSize={isXs ? "text-xs" : "text-xs"}
                className="text-muted-foreground font-light"
              >
                © 2025 Shinka. Building super-intelligence for the world and beyond.
              </ResponsiveText>
            </div>
          </div>
        </Show>

        {/* Desktop: Horizontal Layout */}
        <Show above="md">
          <div className="grid grid-cols-3 items-center gap-8">
            {/* Left: Logo and Brand */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center gap-3 hover:opacity-80 transition-all duration-300">
                <div className="relative">
                  <Image 
                    src="/shinka-logo.png" 
                    alt="Shinka" 
                    width={100} 
                    height={40} 
                    className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-mono font-bold text-xl tracking-wide">
                    SHINKA
                  </span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
              </Link>
            </div>

            {/* Center: Quick Links */}
            <div className="flex items-center justify-center gap-8">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
                >
                  <span>{link.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right: Contact & Social */}
            <div className="flex items-center justify-end gap-3">
              <a 
                href="mailto:founders@shinkahq.com" 
                className="p-2 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 pt-8 border-t border-accent/10 text-center">
            <div className="text-muted-foreground text-sm font-light">
              © 2025 Shinka. Building super-intelligence for the world and beyond.
            </div>
          </div>
        </Show>
      </ResponsiveContainer>
    </footer>
  )
} 