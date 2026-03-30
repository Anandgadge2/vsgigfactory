'use client'

import { useRouter } from 'next/navigation'

const OurExpertise = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  const services = [
    {
      title: "Architectural Design",
      description: "Advanced 3D architectural modeling and design visualization with parametric capabilities",
      image: "/images/service1.jpg", // replace with your image
      features: ["Parametric Design", "3D Visualization", "Design Optimization"]
    },
    {
      title: "3D Modeling",
      description: "High-precision 3D modeling services for complex architectural and engineering projects",
      image: "/images/service2.jpg",
      features: ["LOD Development", "Family Creation", "Model Coordination"]
    },
    {
      title: "4D/5D Construction Simulation",
      description: "Time and cost simulation for construction planning and project management optimization",
      image: "/images/service3.jpg",
      features: ["Construction Sequencing", "Cost Analysis", "Resource Planning"]
    },
    {
      title: "Scan to BIM",
      description: "Convert point cloud data and laser scans into accurate BIM models for existing buildings",
      image: "/images/service1.jpg",
      features: ["Point Cloud Processing", "As-Built Modeling", "Accuracy Verification"]
    },
    {
      title: "Construction Documentation",
      description: "Comprehensive construction documentation with detailed drawings and specifications from BIM models",
      image: "/images/service2.jpg",
      features: ["Drawing Extraction", "Specification Writing", "Document Management"]
    },
    {
      title: "Constructability Review",
      description: "Thorough constructability analysis to identify potential issues and optimize building methods",
      image: "/images/service3.jpg",
      features: ["Buildability Assessment", "Risk Identification", "Optimization Recommendations"]
    },
    {
      title: "Clash Coordination",
      description: "Advanced clash detection and coordination to resolve conflicts between building systems",
      image: "/images/service1.jpg",
      features: ["Clash Detection", "Conflict Resolution", "System Coordination"]
    },
    {
      title: "Value Engineering",
      description: "Value engineering analysis to optimize costs while maintaining quality and functionality",
      image: "/images/service2.jpg",
      features: ["Cost Optimization", "Alternative Solutions", "Quality Assurance"]
    },
    {
      title: "Quantity Takeoff",
      description: "Accurate quantity extraction and material takeoffs from BIM models for cost estimation",
      image: "/images/service3.jpg",
      features: ["Material Quantification", "Cost Estimation", "Quantity Analysis"]
    }
  ]

  return (
    <section className="our-expertise-section">
      {/* Header */}
      <div className="expertise-header-simple">
        <h1 className="expertise-title">BIM Services</h1>
        <p className="expertise-subtitle">
          Comprehensive Building Information Modeling solutions for modern construction
        </p>
      </div>


      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
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
        <p className="expertise-subtitle">
          Strategic BIM implementation and consulting services for construction excellence
        </p>
      </div>


      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {[
            {
              title: "BIM Strategy Plan",
              description: "Comprehensive BIM strategy development and roadmap planning for successful project execution",
              image: "/images/service2.jpg",
              features: ["Strategic Planning", "Roadmap Development", "Goal Alignment"]
            },
            {
              title: "BIM Implementation",
              description: "End-to-end BIM implementation support with proven methodologies and best practices",
              image: "/images/service3.jpg",
              features: ["Process Setup", "Team Training", "Technology Integration"]
            },
            {
              title: "BIM Execution Plan",
              description: "Detailed BIM execution planning with clear milestones and deliverables for project success",
              image: "/images/service1.jpg",
              features: ["Project Planning", "Milestone Definition", "Quality Control"]
            },
            {
              title: "BIM Audit",
              description: "Comprehensive BIM audit and assessment to optimize processes and ensure compliance",
              image: "/images/service2.jpg",
              features: ["Process Review", "Compliance Check", "Performance Analysis"]
            }
          ].map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
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

                {/* Button */}
                <button className="learn-btn">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className="expertise-header-simple">
        <h1 className="expertise-title">Other Services</h1>
        <p className="expertise-subtitle">
          Comprehensive architectural and engineering support services for complete project delivery
        </p>
      </div>


      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {[
            {
              title: "CAD Drafting",
              description: "Professional CAD drafting services with precision and adherence to industry standards",
              image: "/images/service1.jpg",
              features: ["2D Drawings", "3D Modeling", "Detailing Services"]
            },
            {
              title: "Architecture & Structure Designing",
              description: "Integrated architectural and structural design solutions for comprehensive building projects",
              image: "/images/service2.jpg",
              features: ["Architectural Design", "Structural Analysis", "Integrated Solutions"]
            },
            {
              title: "BOQ Preparation & QTO",
              description: "Detailed Bill of Quantities preparation and Quantity Takeoff services for accurate cost estimation",
              image: "/images/service3.jpg",
              features: ["Bill of Quantities", "Quantity Takeoff", "Cost Analysis"]
            },
            {
              title: "Audits",
              description: "Comprehensive project audits to ensure compliance, quality, and process optimization",
              image: "/images/service1.jpg",
              features: ["Quality Audits", "Compliance Review", "Process Optimization"]
            },
            {
              title: "Planning & Project Support",
              description: "Strategic project planning and comprehensive support services for successful project delivery",
              image: "/images/service2.jpg",
              features: ["Project Planning", "Coordination Support", "Delivery Management"]
            }
          ].map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
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

                {/* Button */}
                <button className="learn-btn">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>  
    </section>
  )
}

export default OurExpertise
