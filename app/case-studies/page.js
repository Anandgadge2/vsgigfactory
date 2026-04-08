'use client'



import { useState } from 'react'

import { useRouter } from 'next/navigation'



import Sitemap from '../../components/common/Sitemap'



const CaseStudiesPage = () => {

  console.log('CaseStudiesPage component loaded')

  const router = useRouter()



  const caseStudies = [

    {

      id: 1,

      title: "Commercial Complex Development",

      category: "Commercial",

      description: "Complete development of 50,000 sq.ft. commercial complex with advanced BIM integration",

      image: "/api/placeholder/400/300",

      features: ["BIM Modeling", "Cost Optimization", "Timeline Management"],

      fullDescription: "This comprehensive commercial complex project showcases our expertise in large-scale development with cutting-edge BIM technology integration.",

      client: "ABC Developers",

      duration: "18 months",

      location: "Mumbai, India"

    },

    {

      id: 2,

      title: "Residential Tower Project",

      category: "Residential",

      description: "30-story residential tower with sustainable construction practices",

      image: "/api/placeholder/400/300",

      features: ["Sustainable Design", "Quality Control", "Safety Compliance"],

      fullDescription: "A landmark residential tower featuring sustainable construction methods and premium living spaces.",

      client: "XYZ Housing",

      duration: "24 months",

      location: "Bangalore, India"

    },

    {

      id: 3,

      title: "Industrial Facility",

      category: "Industrial",

      description: "Large-scale industrial facility with complex MEP systems",

      image: "/api/placeholder/400/300",

      features: ["MEP Integration", "Project Coordination", "Risk Management"],

      fullDescription: "State-of-the-art industrial facility with sophisticated mechanical, electrical, and plumbing systems.",

      client: "Manufacturing Corp",

      duration: "15 months",

      location: "Pune, India"

    },

    {

      id: 4,

      title: "Healthcare Infrastructure",

      category: "Healthcare",

      description: "State-of-the-art healthcare facility with specialized requirements",

      image: "/api/placeholder/400/300",

      features: ["Specialized Systems", "Regulatory Compliance", "Quality Assurance"],

      fullDescription: "Advanced healthcare infrastructure designed to meet stringent medical facility requirements.",

      client: "Healthcare Group",

      duration: "20 months",

      location: "Delhi, India"

    },

    {

      id: 5,

      title: "Educational Campus",

      category: "Educational",

      description: "Multi-building educational campus with integrated infrastructure",

      image: "/api/placeholder/400/300",

      features: ["Campus Planning", "Infrastructure Integration", "Sustainable Solutions"],

      fullDescription: "Comprehensive educational campus development with modern learning facilities.",

      client: "Education Trust",

      duration: "30 months",

      location: "Hyderabad, India"

    },

    {

      id: 6,

      title: "Transportation Hub",

      category: "Infrastructure",

      description: "Major transportation hub with complex civil engineering requirements",

      image: "/api/placeholder/400/300",

      features: ["Civil Engineering", "Structural Design", "Project Management"],

      fullDescription: "Major transportation infrastructure project serving millions of passengers annually.",

      client: "Transport Authority",

      duration: "36 months",

      location: "Chennai, India"

    },

    {

      id: 7,

      title: "Smart City Development",

      category: "Infrastructure",

      description: "Integrated smart city development with IoT and sustainable systems",

      image: "/api/placeholder/400/300",

      features: ["IoT Integration", "Smart Systems", "Sustainable Design"],

      fullDescription: "Next-generation smart city development with advanced IoT infrastructure.",

      client: "City Corporation",

      duration: "48 months",

      location: "Ahmedabad, India"

    },

    {

      id: 8,

      title: "Shopping Mall Complex",

      category: "Commercial",

      description: "Modern shopping mall with entertainment and retail spaces",

      image: "/api/placeholder/400/300",

      features: ["Retail Design", "Entertainment Spaces", "Parking Solutions"],

      fullDescription: "Contemporary shopping mall complex with world-class retail and entertainment facilities.",

      client: "Retail Developers",

      duration: "22 months",

      location: "Kolkata, India"

    },

    {

      id: 9,

      title: "IT Park Development",

      category: "Commercial",

      description: "Technology park with advanced infrastructure and amenities",

      image: "/api/placeholder/400/300",

      features: ["Tech Infrastructure", "Modern Amenities", "Green Building"],

      fullDescription: "Cutting-edge IT park designed for technology companies with world-class infrastructure.",

      client: "Tech Park Ltd",

      duration: "28 months",

      location: "Noida, India"

    }

  ]



  const handleViewProject = (studyId) => {

    router.push(`/case-studies/${studyId}`)

  }



  return (

    <>



      <main className="case-studies-page">

        <div className="container">

          {/* Page Header */}

          <div className="case-studies-page-header">

            <h1 className="case-studies-page-title">Our Case Studies</h1>

            <p className="case-studies-page-subtitle">

              Explore our portfolio of successful construction projects delivered with excellence, innovation, and precision.

            </p>

          </div>



          {/* Case Studies Grid */}

          <div className="case-studies-page-grid">

            {caseStudies.map((study) => (

              <div key={study.id} className="case-study-page-card">

                <div className="case-study-page-image">

                  <img src={study.image} alt={study.title} />

                  <div className="case-study-page-category">{study.category}</div>

                </div>

                <div className="case-study-page-content">

                  <h3 className="case-study-page-title">{study.title}</h3>

                  <p className="case-study-page-description">{study.description}</p>



                  <div className="case-study-page-meta">

                    <div className="meta-item">

                      <span className="meta-label">Client:</span>

                      <span className="meta-value">{study.client}</span>

                    </div>

                    <div className="meta-item">

                      <span className="meta-label">Duration:</span>

                      <span className="meta-value">{study.duration}</span>

                    </div>

                    <div className="meta-item">

                      <span className="meta-label">Location:</span>

                      <span className="meta-value">{study.location}</span>

                    </div>

                  </div>



                  <div className="case-study-page-features">

                    {study.features.map((feature, index) => (

                      <span key={index} className="feature-page-tag">{feature}</span>

                    ))}

                  </div>



                  <button

                    onClick={() => handleViewProject(study.id)}

                    className="case-study-page-link"

                  >

                    View Full Case Study →

                  </button>

                </div>

              </div>

            ))}

          </div>



          {/* CTA Section */}

          <div className="case-studies-page-cta">

            <h2>Have a Project in Mind?</h2>

            <p>Let's discuss how we can bring your vision to life with our expertise.</p>

            <button

              onClick={() => window.location.href = '/contact'}

              className="case-studies-page-cta-btn"

            >

              Start Your Project

            </button>

          </div>

        </div>

      </main>



      {/* Sitemap Section */}
      <div className="login-sitemap-section">
        <Sitemap />
      </div>
      
    </>

  )

}



export default CaseStudiesPage

