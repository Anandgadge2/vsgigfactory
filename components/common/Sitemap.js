'use client'

import { useState } from 'react'

const Sitemap = () => {
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceClick = (serviceName) => {
    // Map service names to service IDs
    const serviceMapping = {
      '2D Services': '2d',
      '3D Services': '3d', 
      '4D Services': '4d',
      'PP&C Services': 'pp-c',
      'BOQ Services': 'boq',
      'Audit Services': 'audit'
    }
    
    const serviceId = serviceMapping[serviceName]
    if (serviceId) {
      setSelectedService(serviceId)
      setShowServiceModal(true)
      // Dispatch custom event to open service modal on home page
      window.dispatchEvent(new CustomEvent('openServiceModal', { 
        detail: { serviceId } 
      }))
    }
  }

  const leftSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Case Studies", url: "/#case-studies" }
      ]
    }
  ]

  const middleLeftSections = [
    {
      title: "Services",
      links: [
        { name: "2D Services", isService: true },
        { name: "3D Services", isService: true },
        { name: "4D Services", isService: true },
        { name: "PP&C Services", isService: true },
        { name: "BOQ Services", isService: true },
        { name: "Audit Services", isService: true }
      ]
    }
  ]

  const middleRightSections = [
    {
      title: "Our Expertise",
      links: [
        { name: "Construction Management", url: "/expertise" },
        { name: "Project Planning", url: "/planning" },
        { name: "BIM Integration", url: "/bim" },
        { name: "Quality Assurance", url: "/quality" },
        { name: "Risk Management", url: "/risk" },
        { name: "Cost Control", url: "/cost" }
      ]
    }
  ]

  const rightSections = [
    {
      title: "Contact Us",
      links: [
        { name: "Get In Touch", url: "/contact" },
        { name: "Email Us", url: "mailto:info@gigfactory.com" },
        { name: "Call Us", url: "tel:+1234567890" }
      ]
    }
  ]

  return (
    <section className="sitemap-section">
      <div className="container">
        <div className="sitemap-header">
          <div className="sitemap-logo">
            <div className="logo-main-text">
              <span className="logo-gig">Gig</span>
              <span className="logo-factory">factory</span>
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
          </div>
          <div className="sitemap-title-section">
            <h2 className="sitemap-title">Site Map</h2>
            <p className="sitemap-subtitle">
              Complete overview of website structure and navigation
            </p>
          </div>
        </div>

        {/* Sitemap Links */}
        <div className="sitemap-content">
          {/* Left Side */}
          <div className="sitemap-left">
            {leftSections.map((section, index) => (
              <div key={index} className="sitemap-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="sitemap-link"
                      target={link.url && (link.url.startsWith('http') || link.url.startsWith('mailto') || link.url.startsWith('tel')) ? '_blank' : '_self'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Middle Left Side */}
          <div className="sitemap-middle-left">
            {middleLeftSections.map((section, index) => (
              <div key={index} className="sitemap-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => handleServiceClick(link.name)}
                      className="sitemap-link service-link"
                      style={{ cursor: 'pointer', textAlign: 'left', background: 'none', border: 'none', padding: '8px 0', width: '100%' }}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Middle Right Side */}
          <div className="sitemap-middle-right">
            {middleRightSections.map((section, index) => (
              <div key={index} className="sitemap-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="sitemap-link"
                      target={link.url && (link.url.startsWith('http') || link.url.startsWith('mailto') || link.url.startsWith('tel')) ? '_blank' : '_self'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="sitemap-right">
            {rightSections.map((section, index) => (
              <div key={index} className="sitemap-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="sitemap-link"
                      target={link.url && (link.url.startsWith('http') || link.url.startsWith('mailto') || link.url.startsWith('tel')) ? '_blank' : '_self'}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sitemap-footer">
          <div className="footer-content">
            <div className="footer-info">
              <p className="footer-text">
                © 2024 Gigfactory. All rights reserved.
              </p>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sitemap
