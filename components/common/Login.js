'use client'

import { useState } from 'react'
import Sitemap from './Sitemap'

const Login = () => {
  const [showExpertForm, setShowExpertForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    company: '',
    message: ''
  })

  const culturePillars = [
    {
      title: "Intelligence -Driven Thinking",
      description: "We embrace creativity and forward-thinking solutions"
    },
    {
      title: "Collaboration Over Silos", 
      description: "We work together to achieve exceptional results"
    },
    {
      title: "Ownership & Accountability",
      description: "We uphold the highest standards of ethics and transparency"
    },
    {
      title: "Continuous Learning & Growth",
      description: "We strive for outstanding quality in everything we do"
    }
  ]

  const handleExpertBtnClick = () => {
    setShowExpertForm(true)
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Expert application submitted:', formData)
    // Here you would normally send the data to your backend
    alert('Application submitted successfully! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      expertise: '',
      experience: '',
      company: '',
      message: ''
    })
    setShowExpertForm(false)
  }

  const closeForm = () => {
    setShowExpertForm(false)
  }

  return (
    <div className="login-page">

      {/* ===== MAIN LOGIN CARD ===== */}
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <p className="what-is-text" style={{ color: 'white' }}>what is</p>
          <h1>
            <a 
              href="https://app.gigbimlabs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="core-link"
            >
              CORE
            </a>
          </h1>
          <p>Gigfactory's Execution Control Platform</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h2>Login</h2>

          <form>
            <label>MAIL ID</label>
            <input type="email" placeholder="Enter your email" />

            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />

            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>


      {/* ===== SECOND CARD ===== */}
      <div className="expert-card">
        <p className="expert-title">
          Interested in becoming a Gigfactory Expert?
        </p>

        <p className="expert-subtitle">
          Submit your profile and explore freelance opportunities with us
        </p>

        <button className="expert-btn" onClick={handleExpertBtnClick}>
          Apply as an Expert
        </button>
      </div>

      {/* ===== EXPERT APPLICATION FORM MODAL ===== */}
      {showExpertForm && (
        <div className="expert-form-overlay" onClick={closeForm}>
          <div className="expert-form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="expert-form-header">
              <h2>Apply as Gigfactory Expert</h2>
              <button className="close-form-btn" onClick={closeForm}>&times;</button>
            </div>
            
            <form className="expert-form" onSubmit={handleFormSubmit}>
              {/* Personal Information Section */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="form-section">
                <h3 className="form-section-title">Professional Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Area of Expertise *</label>
                    <select
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select your expertise</option>
                      <option value="architectural">Architectural Design</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="mep">MEP Engineering</option>
                      <option value="bim">BIM Modeling</option>
                      <option value="project-management">Project Management</option>
                      <option value="construction">Construction Management</option>
                      <option value="sustainability">Sustainability Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Years of Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="15+">15+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="form-section">
                <h3 className="form-section-title">Additional Information</h3>
                <div className="form-group">
                  <label>Cover Letter / Tell us about yourself</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Share your experience, skills, and why you'd like to join Gigfactory as an expert..."
                    rows="4"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeForm}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== CULTURE TEXT ===== */}
      <div className="culture-text">
        <h3>Building Intelligence. Growing Together.</h3>
        <p>At Gigfactory, culture is not just about where we work — it's about how we think, collaborate, and build</p>
      </div>

      {/* ===== OUR CULTURE PILLARS HEADING ===== */}
      <div className="culture-pillars-heading">
        <h2>Our Culture Pillars</h2>
      </div>

      {/* ===== CULTURE PILLARS GRID ===== */}
      <div className="culture-pillars-grid">
        {culturePillars.map((pillar, index) => (
          <div key={index} className="culture-pillar">
            <div className="pillar-number">{index + 1}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* ===== SITEMAP SECTION ===== */}
      <div className="login-sitemap-section">
        <Sitemap />
      </div>

    </div>
  )
}

export default Login