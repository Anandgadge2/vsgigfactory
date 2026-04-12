'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Sitemap from '../../components/common/Sitemap'
import '../../services-details-styles.css'

const FeatureItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      className="feature-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="feature-bullet"
      >
        <CheckCircle size={18} strokeWidth={3} />
      </motion.div>
      <span className="feature-text">{text}</span>
    </li>
  )
}

const BenefitItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      className="benefit-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="benefit-bullet"
      >
        <CheckCircle size={18} strokeWidth={3} />
      </motion.div>
      <span className="benefit-text">{text}</span>
    </li>
  )
}

const ServicesPageContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeService, setActiveService] = useState(null)

  const servicesData = [
    {
      id: '2d',
      title: '2D Services',
      description: 'Comprehensive 2D drafting and documentation solutions for construction projects.',
      detailedDescription: 'We provide precise, standards-compliant 2D drawings extracted from coordinated BIM models or developed independently. Our solutions ensure that every detail of your construction project is documented with accuracy, facilitating seamless execution on-site and clear communication among all stakeholders.',
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
        'Clear, buildable documentation that ensures smooth on-site execution.',
        'Compliance with international drafting standards and local regulations.',
        'High-precision scaling and layering for coordinated multi-disciplinary reviews.'
      ],
      image: '/assets/s_2d.png'
    },
    {
      id: '3d',
      title: '3D Services',
      description: 'Advanced 3D modeling and visualization for enhanced project understanding.',
      detailedDescription: 'We create coordinated, execution-ready BIM models across disciplines with precision and scalability. Our 3D modeling services provide a comprehensive digital representation of your project, allowing for better visualization, clash detection, and coordination before any physical work begins.',
      features: [
        '3D Architectural Modeling',
        'Photorealistic Rendering',
        'Virtual Tours',
        '3D Animation',
        'Material Visualization',
        'Lighting Analysis'
      ],
      benefits: [
        'Accurate, clash-free, data-rich models ready for construction and lifecycle management.',
        'Enhanced stakeholder engagement through high-quality visual walkthroughs.',
        'Improved decision-making by visualizing spatial relationships and material choices early.'
      ],
      image: '/assets/s_3d.png'
    },
    {
      id: '4d',
      title: '4D Services',
      description: 'Time-based 4D simulation integrating 3D models with project schedules.',
      detailedDescription: 'Our 4D services add the dimension of time to your 3D models, enabling powerful construction sequencing and project timeline visualization. This proactive approach helps in identifying scheduling conflicts and optimizing resource allocation throughout the project lifecycle.',
      features: [
        'Construction Sequencing',
        'Timeline Visualization',
        'Progress Tracking',
        'Schedule Optimization',
        'Conflict Detection',
        'Resource Planning'
      ],
      benefits: [
        'Improved timeline control, proactive issue resolution, and reduced execution risk.',
        'Clear communication of the construction sequence to field teams and clients.',
        'Better logistics and safety planning by visualizing workspace availability over time.'
      ],
      image: '/assets/s_4d.png'
    },
    {
      id: 'pp-c',
      title: 'Project Planning & Control Services',
      description: 'Project Planning, Programming & Control for comprehensive project management.',
      detailedDescription: 'We support structured planning to enhance coordination and execution clarity. Our PP&C services ensure that every phase of your project is meticulously planned and monitored, providing the transparency and control needed to meet deadlines and budget constraints.',
      features: [
        'Project Planning',
        'Programming & Scheduling',
        'Cost Management',
        'Quality Control',
        'Risk Management',
        'Progress Reporting'
      ],
      benefits: [
        'Better time management, improved coordination, and controlled project progression.',
        'Real-time visibility into project health and early warning of potential delays.',
        'Strategic resource management to maximize efficiency and minimize waste.'
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
      detailedDescription: 'We deliver accurate cost and quantity support to enhance financial transparency and procurement alignment. Our BOQ services provide a detailed and precise breakdown of materials, labor, and equipment needed, ensuring accurate bidding and effective cost control.',
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
        'Improved cost accuracy, reduced financial ambiguity, and controlled budget execution.',
        'Transparent procurement process with detailed quantity justifications.',
        'Streamlined payment certification and variation management.'
      ],
      image: '/assets/s_BOQ.png'
    },
    {
      id: 'audit',
      title: 'Audit Services',
      description: 'Comprehensive project audit and quality assurance services.',
      detailedDescription: 'We ensure compliance, transparency, and technical accuracy across project stages. Our audit services provide an independent review of design documentation, quantities, and on-site changes to safeguard project quality and financial integrity.',
      features: [
        'Audit & Validation',
        'Design Audit and Peer Review',
        'BOQ vs Model Cross-Verification',
        'Subcontractor Payment Verification',
        'As-Built Validation',
        'Documentation Compliance Review'
      ],
      benefits: [
        'Risk reduction, improved accountability, and higher stakeholder confidence.',
        'Verification of construction quality against design specifications.',
        'Fair and accurate settlement of accounts through rigorous verification.'
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
              {/* Our Services Heading */}
              <h3 className="sidebar-services-title">Our Services</h3>

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
              <div className="services-content">
                <div className="services-details-header">
                  <h1 className="services-details-title">Our Services</h1>
                </div>
                {servicesData.map((service) => (
                  <section
                    key={service.id}
                    id={`service-${service.id}`}
                    className={`services-info-group ${activeService === service.id ? 'active' : ''}`}
                  >
                    <div className="service-header">
                      <h2 className="service-title">{service.title}</h2>
                    </div>

                    <div className="service-main-row">
                      <div className="service-image-side">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="service-image-large"
                        />
                      </div>
                      <div className="service-text-side">
                        <p className="service-detailed-description">{service.detailedDescription}</p>
                      </div>
                    </div>

                    <div className="service-features">
                      <h3 className="section-subtitle">Our {service.title} Include</h3>
                      <ul className="feature-list">
                        {service.features.map((feature, index) => (
                          <FeatureItem key={index} text={feature} />
                        ))}
                      </ul>
                    </div>

                    {service.id === 'pp-c' && service.valueAdd && (
                      <div className="service-features" style={{ paddingTop: 0 }}>
                        <h3 className="section-subtitle">Value Add</h3>
                        <ul className="feature-list">
                          {service.valueAdd.map((item, index) => (
                            <FeatureItem key={index} text={item} />
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="service-benefits">
                      <h3 className="section-subtitle">Output</h3>
                      <ul className="benefit-list">
                        {service.benefits.map((benefit, index) => (
                          <BenefitItem key={index} text={benefit} />
                        ))}
                      </ul>
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
