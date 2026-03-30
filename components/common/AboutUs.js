'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AboutUs = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <section className="about-us-section">
      {/* Header - No Container */}
      <div className="about-header-simple">
        <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
          <button onClick={handleBackClick} className="back-button" style={{ position: 'absolute', left: '40px', top: '0' }}>
            ← Back
          </button>
          <h1 className="about-title">About Gigfactory</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="about-content">
          {/* Who We Are Section - Full Width */}
          <div className="about-section">
            <div className="section-header">
              <h2 className="section-title">Who We Are</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content">
              <p className="about-text">
                Gigfactory Private Limited revolutionizes the construction industry by providing an integrated, technology powered,
                one-stop solution for all your project needs. We have a diverse network of 1000+ experts spanning architecture,
                Structure, Interior design, project management, engineering, and more.               </p>
              <p className="about-text">
                Our platform streamlines workflows, optimizes resource allocation, and drives efficiency in design and construction.
                With a proven track record of delivering over 10 Million Sq ft across diverse sectors, Gigfactory is committed to
                providing Quality and reliability to our partners in every project, ensuring exceptional outcomes for our clients.               </p>
            </div>
          </div>

          {/* Mission and Vision Side by Side */}
          <div className="about-sections-row">
            {/* Our Mission */}
            <div className="about-section-small">
              <div className="section-header">
                <h2 className="section-title">Our Mission</h2>
                <div className="section-divider"></div>
              </div>
              <div className="section-content">
                <p className="about-text">
                  To deliver exceptional construction technology services that enhance project outcomes, reduce costs, improve timelines, and promote sustainability through innovative digital solutions and expert collaboration.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="about-section-small">
              <div className="section-header">
                <h2 className="section-title">Our Vision</h2>
                <div className="section-divider"></div>
              </div>
              <div className="section-content">
                <p className="about-text">
                  To become the global leader in construction technology solutions, transforming how buildings are designed, constructed, and managed through digital innovation and sustainable practices.
                </p>
              </div>
            </div>
          </div>

          {/* Content from Image */}
          <div className="about-section">
            <div className="section-content">
              <p className="about-text">
                Company Inc - U70109MH2022PTC385108<br />
                STARTUP INDIA Regd - DIPP115525<br />
                GST - 27AAJCG8593Q1ZG<br />
                UDYAM - UDYAM-MH-33-0504399
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
