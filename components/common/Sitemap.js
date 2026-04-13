'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Sitemap = () => {
  const router = useRouter()
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceClick = (serviceName) => {
    // Normalize serviceName for robust mapping (newlines/extra spaces/case)
    const normalizedName = String(serviceName)
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
    
    // Map service names to service IDs
    const serviceMapping = {
      '2d services': '2d',
      '3d services': '3d',
      '4d services': '4d',
      'project planning & controls services': 'pp-c',
      'boq services': 'boq',
      'audit services': 'audit'
    }

    const serviceId = serviceMapping[normalizedName]
    if (serviceId) {
      router.push(`/services?service=${serviceId}`)
    }
  }

  const leftSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Case Studies", url: "/case-studies" }
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
        { name: "Project Planning &\nControls Services", isService: true },
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
        { name: "Project Planning", url: "/expertise" },
        { name: "BIM Integration", url: "/expertise" },
        { name: "Quality Assurance", url: "/expertise" },
        { name: "Risk Management", url: "/expertise" },
        { name: "Cost Control", url: "/expertise" }
      ]
    }
  ]

  const rightSections = [
    {
      title: "Contact Us",
      links: [
        { name: "Get In Touch", url: "/contact" },
        { name: "Email Us", url: "mailto:info@gigfactory.com" },
        { name: "Call Us", url: "tel:+1234567890" },
        { name: "Linkedin", url: "https://www.linkedin.com" }
      ]
    }
  ]

  return (
    <section className="sitemap-page">
      <div className="container">
        <div className="sitemap-header">
          <div className="sitemap-title-section">
            <div className="sitemap-heading-center">
              <h2 className="sitemap-title">Site Map</h2>
            </div>
          </div>
        </div>

        {/* Sitemap Links */}
        <div className="sitemap-content">
          {/* Left Side */}
          <div className="sitemap-left">
            {leftSections.map((section, index) => (
              <div key={index} className="sitemap-block">
                <h3 className="section-title-2">{section.title}</h3>
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
              <div key={index} className="sitemap-block">
                <h3 className="section-title-3">{section.title}</h3>
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => handleServiceClick(link.name)}
                      className="sitemap-link service-link"
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
              <div key={index} className="sitemap-block">
                <h3 className="section-title-4">{section.title}</h3>
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
              <div key={index} className="sitemap-block">
                <h3 className="section-title-5">{section.title}</h3>
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
            <div className="footer-center">
              <div className="footer-info">
                <p className="footer-text">
                  © 2026 Gigfactory. All rights reserved.
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
      </div>
    </section>
  )
}

export default Sitemap
