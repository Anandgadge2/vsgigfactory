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
    },
    {
      title: "Webworks Data Centre Project ",
      description: "Tracking and monitoring of project using BIM 4D, Synchro and Primavera P6 in weekly frequency - tradewise/phasewise and contractor wise ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "8,00,000 sqft",
      location: "Navi Mumbai, India",
      scope: "BIM - LOD 350, Modeling + Documentation, 4D Monitoring and Controls",
      status: "Ongoing",
      type: "Data Centre"
    },
    {
      title: "Mall Project ( Kolkata ) ",
      description: "BIM support for Edifice Client's interior works in Brookfield Mall, a high-end mall project.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "70,000 sqft",
      location: "Kolkata, India",
      scope: "BIM ID - LOD 350, Modeling + Clash Detection + Clash Resolution, Support + Documentation",
      status: "Completed",
      type: "Retail"
    },
    {
      title: "Antariksh Logistics Park, Bhiwandi",
      description: "MEPF planning ,design and engineering support for logistic park by Space Deck Logistics  ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "2,68,000 sqft",
      location: "Bhiwandi, India",
      scope: "End to End Design and drawings for the Project including DBR Preparation, Individual trade drawings preparations, SIte visit and commisioning support",
      status: "Completed",
      type: "Logistics"
    },
    {
      title: "Mall Project ( Vizag) ",
      description: "BIM Support for Edifice for interior trade in a high end mall project  ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "3,30,000 sqft",
      location: "Vizag, India",
      scope: "BIM ID - LOD 350, Modeling + Clash Detection + Clash Resolution, Support + Documentation",
      status: "Completed",
      type: "Retail"
    },
    {
      title: "Peer Review & Optimisation project",
      description: "Peer review of MEPF design for luxury villas in Dubai, undertaken for Gulf Islamic Investment.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "1,80,000 Sqft",
      location: "Dubai, UAE",
      scope: "Peer review adhering to norms and optimisation of design for value engineering ",
      status: "Completed",
      type: "Residential"
    },
    {
      title: "Mission Critical Project (Confidential)",
      description: "Rectification of architectural BIM model and sheet extraction for data center project for Edifice ( Aconnex Project) ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "5,00,000 sqft",
      location: "Navi Mumbai, India",
      scope: "BIM - LOD 350, Modeling( Rectification) + Documentation",
      status: "Ongoing",
      type: "Data Centre"
    },
    {
      title: "3 Star Hotel Project in Puri ",
      description: "End-to-End BIM Support for a 3-star hotel project, aimed at adding value to execution by ensuring a clash-free building model for D&GM.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "1,00,000 sqft",
      location: "Puri, India",
      scope: "BIM LOD 350 - All Trades ( Ar/ St/ MEPF) + Clash Detection + Clash Resolution Support + BEP Prep and Monitoring ",
      status: "Completed",
      type: "Hospitality"
    },
    {
      title: "Mall Project ( Vizag) ",
      description: "BIM Support for Edifice for interior trade in a high end mall project  ",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "3,30,000 sqft",
      location: "Vizag, India",
      scope: "BIM ID - LOD 350, Modeling + Clash Detection + Clash Resolution, Support + Documentation",
      status: "Completed",
      type: "Retail"
    },
    {
      title: "Mission Critical Project",
      description: "Information management services for Colt's data center project (Phases 2 & 3), provided on behalf of the general contractor.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "3,30,000 sqft",
      location: "Navi Mumbai, India",
      scope: "BIM-LOD 400,500 + Clash Detection + Clash Resolution,Support + Documentation + As-Built preparation",
      status: "Ongoing",
      type: "Data Centre"
    },
    {
      title: "Billionaire Bunglow in Goa ( Dreamsmith)",
      description: "End to End BIM Support for Luxury Villa to add value for Execution by making the building clash free",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "30,000 sqft",
      location: "Goa, India",
      scope: "BIM LOD 350 - All Trades ( Ar/ St/ MEPF) + Clash Detection + Clash Resolution Support",
      status: "Completed",
      type: "Residential"
    },
    {
      title: "Medical College Project ",
      description: "Preperation of MEPF BOQ for Medical College and hospital at IIT Kanpur for Hosmac",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "8,00,000 sqft",
      location: "Kanpur, India",
      scope: "MEP BOQ - Tradewise and preparation of measurement sheet",
      status: "Completed",
      type: "Hospital"
    },
    {
      title: "The Address Hotel and Branded Residences Development",
      description: "Documentation support for Claramont's architecture and interior trade in a luxury 5-star hotel project.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "36,000 sqft",
      location: "Al Marjan, UAE",
      scope: "BIM - LOD 350, Modeling + Documentation",
      status: "Completed",
      type: "Mixed Use"
    },
    {
      title: "Commercial Project Visualisation",
      description: "4D sequencing and visualization for a USA-based retrofitting project, achieved by integrating the Revit model with the MSP schedule.",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "3,30,000 sqft",
      location: "USA",
      scope: "4D visualization video( as planned) by Integrating BIM ( Revit ) and MS Project Schedule with LOI 350",
      status: "Completed",
      type: "Institutional"
    },
    {
      title: "Mission Critical Project (Confidential)",
      description: "Preperation of architectural BIM for data center project",
      images: ["/images/project2.jpg", "/images/project2.jpg", "/images/project2.jpg"],
      area: "4,70,000 sqft",
      location: "USA",
      scope: "BIM - LOD 350, Modeling + Clash Detection + Clash Resolution, Support + Documentation",
      status: "Ongoing",
      type: "Hyderabad, India"
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
