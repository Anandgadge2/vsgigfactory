'use client'

import { useRouter } from 'next/navigation'

const CaseStudies = ({ onContactClick }) => {
  const router = useRouter()
  
  const caseStudies = [
    {
      id: 1,
      title: "Commercial Complex Development",
      category: "Commercial",
      description: "Complete development of 50,000 sq.ft. commercial complex with advanced BIM integration",
      image: "/api/placeholder/400/300",
      features: ["BIM Modeling", "Cost Optimization", "Timeline Management"],
      link: "#"
    },
    {
      id: 2,
      title: "Residential Tower Project",
      category: "Residential",
      description: "30-story residential tower with sustainable construction practices",
      image: "/api/placeholder/400/300",
      features: ["Sustainable Design", "Quality Control", "Safety Compliance"],
      link: "#"
    },
    {
      id: 3,
      title: "Industrial Facility",
      category: "Industrial",
      description: "Large-scale industrial facility with complex MEP systems",
      image: "/api/placeholder/400/300",
      features: ["MEP Integration", "Project Coordination", "Risk Management"],
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Infrastructure",
      category: "Healthcare",
      description: "State-of-the-art healthcare facility with specialized requirements",
      image: "/api/placeholder/400/300",
      features: ["Specialized Systems", "Regulatory Compliance", "Quality Assurance"],
      link: "#"
    },
    {
      id: 5,
      title: "Educational Campus",
      category: "Educational",
      description: "Multi-building educational campus with integrated infrastructure",
      image: "/api/placeholder/400/300",
      features: ["Campus Planning", "Infrastructure Integration", "Sustainable Solutions"],
      link: "#"
    },
    {
      id: 6,
      title: "Transportation Hub",
      category: "Infrastructure",
      description: "Major transportation hub with complex civil engineering requirements",
      image: "/api/placeholder/400/300",
      features: ["Civil Engineering", "Structural Design", "Project Management"],
      link: "#"
    }
  ]

  const handleViewProject = (studyId) => {
    router.push(`/case-studies/${studyId}`)
  }

  return (
    <>
      <section id="case-studies" className="case-studies-section">
        <div className="container">
          <div className="case-studies-header">
            <h2 className="case-studies-title">Our Case Studies</h2>
            <p className="case-studies-subtitle">
              Real construction projects delivered with quality, precision, and efficiency.          </p>
          </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-category">{study.category}</div>
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-description">{study.description}</p>
                <div className="case-study-features">
                  {study.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button onClick={() => handleViewProject(study.id)} className="case-study-link">
                  View Case Study 
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-section">
          <button onClick={() => {
            console.log('View More button clicked')
            console.log('Navigating to /case-studies')
            router.push('/case-studies')
          }} className="view-more-button">
            View More Case Studies →
          </button>
        </div>

        <div className="case-studies-cta">
          <p>Ready to move your project forward?</p>
          <button onClick={onContactClick} className="case-studies-button">
            <span>Let's Connect →</span>            
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default CaseStudies
