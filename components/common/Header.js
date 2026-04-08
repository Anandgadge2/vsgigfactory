'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/', active: false },
    { name: 'Case Studies', href: '/case-studies', active: false },
    { name: 'Our Expertise', href: '/expertise', active: false },
    { name: 'Projects', href: '/projects', active: false },
    { name: 'Login', href: '#login', active: false },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Check if we're on the home page
  const isHomePage = pathname === '/' || pathname === ''

  return (
    <header className="navbar">
      {/* Header Test with CSS Classes */}
      <div className="header-test">
        {/* Logo with CSS Classes */}
        <a href="/about" className="logo-wrapper">
          <div className="logo-content">
            <div className="logo-text-container">
              <div className="logo-main-text">
                <span className="logo-gig">Gig</span>
                <span className="logo-factory">factory</span>
                {/* Flags */}
                <div className="flags-container">
                  {/* India Flag */}
                  <svg className="flag" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#FF9933"/>
                    <rect y="5.33" width="24" height="5.33" fill="white"/>
                    <rect y="10.67" width="24" height="5.33" fill="#138808"/>
                    <circle cx="12" cy="8" r="2" fill="#000080"/>
                  </svg>
                  {/* UK Flag */}
                  <svg className="flag" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#012169"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2.67"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.33"/>
                    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4"/>
                    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2.67"/>
                  </svg>
                </div>
              </div>
              <div className="logo-tagline">
                TECHNOLOGY ENABLED PLATFORM
              </div>
            </div>
          </div>
        </a>

        {/* Navigation with CSS Classes */}
        <div className="nav-test">
          <a href="/" className="nav-test-link">Home</a>
          <a href="/case-studies" className="nav-test-link">Case Studies</a>
          <a href="/expertise" className="nav-test-link">Our Expertise</a>
          <a href="/projects" className="nav-test-link">Projects</a>
          <button onClick={() => window.location.href = '/login'} className="nav-login-btn">Login</button>
        </div>
      </div>

      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo Section */}
          <a href="/about" className="logo-container">
            <div className="logo-text">
              <div className="logo-main">
                <span className="logo-gig">Gig</span>
                <span className="logo-factory">factory</span>
                <div className="logo-flags">
                  {/* India Flag */}
                  <svg className="flag-icon" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#FF9933"/>
                    <rect y="5.33" width="24" height="5.33" fill="white"/>
                    <rect y="10.67" width="24" height="5.33" fill="#138808"/>
                    <circle cx="12" cy="8" r="2" fill="#000080"/>
                  </svg>
                  {/* UK Flag */}
                  <svg className="flag-icon" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#012169"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2.67"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.33"/>
                    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4"/>
                    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2.67"/>
                  </svg>
                </div>
              </div>
              <div className="logo-tagline">
                Technology Enabled Platform
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-list">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${item.active ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-list">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${item.active ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
