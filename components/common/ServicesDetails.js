'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sitemap from './Sitemap'

const ServicesDetails = () => {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('')

  const servicesData = [
    {
      id: '2d',
      title: '2D',
      image: '/assets/2d.png',
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
      image: '/assets/3d.png',
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
      image: '/assets/4d.png',
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
      title: 'PP&C',
      image: '/assets/pp&c.png',
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
      image: '/assets/boq.png',
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
      image: '/assets/audit.png',
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

  useEffect(() => {
    // Check for hash in URL and scroll to section
    const hash = window.location.hash.replace('#', '')
    if (hash && servicesData.find(item => item.id === hash)) {
      setActiveSection(hash)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const handleBackClick = () => {
    router.back()
  }

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="services-details-section">
        {/* Fixed Sidebar */}
        <div className="services-sidebar">
          
          <div className="sidebar-services-list">
            {servicesData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`sidebar-service-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="services-main-content">
          <div className="container">
            {/* Header */}
            <div className="services-details-header">
              <h1 className="services-details-title">Our Services</h1>
              <p className="services-details-subtitle">
                Comprehensive solutions for modern construction projects
              </p>
            </div>

            {/* Content Sections */}
            <div className="services-content">
          {servicesData.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className={`services-info-group ${activeSection === item.id ? 'active' : ''}`}
            >
              <div className="service-header">
                <h2 className="service-title">{item.title} Services</h2>
                <div className="service-divider"></div>
              </div>
              
              <div className="service-description">
                <p>{item.description}</p>
              </div>

              <div className="service-features">
                <h3 className="section-subtitle">Key Features</h3>
                <div className="service-image-container">
                  <img src={item.image} alt={`${item.title} Services`} className="service-image" />
                </div>
                <ul className="feature-list">
                  {item.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-benefits">
                <h3 className="section-subtitle">Benefits</h3>
                <ul className="benefit-list">
                  {item.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-bullet">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-details-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Construction Projects?</h3>
            <p className="cta-subtitle">
              Contact us today to learn how our services can benefit your organization
            </p>
            <button className="cta-button">
              Get Started →
            </button>
          </div>
        </div>
          </div>
        </div>
      </section>

      <div className="login-sitemap-section">
        <Sitemap />
      </div>
    </>
  )
}

export default ServicesDetails
