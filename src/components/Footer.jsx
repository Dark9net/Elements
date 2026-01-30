import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          {/* Brand Section */}
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <span className="site-footer__logo-mark">SB</span>
              <span className="site-footer__logo-text">S & B Constructions</span>
            </div>
            <p className="site-footer__description">
              Modern construction services delivering quality residential and commercial
              projects with a focus on safety, efficiency, and excellence.
            </p>
            <div className="site-footer__social">
              <a href="#" className="site-footer__social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className="site-footer__social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="site-footer__social-link" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" className="site-footer__social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Quick Links</h3>
            <ul className="site-footer__links">
              <li>
                <a href="/" className="site-footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="/details" className="site-footer__link">
                  Details
                </a>
              </li>
              <li>
                <a href="/wages" className="site-footer__link">
                  Wages
                </a>
              </li>
              <li>
                <a href="/expenditure" className="site-footer__link">
                  Expenditure
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Services</h3>
            <ul className="site-footer__links">
              <li>
                <a href="#" className="site-footer__link">
                  General Contracting
                </a>
              </li>
              <li>
                <a href="#" className="site-footer__link">
                  Renovation & Fit-out
                </a>
              </li>
              <li>
                <a href="#" className="site-footer__link">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="site-footer__link">
                  Quality & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="site-footer__column">
            <h3 className="site-footer__column-title">Contact</h3>
            <div className="site-footer__contact">
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon">📍</span>
                <span>123 Construction Ave<br />Building City, BC 12345</span>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon">📧</span>
                <span>info@subcashh.com</span>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="site-footer__bottom">
          <p className="site-footer__text">
            © {year} <strong>VerisoftX Technologies</strong>. All rights reserved.
          </p>
          <div className="site-footer__badges">
            <span className="site-footer__badge">Licensed & Insured</span>
            <span className="site-footer__badge">ISO Certified</span>
            <span className="site-footer__badge">Safety First</span>
          </div>
        </div>
      </div>
      <div className="site-footer__decoration" />
    </footer>
  )
}