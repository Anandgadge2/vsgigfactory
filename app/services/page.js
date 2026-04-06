'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

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
      image: '/images/services/2d-service.jpg'
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
      image: '/images/services/3do_img.png'
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
      image: '/images/services/4d-service.jpg'
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
      image: '/images/services/ppc-service.jpg'
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
      image: '/images/services/boq-service.jpg'
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
      image: '/images/services/audit-service.jpg'
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

  return (
    <>
      <main className="services-page">
        <div className="container">
          {/* Page Header */}
          <div className="services-page-header">
            <h1 className="services-page-title">Our Services</h1>
            <p className="services-page-subtitle">
              Comprehensive construction management solutions tailored to your project needs
            </p>
          </div>

          {/* Services Sections */}
          <div className="services-container">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`service-section ${activeService === service.id ? 'active' : ''}`}
              >
                <div className="service-content">
                  <div className="service-info">
                    <h2 className="service-title">{service.title}</h2>
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
                    ) : (
                      // Other services: Features section
                      <div className="service-features">
                        <h3 className="features-title">Our {service.title} Include</h3>
                        <ul className="features-list">
                          {service.features.map((feature, index) => (
                            <li key={index} className="feature-item">
                              <span className="feature-icon">●</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefits/Output */}
                    <div className="service-benefits">
                      <h3 className="benefits-title">Output</h3>
                      <ul className="benefits-list">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="benefit-item">
                            <span className="benefit-icon">★</span>
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

                  <div className="service-visual">
                    <div className="service-image-placeholder">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="service-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <div className="service-icon-large" style={{display: 'none'}}>
                        <span className="service-initial">{service.title.charAt(0)}</span>
                      </div>
                      <p className="service-image-caption">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today to discuss how our services can benefit your project
            </p>
            <button className="cta-button" onClick={() => router.push('/contact')}>
              Get In Touch →
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <main className="services-page" aria-busy="true" />
      }
    >
      <ServicesPageContent />
    </Suspense>
  )
}
