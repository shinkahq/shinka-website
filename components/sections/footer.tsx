'use client'

import { Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

const quickLinks = [
  { href: "/#services", label: "Solutions" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" }
]

export default function Footer() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <footer className={`relative overflow-hidden bg-gradient-to-t from-background/95 to-background border-t border-accent/20 ${isMobile ? 'py-12' : 'py-16'}`}>
      {/* Subtle background grid */}
      <div className={`absolute inset-0 ${isMobile ? 'opacity-2' : 'opacity-3'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent) / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '30px 30px' : '40px 40px'
        }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <ResponsiveContainer maxWidth="responsive" className="relative z-10">
        {/* Mobile: Stacked Layout */}
        <Show below="md">
          <div className="space-y-8">
            {/* Logo and Brand */}
            <div className="text-center">
              <Link href="/" className="group inline-flex items-center gap-3 hover:opacity-80 transition-all duration-300">
                <div className="relative">
                  <Image 
                    src="/shinka-logo.png" 
                    alt="Shinka" 
                    width={80} 
                    height={32} 
                    className="h-6 w-auto group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-mono font-bold text-lg tracking-wide">
                    SHINKA
                  </span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-center gap-6">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact & Social */}
            <div className="flex items-center justify-center gap-4">
              <a 
                href="mailto:ayushbodade1@gmail.com" 
                className="p-3 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
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
                  className="p-3 bg-accent/5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-accent/10">
              <ResponsiveText
                mobileSize="text-xs"
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
                href="mailto:ayushbodade1@gmail.com" 
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