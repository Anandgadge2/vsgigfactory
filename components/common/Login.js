'use client'

import { useState } from 'react'
import Sitemap from './Sitemap'

const Login = () => {
  const [showExpertForm, setShowExpertForm] = useState(false)
  const [showFreelancerForm, setShowFreelancerForm] = useState(false)
  const [isApplyBoxOpen, setIsApplyBoxOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    expertise: '',
    experience: '',
    company: '',
    message: '',
    driveLink: ''
  })
  const [freelancerData, setFreelancerData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    skills: '',
    experience: '',
    portfolio: '',
    message: '',
    driveLink: ''
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

  const handleFreelancerBtnClick = () => {
    setShowFreelancerForm(true)
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFreelancerFormChange = (e) => {
    setFreelancerData({
      ...freelancerData,
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
      city: '',
      state: '',
      expertise: '',
      experience: '',
      company: '',
      message: '',
      driveLink: ''
    })
    setShowExpertForm(false)
  }

  const handleFreelancerFormSubmit = (e) => {
    e.preventDefault()
    console.log('Freelancer application submitted:', freelancerData)
    // Here you would normally send the data to your backend
    alert('Freelancer application submitted successfully! We will contact you soon.')
    setFreelancerData({
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      skills: '',
      experience: '',
      portfolio: '',
      message: '',
      driveLink: ''
    })
    setShowFreelancerForm(false)
  }

  const closeForm = () => {
    setShowExpertForm(false)
  }

  const closeFreelancerForm = () => {
    setShowFreelancerForm(false)
  }

  return (
    <div className="login-page">

      {/* ===== APPLY CARDS SECTION ===== */}
      <div className="login-header-apply">
        <button 
          className={`apply-header-btn ${isApplyBoxOpen ? 'hidden' : ''}`}
          onClick={() => setIsApplyBoxOpen(true)}
        >
          Apply
        </button>
      </div>

      <div className={`apply-slider-container ${isApplyBoxOpen ? 'open' : ''}`}>
        <div className="expert-card">
          <p className="expert-title">
            Interested in becoming a Gigfactory Expert?
          </p>

          <p className="expert-subtitle">
            Submit your profile and explore freelance opportunities with us
          </p>

          <div className="expert-buttons-container">
            <button className="expert-btn" onClick={handleExpertBtnClick}>
              Apply as an Agency
            </button>
            <button className="expert-btn" onClick={handleFreelancerBtnClick}>
              Apply as a Freelancer
            </button>
          </div>

          {/* Up arrow close button at the bottom */}
          <div className="close-apply-slider" onClick={() => setIsApplyBoxOpen(false)}>
            <button className="close-arrow-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===== MAIN LOGIN CARD ===== */}
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <h1 style={{ width: '100%', textAlign: 'center', margin: 0 }}>
            <a 
              href="https://app.gigbimlabs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="core-link"
              style={{
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: 'inherit',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'inline-block',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#000000';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
            >
              CORE
            </a>
          </h1>
          <p>Gigfactory Project Management Platform</p>
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

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleFormChange}
                      required
                      placeholder="Enter your state"
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
                    rows="6"
                  />
                </div>
                
                <div className="form-group">
                  <label>Drive Link (CV/Resume/Certificates)</label>
                  <input
                    type="url"
                    name="driveLink"
                    value={formData.driveLink}
                    onChange={handleFormChange}
                    placeholder="Share your Google Drive for CV, resume, and certificates"
                  />
                  <small style={{ 
                    color: '#64748b', 
                    fontSize: '0.875rem', 
                    marginTop: '4px',
                    display: 'block',
                    fontStyle: 'italic'
                  }}>
                    Please share a link where we can access your CV, resume, and certificates
                  </small>
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

      {/* ===== FREELANCER APPLICATION FORM MODAL ===== */}
      {showFreelancerForm && (
        <div className="expert-form-overlay" onClick={closeFreelancerForm}>
          <div className="expert-form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="expert-form-header">
              <h2>Apply as a Freelancer</h2>
              <button className="close-form-btn" onClick={closeFreelancerForm}>&times;</button>
            </div>
            
            <form className="expert-form" onSubmit={handleFreelancerFormSubmit}>
              {/* Personal Information Section */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={freelancerData.name}
                      onChange={handleFreelancerFormChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={freelancerData.email}
                      onChange={handleFreelancerFormChange}
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
                      value={freelancerData.phone}
                      onChange={handleFreelancerFormChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Portfolio Website</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={freelancerData.portfolio}
                      onChange={handleFreelancerFormChange}
                      placeholder="Enter your portfolio website"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={freelancerData.city}
                      onChange={handleFreelancerFormChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                      value={freelancerData.state}
                      onChange={handleFreelancerFormChange}
                      required
                      placeholder="Enter your state"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="form-section">
                <h3 className="form-section-title">Professional Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Skills & Expertise *</label>
                    <select
                      name="skills"
                      value={freelancerData.skills}
                      onChange={handleFreelancerFormChange}
                      required
                    >
                      <option value="">Select your skills</option>
                      <option value="architectural-design">Architectural Design</option>
                      <option value="structural-engineering">Structural Engineering</option>
                      <option value="mep-engineering">MEP Engineering</option>
                      <option value="bim-modeling">BIM Modeling</option>
                      <option value="3d-visualization">3D Visualization</option>
                      <option value="project-management">Project Management</option>
                      <option value="construction-management">Construction Management</option>
                      <option value="sustainability-consulting">Sustainability Consulting</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="urban-planning">Urban Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Years of Experience *</label>
                    <select
                      name="experience"
                      value={freelancerData.experience}
                      onChange={handleFreelancerFormChange}
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
                  <label>Tell us about your freelance experience</label>
                  <textarea
                    name="message"
                    value={freelancerData.message}
                    onChange={handleFreelancerFormChange}
                    placeholder="Share your freelance experience, notable projects, and why you'd like to work with Gigfactory..."
                    rows="6"
                  />
                </div>
                
                <div className="form-group">
                  <label>Portfolio/Work Samples Link</label>
                  <input
                    type="url"
                    name="driveLink"
                    value={freelancerData.driveLink}
                    onChange={handleFreelancerFormChange}
                    placeholder="Share your Google Drive, Behance, or portfolio link"
                  />
                  <small style={{ 
                    color: '#64748b', 
                    fontSize: '0.875rem', 
                    marginTop: '4px',
                    display: 'block',
                    fontStyle: 'italic'
                  }}>
                    Please share a link where we can see your work samples and portfolio
                  </small>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeFreelancerForm}>
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
        <p>At Gigfactory, culture is not just about where we work — it&apos;s about how we think, collaborate, and build</p>
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