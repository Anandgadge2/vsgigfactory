'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Sitemap from '../../components/common/Sitemap'

const ServicesPageContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeService, setActiveService] = useState(null)

  const servicesData = [
    {
      id: '2d',
      title: '2D Services',
      description: 'Comprehensive 2D drafting and documentation solutions for construction projects.',
      detailedDescription: 'We provide precise, standards-compliant 2D drawings extracted from coordinated BIM models or developed independently.',
      features: [
        'GFC (Good for Construction) Drawings',
        'Working Drawings',
        'Shop Drawings (Arch, Structure, MEPF)',
        'As-Built Drawings',
        'Tender Drawings',
        'Detail Drawings & Sections',
        'Layout & Interior Drafting Support'
      ],
      benefits: [
        'Clear, buildable documentation that ensures smooth on-site execution.'
      ],
      image: '/assets/s2d.png'
    },
    {
      id: '3d',
      title: '3D Services',
      description: 'Advanced 3D modeling and visualization for enhanced project understanding.',
      detailedDescription: 'We create coordinated, execution-ready BIM models across disciplines with precision and scalability.',
      features: [
        '3D Architectural Modeling',
        'Photorealistic Rendering',
        'Virtual Tours',
        '3D Animation',
        'Material Visualization',
        'Lighting Analysis'
      ],
      benefits: [
        'Accurate, clash-free, data-rich models ready for construction and lifecycle management.'
      ],
      image: '/assets/3ds_img.png'
    },
    {
      id: '4d',
      title: '4D Services',
      description: 'Time-based 4D simulation integrating 3D models with project schedules.',
      detailedDescription: 'Our 4D services add the dimension of time to your 3D models, enabling powerful construction sequencing and project timeline visualization. Perfect for complex project management.',
      features: [
        'Construction Sequencing',
        'Timeline Visualization',
        'Progress Tracking',
        'Schedule Optimization',
        'Conflict Detection',
        'Resource Planning'
      ],
      benefits: [
        'Improved timeline control, proactive issue resolution, and reduced execution risk.'
      ],
      image: '/assets/4ds_img.png'
    },
    {
      id: 'pp-c',
      title: 'PP&C Services',
      description: 'Project Planning, Programming & Control for comprehensive project management.',
      detailedDescription: 'We support structured planning to enhance coordination and execution clarity.',
      features: [
        'Project Planning',
        'Programming & Scheduling',
        'Cost Management',
        'Quality Control',
        'Risk Management',
        'Progress Reporting'
      ],
      benefits: [
        'Better time management, improved coordination, and controlled project progression.'
      ],
      difference: [
        { traditional: 'Manual planning', our: 'Digital optimization' },
        { traditional: 'Reactive problem solving', our: 'Proactive risk management' },
        { traditional: 'Siloed operations', our: 'Integrated coordination' },
        { traditional: 'Traditional approach', our: 'Our PP&C methodology' }
      ],
      valueAdd: [
        'Enhanced project visibility through real-time tracking',
        'Reduced delays via predictive scheduling',
        'Cost savings through optimized resource allocation',
        'Improved stakeholder communication and reporting'
      ],
      image: '/assets/spp&c.png'
    },
    {
      id: 'boq',
      title: 'BOQ Services',
      description: 'Detailed Bill of Quantities preparation for accurate cost estimation.',
      detailedDescription: 'We deliver accurate cost and quantity support to enhance financial transparency and procurement alignment',
      features: [
        'Quantity Take-Off',
        'BOQ Preparation',
        'Item-Wise Cost Analysis',
        'Tender BOQ Support',
        'Procurement Quantity Tracking',
        'Variation & Change Order Analysis',
        'Subcontractor Billing Verification',
      ],
      benefits: [
        'Improved cost accuracy, reduced financial ambiguity, and controlled budget execution.'
      ],
      image: '/assets/sboq.png'
    },
    {
      id: 'audit',
      title: 'Audit Services',
      description: 'Comprehensive project audit and quality assurance services.',
      detailedDescription: 'We ensure compliance, transparency, and technical accuracy across project stages.',
      features: [
        'Audit & Validation',
        'Design Audit and Peer Review',
        'BOQ vs Model Cross-Verification',
        'Subcontractor Payment Verification',
        'As-Built Validation',
        'Documentation Compliance Review'
      ],
      benefits: [
        'Risk reduction, improved accountability, and higher stakeholder confidence.'
      ],
      image: '/assets/saudit.png'
    }
  ]

  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId) {
      setActiveService(serviceId)
      // Scroll to the specific service section
      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [searchParams])

  const handleServiceClick = (serviceId) => {
    router.push(`/services?service=${serviceId}`)
  }

  const handleBackClick = () => {
    router.back()
  }

  return (
    <>
      <main className="services-details-section">
        {/* Header with Back Button */}
        <div className="services-details-header">
          <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
            <button onClick={handleBackClick} className="back-button" style={{ position: 'absolute', left: '40px', top: '0' }}>
              ← Back
            </button>
            <h1 className="services-details-title">Our Services</h1>
          </div>
        </div>

        {/* Services Navigation */}
        <div className="services-nav">
          <h2 className="nav-title">Services</h2>
          <div className="nav-links">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`nav-link ${activeService === service.id ? 'active' : ''}`}
                onClick={() => handleServiceClick(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Services Content */}
        <div className="services-content">
          {servicesData.map((service) => (
            <section
              key={service.id}
              id={`service-${service.id}`}
              className={`service-section ${activeService === service.id ? 'active' : ''}`}
            >
              <div className="service-header">
                <h2 className="service-title">{service.title}</h2>
                <div className="service-divider"></div>
              </div>
              <div className="service-content">
                <p className="service-description">{service.detailedDescription}</p>

                {/* Conditional rendering based on service type */}
                {service.id === '3d' ? (
                  // 3D Services: Image section instead of features
                  <div className="service-image-section">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image-large"
                    />
                  </div>
                ) : service.id === '4d' ? (
                  // 4D Services: Image section instead of features
                  <div className="service-image-section">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image-large"
                    />
                  </div>
                ) : service.id === 'pp-c' ? (
                  // PP&C Services: Difference Table and Value Add
                  <>
                    <div className="service-difference">
                      <h3 className="section-subtitle">Difference</h3>
                      <table className="difference-table">
                        <thead>
                          <tr>
                            <th>Traditional Practice</th>
                            <th>BIM Practice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="traditional-cell">Manual planning</td>
                            <td>Digital optimization</td>
                          </tr>
                          <tr>
                            <td className="traditional-cell">Reactive problem solving</td>
                            <td>Proactive risk management</td>
                          </tr>
                          <tr>
                            <td className="traditional-cell">Siloed operations</td>
                            <td>Integrated coordination</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="service-value-add">
                      <h3 className="section-subtitle">Value Add</h3>
                      <ul>
                        {service.valueAdd.map((item, index) => (
                          <li key={index} className="benefit-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // Other services: Features section
                  <div className="service-features">
                    <h3 className="section-subtitle">Our {service.title} Include</h3>
                    <ul className="feature-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-bullet">●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits/Output */}
                <div className="service-benefits">
                  <h3 className="section-subtitle">Output</h3>
                  <ul className="benefit-list">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <span className="benefit-bullet">★</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3D Services: Additional image section below output */}
                {service.id === '3d' && (
                  <div className="service-image-section">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image-large"
                    />
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-details-cta">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Contact us today to discuss how our services can benefit your project
          </p>
          <button className="cta-button" onClick={() => router.push('/contact')}>
            Get In Touch →
          </button>
        </div>

        <div className="login-sitemap-section">
          <Sitemap />
        </div>
      </main>
    </>
  )
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <main className="services-details-section" aria-busy="true" />
      }
    >
      <ServicesPageContent />
    </Suspense>
  )
}
