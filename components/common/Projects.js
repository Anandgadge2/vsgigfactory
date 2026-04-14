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
      title: "Microsoft B3 Building",
      description: "End to End BIM Support for Brownfield Commercial building project for Mmoser",
      images: ["/images/project1.jpg", "/images/project1.jpg", "/images/project1.jpg"],
      area: "6,00,000 sqft",
      location: "Hyderabad, India",
      scope: "BIM - LOD 350, LOD 500, Clash Detection + Clash Resolutionl, Support + Documentation, LOD 500 ( Yet to reach the stage), BEP Preparation and Control ",
      status: "Ongoing",
      type: "Commercial"
    },
    {
      title: "Ryan International School",
      description: "End to End BIM support for school project for architecture trade, focusing on sheet production ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "95000 sqft",
      location: "Pune, India",
      scope: "BIM - LOD 350, Modeling + Documentation",
      status: "Ongoing",
      type: "Institutional "
    },
    {
      title: "Bluestar Interior Fitout project",
      description: "End-to-End BIM Support for Bluestar Interior Fitout Project for AMS Project Consultants, aimed at driving project management through BIM.",
      images: ["/images/project3.jpg", "/images/project3.jpg", "/images/project3.jpg"],
      area: "35000 sqft",
      location: "Pune, India",
      scope: "BIM - LOD 350, Modeling + Documentation, 4D Monitoring and Controls",
      status: "completed",
      type: "Commercial"
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
                <div className={`project-status ${String(service.status).toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.status.toLowerCase() === 'completed' ? '✓ Completed' : 'Ongoing'}
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
                      <span className="detail-value">{service.area}</span>
                    </div>
                  </div>
                  
                  <div className="project-detail-box">
                    <div className="detail-icon">📍</div>
                    <div className="detail-info">
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
