'use client'

import { useState, useCallback, memo } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import useResponsive from '@/lib/use-responsive'
import { Show } from '@/components/responsive'

// Navigation items (removed code numbers for clarity)
const navItems = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Solutions" },
  { href: "/#team", label: "Team" },
] as const

// Logo component
const Logo = memo(function Logo({ isMobile, isHydrated }: { isMobile: boolean; isHydrated: boolean }) {
  const logoWidth = isHydrated ? (isMobile ? 100 : 120) : 120
  const logoHeight = isHydrated ? (isMobile ? 32 : 40) : 40
  const logoClass = isHydrated ? (isMobile ? 'h-6' : 'h-8') : 'h-8'
  const textClass = isHydrated ? (isMobile ? 'text-base' : 'text-lg') : 'text-lg'
  
  return (
    <Link href="/" className="group flex items-center space-x-3 hover:opacity-80 transition-all duration-300">
      <div className="relative">
        <Image 
          src="/shinka-logo.png" 
          alt="Shinka" 
          width={logoWidth} 
          height={logoHeight} 
          className={`${logoClass} w-auto group-hover:scale-105 transition-transform duration-300`}
          priority
        />
        <div className="absolute -inset-1 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-foreground font-mono font-bold ${textClass} tracking-wide`}>
          SHINKA
        </span>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
      </div>
    </Link>
  )
})

// Navigation link component (no code numbers)
const NavLink = memo(function NavLink({ 
  href, 
  label,
  isActive, 
  onClick,
  className = ""
}: { 
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  className?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const isHashLink = href.startsWith('/#')
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick?.()
    
    if (isHashLink) {
      e.preventDefault()
      const targetId = href.substring(2)
      
      if (pathname === '/') {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        return
      }
      
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    }
    
    if (href !== window.location.pathname) {
      e.preventDefault()
      router.push(href)
    }
  }, [href, isHashLink, onClick, router, pathname])
  
  const linkClassName = `group relative flex items-center gap-2 font-mono text-sm font-medium transition-all duration-300 ${
    isActive 
      ? 'text-accent' 
      : 'text-foreground/70 hover:text-accent'
  } ${className}`
  
  const linkContent = (
    <>
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        {label}
      </span>
      {isActive && (
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
      )}
      <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
    </>
  )
  
  if (isHashLink) {
    return (
      <a href={href} className={linkClassName} onClick={handleClick}>
        {linkContent}
      </a>
    )
  }
  
  return (
    <Link href={href} className={linkClassName} onClick={handleClick} prefetch={true}>
      {linkContent}
    </Link>
  )
})

// Get in Touch button with clear label
const GetInTouchButton = memo(function GetInTouchButton({ 
  onClick, 
  className = "",
  isMobile = false
}: { 
  onClick?: () => void
  className?: string
  isMobile?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    
    if (pathname === '/') {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    
    router.push('/')
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [router, pathname, onClick])
  
  const buttonClass = `group relative bg-accent hover:bg-accent/90 text-accent-foreground font-mono font-medium border border-accent/20 hover:border-accent/40 transition-all duration-300 ${className}`
  
  return (
    <Button className={buttonClass}>
      <a 
        href="/#contact" 
        className="flex items-center gap-2 text-accent-foreground hover:text-accent-foreground" 
        onClick={handleClick}
      >
        <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {isMobile ? 'Contact' : 'Get in Touch'}
        </span>
      </a>
    </Button>
  )
})

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMobile, isHydrated } = useResponsive()
  const pathname = usePathname()

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const isActive = useCallback((href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false
    return pathname === href
  }, [pathname])

  const handleBackdropClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      {/* Navigation bar */}
      <nav className="relative border-b border-accent/20 bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-xl sticky top-0 z-50">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo isMobile={isMobile} isHydrated={isHydrated} />
            </div>

            {/* Desktop Navigation */}
            <Show above="md" fallback="show">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={isActive(item.href)}
                  />
                ))}
                <div className="flex items-center space-x-3">
                  <div className="w-[1px] h-6 bg-accent/20" />
                  <ThemeToggle />
                  <GetInTouchButton />
                </div>
              </div>
            </Show>

            {/* Mobile Menu Button */}
            <Show below="md" fallback="hide">
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <button
                  onClick={handleMenuToggle}
                  className="relative p-2 text-foreground hover:text-accent transition-colors duration-300 border border-accent/20 rounded-lg hover:border-accent/40 bg-accent/5 hover:bg-accent/10"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  <div className="absolute inset-0 bg-accent/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </div>
            </Show>
          </div>

          {/* Mobile Navigation Menu */}
          <Show below="md" fallback="hide">
            {isMenuOpen && (
              <div className="border-t border-accent/20 py-6 space-y-4 animate-in slide-in-from-top-2 duration-300 bg-gradient-to-b from-background/95 to-background/90">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={isActive(item.href)}
                    onClick={handleMenuClose}
                    className="block py-3 px-2"
                  />
                ))}
                
                <div className="pt-4 border-t border-accent/10">
                  <GetInTouchButton 
                    onClick={handleMenuClose} 
                    className="w-full" 
                    isMobile={true}
                  />
                </div>
              </div>
            )}
          </Show>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </nav>

      {/* Mobile menu backdrop */}
      {isHydrated && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
    </>
  )
}  