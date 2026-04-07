'use client'

import { useRouter } from 'next/navigation'
import Sitemap from './Sitemap.js'

const Projects = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  const services = [
    {
      title: "Tech Park Development",
      description: "Modern technology park with sustainable design and advanced infrastructure for tech companies and startups",
      image: "/images/project1.jpg",
      area: "50,000 sq ft",
      duration: "18 months",
      status: "completed",
      type: "Commercial"
    },
    {
      title: "Green Hospital Complex",
      description: "Eco-friendly healthcare facility with advanced medical infrastructure and patient-centered design",
      image: "/images/project2.jpg",
      area: "75,000 sq ft",
      duration: "24 months",
      status: "in-progress",
      type: "Healthcare"
    },
    {
      title: "Luxury Residential Tower",
      description: "Premium residential complex with modern amenities and sustainable living spaces",
      image: "/images/project3.jpg",
      area: "120,000 sq ft",
      duration: "30 months",
      status: "completed",
      type: "Residential"
    }
  ]

  return (
    <>
      <section className="our-expertise-section">
        {/* Header */}
        <div className="expertise-header-simple">
          <button onClick={handleBackClick} className="back-button">
            ← Back
          </button>
          <h1 className="expertise-title">Projects</h1>
          <p className="expertise-subtitle">
            Comprehensive construction projects showcasing our expertise and innovation in building solutions
          </p>
        <p className="expertise-subtitle">
          Comprehensive construction projects showcasing our expertise and innovation in building solutions
        </p>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image with Status and Type Badges */}
              <div className="bim-card-image">
                <img src={service.image} alt={service.title} />
                <div className={`project-status ${service.status}`}>
                  {service.status === 'completed' ? '✓ Completed' : 'In Progress'}
                </div>
                <div className="project-type-badge">
                  {service.type}
                </div>
              </div>

              {/* Content */}
              <div className="bim-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {/* Project Details */}
                <div className="project-details">
                  <div className="project-detail-box">
                    <div className="detail-icon">📐</div>
                    <div className="detail-info">
                      <span className="detail-label">Area</span>
                      <span className="detail-value">{service.area}</span>
                    </div>
                  </div>
                  
                  <div className="project-detail-box">
                    <div className="detail-icon">⏱️</div>
                    <div className="detail-info">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button className="learn-btn">
                  VIEW PROJECT →
                </button>
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

export default Projects
