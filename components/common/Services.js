'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Services = ({ onContactClick, serviceToOpen }) => {
  const router = useRouter()
  const [selectedServiceId, setSelectedServiceId] = useState(null)
  const modalContentRef = useRef(null)
  const servicesGridRef = useRef(null)

  // Open modal when serviceToOpen is provided
  useEffect(() => {
    if (serviceToOpen) {
      setSelectedServiceId(serviceToOpen)
    }
  }, [serviceToOpen])

  // Ensure services cards are fully aligned when returning back
  useEffect(() => {
    const el = servicesGridRef.current
    if (!el) return

    // Reset any restored horizontal scroll position (mobile)
    requestAnimationFrame(() => {
      el.scrollTo({ left: 0, behavior: 'auto' })
    })
  }, [])

  const servicesData = [
    {
      id: '2d',
      title: '2D',
      image: '/assets/s2d.png',
      description: 'Our team delivers clear, technically accurate drawings and documentation that serve as the foundation for successful construction projects. We ensure precision and clarity in every 2D representation.',
      features: [
        'Technical accuracy and precision in all drawings',
        'Comprehensive documentation packages',
        'Quality assurance protocols',
        'Fast turnaround times',
        'Expert architectural support',
        'Compliance with industry standards',
        'Detailed construction documentation',
        'Clear layer separation and annotation'
      ],
      benefits: [
        'Reduced construction errors',
        'Improved project clarity',
        'Better stakeholder communication',
        'Enhanced design accuracy',
        'Cost-effective solutions',
        'Streamlined approval processes',
        'Minimized rework requirements',
        'Professional presentation standards'
      ]
    },
    {
      id: '3d',
      title: '3D',
      image: '/assets/s3d.png',
      description: 'Advanced 3D modeling and visualization services that bring your construction projects to life before breaking ground. Our 3D solutions help identify potential issues and optimize design decisions.',
      features: [
        'High-resolution 3D modeling',
        'Realistic rendering and visualization',
        'Virtual walkthrough capabilities',
        'Clash detection and resolution',
        'Material and texture mapping',
        'Lighting simulation',
        'Interactive 3D presentations',
        'Design optimization analysis'
      ],
      benefits: [
        'Enhanced design visualization',
        'Early conflict detection',
        'Improved client understanding',
        'Better design decisions',
        'Reduced construction changes',
        'Cost savings through optimization',
        'Stakeholder alignment',
        'Professional presentations'
      ]
    },
    {
      id: '4d',
      title: '4D',
      image: '/assets/s4d.png',
      description: '4D simulation services that integrate time as the fourth dimension, enabling you to visualize and optimize construction sequences, schedules, and project timelines.',
      features: [
        'Time-based construction simulation',
        'Schedule optimization and analysis',
        'Progress tracking and monitoring',
        'Resource allocation planning',
        'Risk identification and mitigation',
        'Construction sequencing',
        'Timeline management',
        'Real-time progress updates'
      ],
      benefits: [
        'Improved project scheduling',
        'Enhanced timeline management',
        'Better resource utilization',
        'Risk reduction',
        'Cost optimization',
        'Stakeholder communication',
        'Improved decision making',
        'On-time project delivery'
      ]
    },
    {
      id: 'pp-c',
      title: 'Project Planning & Controls',
      image: '/assets/spp&c.png',
      description: 'Comprehensive Project Planning and Control services that ensure your construction projects are properly planned, monitored, and controlled from conception to completion.',
      features: [
        'Strategic project planning',
        'Comprehensive scheduling',
        'Resource management',
        'Cost control and monitoring',
        'Risk assessment and management',
        'Progress tracking',
        'Quality assurance',
        'Stakeholder coordination'
      ],
      benefits: [
        'Improved project outcomes',
        'Better cost control',
        'Enhanced timeline management',
        'Reduced project risks',
        'Stakeholder satisfaction',
        'Quality project delivery',
        'Efficient resource use',
        'Professional project management'
      ]
    },
    {
      id: 'boq',
      title: 'BOQ',
      image: '/assets/sboq.png',
      description: 'Accurate Bill of Quantities and Quantity Intelligence services that provide precise measurement and cost estimation for construction projects, ensuring financial transparency and procurement efficiency.',
      features: [
        'Accurate quantity takeoff',
        'Cost estimation and analysis',
        'Material quantification',
        'Labor cost calculation',
        'Procurement optimization',
        'Budget tracking',
        'Cost forecasting',
        'Financial reporting'
      ],
      benefits: [
        'Improved cost accuracy',
        'Enhanced budget control',
        'Better procurement decisions',
        'Financial transparency',
        'Reduced cost overruns',
        'Efficient resource allocation',
        'Improved cash flow management',
        'Professional cost management'
      ]
    },
    {
      id: 'audit',
      title: 'Audit',
      image: '/assets/saudit.png',
      description: 'Comprehensive Audit and Verification services that ensure compliance, quality, and accuracy throughout all phases of your construction project, providing assurance and peace of mind.',
      features: [
        'Quality assurance audits',
        'Compliance verification',
        'Technical accuracy checks',
        'Documentation review',
        'Process validation',
        'Performance evaluation',
        'Risk assessment',
        'Continuous improvement monitoring'
      ],
      benefits: [
        'Enhanced project quality',
        'Regulatory compliance',
        'Risk mitigation',
        'Improved processes',
        'Stakeholder confidence',
        'Professional standards',
        'Quality assurance',
        'Project success assurance'
      ]
    }
  ]

  const handleServiceClick = (service) => {
    // Navigate to services page with specific service ID
    router.push(`/services?service=${service.id}`)
  }

  const closeModal = () => {
    setSelectedServiceId(null)
  }

  useEffect(() => {
    if (selectedServiceId) {
      const element = document.getElementById(`service-modal-section-${selectedServiceId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedServiceId])

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Services We Deliver</h2>
          <p className="services-description">
            Our comprehensive range of services covers every aspect of construction and design, 
            ensuring your project is handled with expertise from conception to completion.
          </p>
        </div>
        
        <div className="services-grid" ref={servicesGridRef}>
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" onClick={() => handleServiceClick(service)}>
              <div className="service-icon">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-icon-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="know-more-button" onClick={(e) => {
                e.stopPropagation();
                handleServiceClick(service);
              }}>
                Know More →
              </button>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedServiceId && (
          <div className="advantage-modal-overlay" onClick={closeModal}>
            <div className="advantage-modal-content" onClick={(e) => e.stopPropagation()} ref={modalContentRef}>
              <button className="close-modal" onClick={closeModal}>&times;</button>
              <div className="modal-scroll-container">
                {servicesData.map((service) => (
                  <div key={service.id} id={`service-modal-section-${service.id}`} className="modal-section">
                    <div className="modal-header">
                      <h2 className="modal-title">{service.title} Services</h2>
                      <div className="modal-accent"></div>
                    </div>
                    <div className="modal-body">
                      <div className="modal-service-image-header">
                         <img src={service.image} alt={service.title} className="modal-service-icon" />
                      </div>
                      <p className="modal-description">{service.description}</p>
                      
                      <div className="modal-info-grid">
                        <div className="modal-info-column">
                          <h3 className="modal-subtitle">Key Features</h3>
                          <ul className="modal-points">
                            {service.features.map((feature, index) => (
                              <li key={index} className="modal-point">
                                <span className="bullet">✓</span> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="modal-info-column">
                          <h3 className="modal-subtitle">Benefits</h3>
                          <ul className="modal-points">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="modal-point">
                                <span className="bullet">→</span> {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="modal-section-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* CTA Button */}
        <div className="services-cta">
          <button onClick={onContactClick} className="services-cta-button">
            <span>Have a project in mind? Let's talk →</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
