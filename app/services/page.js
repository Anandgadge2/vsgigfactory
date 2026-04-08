'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Sitemap from '../../components/common/Sitemap'
import '../../services-details-styles.css'

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
      image: '/assets/s_2d.png'
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
      image: '/assets/s_3d.png'
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
      image: '/assets/s_4d.png'
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
      image: '/assets/s_planning.png'
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
      image: '/assets/s_BOQ.png'
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
      image: '/assets/s_audit.png'
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
        <div className="services-body-wrapper">
          <div className="services-layout-container">
            <aside className="services-sidebar">
              {/* Back Button Circle */}
              <button 
                onClick={handleBackClick} 
                className="sidebar-back-button"
                title="Go back"
              >
                ←
              </button>

              {/* Services List */}
              <nav className="services-sidebar-nav">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    className={`sidebar-service-link ${activeService === service.id ? 'active' : ''}`}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    {service.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="services-main-column">
              <div className="services-details-header">
                <h1 className="services-details-title">Our Services</h1>
              </div>
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
                  // PP&C Services: Value Add
                  <>
                    <div className="service-value-add">
                      <h3 className="section-subtitle">Value Add</h3>
                      <ul>
                        {service.valueAdd.map((item, index) => (
                          <li key={index} className="benefit-item">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Section for PP&C */}
                    {service.image && (
                      <div className="service-image-section">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="service-image-large"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  // Other services: Features section
                  <div className="service-features">
                    <h3 className="section-subtitle">Our {service.title} Include</h3>
                    <ul className="feature-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Image Section for all services */}
                {(service.id === '2d' || service.id === 'boq' || service.id === 'audit') && (
                  <div className="service-image-section">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image-large"
                    />
                  </div>
                )}

                {/* Benefits/Output */}
                <div className="service-benefits">
                  <h3 className="section-subtitle">Output</h3>
                  <ul className="benefit-list">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <span className="benefit-bullet">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
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
          </div>
        </div>
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
