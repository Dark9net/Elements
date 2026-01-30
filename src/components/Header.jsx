import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Calculate scroll progress safely and clamp between 0 and 100
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      let progress = 0
      if (scrollable > 0) {
        progress = (window.scrollY / scrollable) * 100
      }
      // clamp and round to 2 decimal places for stability
      progress = Math.min(100, Math.max(0, progress))
      setScrollProgress(Number(progress.toFixed(2)))
    }

    // Keep progress accurate on resize as well
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        {/* Brand/Logo */}
        <div className="site-brand">
          <span className="site-brand__mark">VX</span>
          <span className="site-brand__text">VerisoftX</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`site-header__toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Details
          </NavLink>
          <NavLink
            to="/wages"
            className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Wages
          </NavLink>
          <NavLink
            to="/expenditure"
            className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Expenditure
          </NavLink>

          {/* CTA Buttons */}
          <div className="site-nav__cta">
            <NavLink
              to="/login"
              className="btn-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/premium-login"
              className="btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Get Started</span>
            </NavLink>
          </div>
        </nav>

        {/* Scroll Progress Bar */}
        <div
          className="site-header__progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>
    </header>
  )
}