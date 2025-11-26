'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const logoUrl = 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/logo-new.png'

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg header-light bg-white fixed-header header-demo">
        <div className="container">
          <div className="col-auto me-auto ps-lg-0">
            <a className="navbar-brand" href="/">
              <img
                data-at2x="images/logo-black@2x.png"
                alt="Aarav Infotech Logo"
                src={logoUrl}
                className="default-logo"
                decoding="async"
              />
              </a>
            </div>

          <div className="col-auto pe-lg-0 flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              className="navbar-toggler lg:hidden"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#benefits" className="inner-link nav-link text-uppercase">
                BENEFITS
              </a>
              <a href="#reviews" className="inner-link nav-link text-uppercase">
                REVIEWS
              </a>
              <a
                href="#get_a_quote"
                className="btn btn-small btn-switch-text btn-round-edge text-transform-none btn-box-shadow purchase-envato"
                style={{ backgroundColor: '#2563eb', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                <span className="relative inline-flex items-center gap-2 overflow-hidden text-white">
                  <span className="btn-double-text inline-block transition-transform duration-300 text-white">Request a Quote</span>
                  <i className="fa-solid fa-arrow-right text-white transition-none"></i>
                  <span className="absolute left-0 top-full w-full flex items-center justify-center gap-2 text-white transition-transform duration-300">
                    Request a Quote
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </span>
              </a>
          </div>

          {/* Mobile Menu */}
            <div className={`collapse navbar-collapse lg:hidden ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav alt-font text-uppercase">
                <li className="nav-item">
                  <a href="#benefits" className="inner-link nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                    BENEFITS
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#reviews" className="inner-link nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                    REVIEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#get_a_quote"
                    className="btn btn-small btn-round-edge text-white mt-2"
                    style={{ backgroundColor: '#2563eb' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request a Quote →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

