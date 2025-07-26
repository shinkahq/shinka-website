'use client'

import { useState, useCallback, memo } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import useResponsive from '@/lib/use-responsive'
import { Show } from '@/components/responsive'

// Memoized navigation items for performance
const navItems = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
] as const

// Memoized logo component with hydration-safe rendering
const Logo = memo(function Logo({ isMobile, isHydrated }: { isMobile: boolean; isHydrated: boolean }) {
  // Use desktop size during SSR/hydration to prevent mismatch
  const logoWidth = isHydrated ? (isMobile ? 100 : 120) : 120
  const logoHeight = isHydrated ? (isMobile ? 32 : 40) : 40
  const logoClass = isHydrated ? (isMobile ? 'h-6' : 'h-8') : 'h-8'
  const textClass = isHydrated ? (isMobile ? 'text-base' : 'text-lg') : 'text-lg'
  
  return (
    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <Image 
        src="/shinka-logo.png" 
        alt="Shinka" 
        width={logoWidth} 
        height={logoHeight} 
        className={`${logoClass} w-auto`}
        priority
      />
      <span className={`text-foreground font-normal ${textClass} tracking-tight`}>
        shinka
      </span>
    </Link>
  )
})

// Memoized navigation link component with better click handling
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
  
  // Handle hash links vs route links
  const isHashLink = href.startsWith('/#')
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick?.()
    
    // For hash links, handle cross-page navigation properly
    if (isHashLink) {
      e.preventDefault()
      const targetId = href.substring(2) // Remove '/#'
      
      // If we're already on the home page, just scroll to the section
      if (pathname === '/') {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        return
      }
      
      // If we're on a different page, navigate to home page first
      // Then scroll to the section after navigation completes
      router.push('/')
      
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to ensure page has loaded and DOM is ready
      
      return
    }
    
    // For route links, use router.push for faster navigation
    if (href !== window.location.pathname) {
      e.preventDefault()
      router.push(href)
    }
  }, [href, isHashLink, onClick, router, pathname])
  
  const linkClassName = `text-foreground/80 hover:text-foreground transition-colors font-medium ${
    isActive ? 'text-foreground' : ''
  } ${className}`
  
  if (isHashLink) {
    return (
      <a
        href={href}
        className={linkClassName}
        onClick={handleClick}
      >
        {label}
      </a>
    )
  }
  
  return (
    <Link
      href={href}
      className={linkClassName}
      onClick={handleClick}
      prefetch={true}
    >
      {label}
    </Link>
  )
})

// Enhanced Get in Touch button with same cross-page navigation logic
const GetInTouchButton = memo(function GetInTouchButton({ 
  onClick, 
  className = "" 
}: { 
  onClick?: () => void
  className?: string 
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    
    // If we're already on the home page, just scroll to contact
    if (pathname === '/') {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    
    // If we're on a different page, navigate to home first then scroll
    router.push('/')
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [router, pathname, onClick])
  
  const buttonClass = `bg-foreground hover:bg-foreground/90 text-background font-medium ${className}`
  
  return (
    <Button className={buttonClass}>
      <a href="/#contact" className="text-background hover:text-background" onClick={handleClick}>
        Get in Touch
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
    if (href.startsWith('/#')) return false // Hash links are handled by scrolling
    return pathname === href
  }, [pathname])

  // Close mobile menu when clicking outside
  const handleBackdropClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo isMobile={isMobile} isHydrated={isHydrated} />
            </div>

            {/* Desktop Navigation - Show by default for SSR */}
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
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <GetInTouchButton />
                </div>
              </div>
            </Show>

            {/* Mobile Menu Button - Hidden by default for SSR */}
            <Show below="md" fallback="hide">
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={handleMenuToggle}
                  className="p-2 text-foreground hover:text-foreground/80 transition-colors"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </Show>
          </div>

          {/* Mobile Navigation Menu - Only show after hydration and when menu is open */}
          <Show below="md" fallback="hide">
            {isMenuOpen && (
              <div className="border-t border-border/50 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={isActive(item.href)}
                    onClick={handleMenuClose}
                    className="block py-2"
                  />
                ))}
                <GetInTouchButton onClick={handleMenuClose} className="w-full mt-4" />
              </div>
            )}
          </Show>
        </div>
      </nav>

      {/* Mobile menu backdrop - Only show after hydration and when menu is open */}
      {isHydrated && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
    </>
  )
}  