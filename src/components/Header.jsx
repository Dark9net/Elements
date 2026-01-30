import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <div className="site-brand" aria-label="Site">
          <span className="site-brand__mark" aria-hidden="true">
            SB
          </span>
          <span className="site-brand__text">S & B Constructions</span>
        </div>

        <nav className="site-nav site-nav--extended" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `site-nav__link site-nav__link--home ${isActive ? 'is-active' : ''}`
            }
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) =>
              `site-nav__link site-nav__link--details ${isActive ? 'is-active' : ''}`
            }
          >
            <span>Details</span>
          </NavLink>
          <NavLink
            to="/wages"
            className={({ isActive }) =>
              `site-nav__link site-nav__link--wages ${isActive ? 'is-active' : ''}`
            }
          >
            <span>Wages</span>
          </NavLink>
          <NavLink
            to="/expenditure"
            className={({ isActive }) =>
              `site-nav__link site-nav__link--expenditure ${isActive ? 'is-active' : ''}`
            }
          >
            <span>Expenditure</span>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `site-nav__link ${isActive ? 'is-active' : ''}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/premium-login"
            className={({ isActive }) =>
              `site-nav__link site-nav__link--premium ${isActive ? 'is-active' : ''}`
            }
          >
            Premium
          </NavLink>
        </nav>
      </div>
    </header>
  )
}