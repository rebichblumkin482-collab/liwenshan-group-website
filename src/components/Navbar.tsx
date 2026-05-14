import { useState, useEffect } from 'react'
import { navItems, siteConfig } from '../data/site'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => setActive(window.location.hash || '#/')
    window.addEventListener('hashchange', update)
    update()
    return () => window.removeEventListener('hashchange', update)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{ background: 'rgba(190,30,45,0.97)', backdropFilter: 'blur(8px)' }}
    >
      {scrolled && <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />}

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#/" className="flex min-w-0 items-center gap-2.5 text-white no-underline">
            <span className="truncate text-xl font-semibold tracking-wide sm:text-2xl">{siteConfig.name}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = active === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded text-base transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/75 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="菜单"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[calc(100svh-4rem)] border-t border-white/10' : 'max-h-0'
        }`}
        style={{ background: '#8C1522' }}
      >
        <div className="px-4 py-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded text-base transition-colors ${
                active === item.href
                  ? 'text-white bg-white/15'
                  : 'text-white/75 hover:text-white hover:bg-white/8'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
