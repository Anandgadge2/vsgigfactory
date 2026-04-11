'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Sitemap from './Sitemap.js'

const OurExpertise = () => {
  const router = useRouter()
  const [selectedServiceId, setSelectedServiceId] = useState(null)
  const modalContentRef = useRef(null)

  const handleBackClick = () => {
    router.back()
  }

  const handleServiceClick = (serviceTitle) => {
    // Map service titles to service IDs
    const serviceMapping = {
      'Architectural Design': '2d',
      '3D Modeling': '3d',
      '4D/5D Construction Simulation': '4d',
      'Scan to BIM': '2d',
      'Construction Documentation': '2d',
      'Constructability Review': 'audit',
      'Clash Coordination': '3d',
      'Value Engineering': 'pp-c',
      'Quantity Takeoff': 'boq'
    }

    const serviceId = serviceMapping[serviceTitle] || '2d'

    // Navigate to home page and open service modal
    router.push('/')
    setTimeout(() => {
      const event = new CustomEvent('openServiceModal', { detail: serviceId })
      window.dispatchEvent(event)
    }, 100)
  }

  const closeModal = () => {
    setSelectedServiceId(null)
  }

  const services = [
    {
      title: "Architectural Design",
      description: "Advanced 3D architectural modeling and design visualization with parametric capabilities",
      image: "/assets/Architectural Design.png", // replace with your image
      features: ["Parametric Design", "3D Visualization", "Design Optimization"]
    },
    {
      title: "3D Modeling",
      description: "High-precision 3D modeling services for complex architectural and engineering projects",
      image: "/assets/3D Modelling.png",
      features: ["LOD Development", "Family Creation", "Model Coordination"]
    },
    {
      title: "4D/5D Construction Simulation",
      description: "Time and cost simulation for construction planning and project management optimization",
      video: "/assets/4D_video.mp4",
      features: ["Construction Sequencing", "Cost Analysis", "Resource Planning"]
    },
    {
      title: "Scan to BIM",
      description: "Convert point cloud data and laser scans into accurate BIM models for existing buildings",
      image: "/assets/SCAN TO BIM.png",
      features: ["Point Cloud Processing", "As-Built Modeling", "Accuracy Verification"]
    },
    {
      title: "Construction Documentation",
      description: "Comprehensive construction documentation with detailed drawings and specifications from BIM models",
      image: "/assets/Construction Documentation.png",
      features: ["Drawing Extraction", "Specification Writing", "Document Management"]
    },
    {
      title: "Constructability Review",
      description: "Thorough constructability analysis to identify potential issues and optimize building methods",
      image: "/assets/Construction REVIEW.png",
      features: ["Buildability Assessment", "Risk Identification", "Optimization Recommendations"]
    },
    {
      title: "Clash Coordination",
      description: "Advanced clash detection and coordination to resolve conflicts between building systems",
      image: "/assets/CLASH COORDINATION.png",
      features: ["Clash Detection", "Conflict Resolution", "System Coordination"]
    },
    {
      title: "Value Engineering",
      description: "Value engineering analysis to optimize costs while maintaining quality and functionality",
      image: "/assets/VALUE ENGINEERING.png",
      features: ["Cost Optimization", "Alternative Solutions", "Quality Assurance"]
    },
    {
      title: "Quantity Takeoff",
      description: "Accurate quantity extraction and material takeoffs from BIM models for cost estimation",
      image: "/assets/QUANTITY TAKEOFF.png",
      features: ["Material Quantification", "Cost Estimation", "Quantity Analysis"]
    }
  ]

  return (
    <>
      <section className="our-expertise-section expertise-page">
        {/* Header */}
        <div className="expertise-header-simple">
          <h1 className="expertise-title">BIM Services</h1>
        </div>


        {/* Cards */}
        <div className="container">
          <div className="bim-cards-grid">
            {services.map((service, index) => (
              <div key={index} className="bim-card">
                {/* Image */}
                <div className="bim-card-image">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="bim-video"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={service.image} alt={service.title} />
                  )}
                </div>

                {/* Content */}
                <div className="bim-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Features */}
                  <ul>
                    {service.features.map((item, i) => (
                      <li key={i}>
                        <span className="tick">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-header-simple">
          <h1 className="expertise-title">BIM Consulting</h1>
        </div>


        {/* Cards */}
        <div className="container">
          <div className="bim-cards-grid">
            {[
              {
                title: "BIM Strategy Plan",
                description: "Comprehensive BIM strategy development and roadmap planning for successful project execution",
                image: "/assets/BIMStra.png",
                features: ["Strategic Planning", "Roadmap Development", "Goal Alignment"]
              },
              {
                title: "BIM Implementation",
                description: "End-to-end BIM implementation support with proven methodologies and best practices",
                image: "/assets/BIM Implementation.png",
                features: ["Process Setup", "Team Training", "Technology Integration"]
              },
              {
                title: "BIM Execution Plan",
                description: "Detailed BIM execution planning with clear milestones and deliverables for project success",
                image: "/assets/BIM Execution Plan.png",
                features: ["Project Planning", "Milestone Definition", "Quality Control"]
              },
              {
                title: "BIM Audit",
                description: "Comprehensive BIM audit and assessment to optimize processes and ensure compliance",
                image: "/assets/BIM Audit.png",
                features: ["Process Review", "Compliance Check", "Performance Analysis"]
              }
            ].map((service, index) => (
              <div key={index} className="bim-card">
                {/* Image */}
                <div className="bim-card-image">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="bim-video"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={service.image} alt={service.title} />
                  )}
                </div>

                {/* Content */}
                <div className="bim-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Features */}
                  <ul>
                    {service.features.map((item, i) => (
                      <li key={i}>
                        <span className="tick">✔</span> {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-header-simple">
          <h1 className="expertise-title">Other Services</h1>
        </div>


        {/* Cards */}
        <div className="container">
          <div className="bim-cards-grid">
            {[
              {
                title: "CAD Drafting",
                description: "Professional CAD drafting services with precision and adherence to industry standards",
                image: "/assets/CAD Drafting.png",
                features: ["2D Drawings", "3D Modeling", "Detailing Services"]
              },
              {
                title: "Architecture & Structure Designing",
                description: "Integrated architectural and structural design solutions for comprehensive building projects",
                image: "/assets/Arch_struct. Design.1.png",
                features: ["Architectural Design", "Structural Analysis", "Integrated Solutions"]
              },
              {
                title: "BOQ Preparation & QTO",
                description: "Detailed Bill of Quantities preparation and Quantity Takeoff services for accurate cost estimation",
                image: "/assets/BOQ PREP AND QTO.png",
                features: ["Bill of Quantities", "Quantity Takeoff", "Cost Analysis"]
              },
              {
                title: "Audits",
                description: "Comprehensive project audits to ensure compliance, quality, and process optimization",
                image: "/assets/Audits.png",
                features: ["Quality Audits", "Compliance Review", "Process Optimization"]
              },
              {
                title: "Planning & Project Support",
                description: "Strategic project planning and comprehensive support services for successful project delivery",
                image: "/assets/PLANNING AND PROJECT SUPPORT.png",
                features: ["Project Planning", "Coordination Support", "Delivery Management"]
              }
            ].map((service, index) => (
              <div key={index} className="bim-card">
                {/* Image */}
                <div className="bim-card-image">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="bim-video"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={service.image} alt={service.title} />
                  )}
                </div>

                {/* Content */}
                <div className="bim-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Features */}
                  <ul>
                    {service.features.map((item, i) => (
                      <li key={i}>
                        <span className="tick">✔</span> {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Section */}
      <div className="login-sitemap-section">
        <Sitemap />
      </div>
    </>
  )
}

export default OurExpertise
