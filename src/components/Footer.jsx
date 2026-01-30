import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    alert(`Newsletter subscription for: ${email}\n(Demo only - no backend)`)
    e.target.reset()
  }

  return (
    <footer className="site-footer">
      {/* Decorative Wave */}
      <div className="site-footer__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="site-footer__inner">
        {/* Top Section */}
        <div className="site-footer__top">
          {/* Brand Section */}
          <div className="site-footer__brand">
            <div className="site-footer__logo">
                <span className="site-footer__logo-mark">VX</span>
                <span className="site-footer__logo-text">VeriSoftX</span>
                </div>
                <p className="site-footer__tagline">
              Building tomorrow's infrastructure with precision, safety, and innovation.
              Your trusted partner in construction excellence.
            </p>
            <div className="site-footer__social">
              <a
                href="https://linkedin.com"
                className="site-footer__social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>in</span>
              </a>
              <a
                href="https://twitter.com"
                className="site-footer__social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>𝕏</span>
              </a>
              <a
                href="https://facebook.com"
                className="site-footer__social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>f</span>
              </a>
              <a
                href="https://instagram.com"
                className="site-footer__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📷</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Company</h3>
            <ul className="site-footer__links">
              <li>
                <a href="/about" className="site-footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="site-footer__link">
                  Careers
                </a>
              </li>
              <li>
                <a href="/team" className="site-footer__link">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="site-footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Services</h3>
            <ul className="site-footer__links">
              <li>
                <a href="/services/residential" className="site-footer__link">
                  Residential
                </a>
              </li>
              <li>
                <a href="/services/commercial" className="site-footer__link">
                  Commercial
                </a>
              </li>
              <li>
                <a href="/services/renovation" className="site-footer__link">
                  Renovation
                </a>
              </li>
              <li>
                <a href="/services/consulting" className="site-footer__link">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Resources</h3>
            <ul className="site-footer__links">
              <li>
                <a href="/blog" className="site-footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/projects" className="site-footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="/faq" className="site-footer__link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="site-footer__link">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="site-footer__newsletter">
            <h3 className="site-footer__column-title">Stay Updated</h3>
            <p className="site-footer__newsletter-text">
              Get the latest updates on projects and construction insights.
            </p>
            <form className="site-footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                className="site-footer__newsletter-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="site-footer__newsletter-btn">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} <strong>VerisoftX Technologies</strong>. All rights reserved.
          </p>
          <ul className="site-footer__links-bottom">
            <li>
              <a href="/privacy" className="site-footer__link-bottom">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="site-footer__link-bottom">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies" className="site-footer__link-bottom">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}