'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const logoUrl = '/images/logo-11.png'

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg header-light bg-white fixed-header header-demo">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="col-auto me-auto ps-lg-0 flex items-center">
            <a className="navbar-brand" href="/">
              <img
                data-at2x="images/logo-black@2x.png"
                alt="Spettro Vision Logo"
                src={logoUrl}
                className="default-logo"
                decoding="async"
              />
              </a>
            </div>

          <div className="col-auto pe-lg-0 flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Toggle */}
            <button
              className="navbar-toggler lg:hidden z-50"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`navbar-toggler-line ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`navbar-toggler-line ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`navbar-toggler-line ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href="#benefits" className="inner-link nav-link text-uppercase text-sm xl:text-base">
                BENEFITS
              </a>
              <a href="#reviews" className="inner-link nav-link text-uppercase text-sm xl:text-base">
                REVIEWS
              </a>
              <a
                href="#get_a_quote"
                className="btn btn-small btn-switch-text btn-round-edge text-transform-none btn-box-shadow purchase-envato text-sm xl:text-base px-3 xl:px-4"
                style={{ backgroundColor: '#fbbf24', color: '#000000' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fbbf24'}
              >
                <span className="relative inline-flex items-center gap-1 xl:gap-2 overflow-hidden text-white">
                  <span className="btn-double-text inline-block transition-transform duration-300 text-white whitespace-nowrap">Request a Quote</span>
                  <i className="fa-solid fa-arrow-right text-white transition-none"></i>
                  <span className="absolute left-0 top-full w-full flex items-center justify-center gap-1 xl:gap-2 text-white transition-transform duration-300 whitespace-nowrap">
                    Request a Quote
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </span>
              </a>
          </div>

          {/* Mobile Menu */}
            <div className={`collapse navbar-collapse lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ${isMobileMenuOpen ? 'show' : 'hidden'}`} id="navbarNav" style={{ top: '70px' }}>
              <ul className="navbar-nav alt-font text-uppercase py-4 px-4">
                <li className="nav-item border-b border-gray-200 pb-3 mb-3">
                  <a href="#benefits" className="inner-link nav-link text-base font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    BENEFITS
                  </a>
                </li>
                <li className="nav-item border-b border-gray-200 pb-3 mb-3">
                  <a href="#reviews" className="inner-link nav-link text-base font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    REVIEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#get_a_quote"
                    className="btn btn-small btn-round-edge text-white w-full text-center py-2.5 text-base font-semibold"
                    style={{ backgroundColor: '#fbbf24', color: '#000000' }}
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

