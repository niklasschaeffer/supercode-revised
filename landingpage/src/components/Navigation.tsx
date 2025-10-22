import { Button } from '@/components/ui/button'
import { Zap, Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm' 
        : 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40'
    }`}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a 
            className="mr-6 flex items-center space-x-2" 
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
          >
            <Zap className="h-6 w-6" />
            <span className="font-bold">SuperCode</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a 
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => !item.external && handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </Button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Button 
                key={item.href} 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                asChild
              >
                <a 
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => !item.external && handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </nav>
  )
}