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
      images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
      area: "50,000 sq ft",
      location: "Mumbai, India",
      scope: "BIM modeling, coordination, clash detection",
      status: "completed",
      type: "Commercial"
    },
    {
      title: "Green Hospital Complex",
      description: "Eco-friendly healthcare facility with advanced medical infrastructure and patient-centered design",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "75,000 sq ft",
      location: "Pune, India",
      scope: "MEP design support, BIM coordination, as-builts",
      status: "in-progress",
      type: "Healthcare"
    },
    {
      title: "Luxury Residential Tower",
      description: "Premium residential complex with modern amenities and sustainable living spaces",
      images: ["/images/project3.jpg", "/images/project3.jpg", "/images/project3.jpg"],
      area: "120,000 sq ft",
      location: "Delhi, India",
      scope: "Facade coordination, 4D sequencing, quantity takeoff",
      status: "completed",
      type: "Residential"
    }
  ]

  return (
    <>
      <section className="our-expertise-section projects-page">
        {/* Header */}
        <div className="expertise-header-simple">
          <h1 className="expertise-title">Projects</h1>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="bim-cards-grid">
          {services.map((service, index) => (
            <div key={index} className="bim-card">
              {/* Image with Status and Type Badges */}
              <div className="bim-card-image">
                <div className="project-image-slider" aria-label={`${service.title} images`}>
                  <div className="project-image-track">
                    {(service.images ?? []).slice(0, 3).map((src, imgIndex) => (
                      <div key={imgIndex} className="project-image-slide">
                        <img src={src} alt={`${service.title} image ${imgIndex + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
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

                {/* Scope */}
                <div className="project-scope-box">
                  <span className="scope-label">Scope</span>
                  <span className="scope-value">{service.scope}</span>
                </div>

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
                    <div className="detail-icon">📍</div>
                    <div className="detail-info">
                      <span className="detail-label">Location</span>
                      <span className="detail-value">{service.location}</span>
                    </div>
                  </div>
                </div>
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
