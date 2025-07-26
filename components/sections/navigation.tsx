'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import useResponsive from '@/lib/use-responsive'
import { Show } from '@/components/responsive'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMobile } = useResponsive()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "/founder", label: "Founder" },
  ]

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/shinka-logo.png" 
                alt="Shinka" 
                width={isMobile ? 100 : 120} 
                height={isMobile ? 32 : 40} 
                className={`${isMobile ? 'h-6' : 'h-8'} w-auto`} 
              />
              <span className={`text-foreground font-normal ${isMobile ? 'text-base' : 'text-lg'} tracking-tight`}>
                shinka
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <Show above="md">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                <a href="#contact" className="text-background hover:text-background">
                  Get in Touch
                </a>
              </Button>
            </div>
          </Show>

          {/* Mobile Menu Button */}
          <Show below="md">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-foreground/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </Show>
        </div>

        {/* Mobile Navigation Menu */}
        <Show below="md">
          {isMenuOpen && (
            <div className="border-t border-border/50 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact" className="text-background hover:text-background">
                  Get in Touch
                </a>
              </Button>
            </div>
          )}
        </Show>
      </div>
    </nav>
  )
} 