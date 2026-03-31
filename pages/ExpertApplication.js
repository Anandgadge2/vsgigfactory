'use client'

import { useState } from 'react'
import Link from 'next/link'

const ExpertApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    company: '',
    message: ''
  })

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
  }

  return (
    <div className="expert-application-page">
      {/* Header */}
      <div className="expert-application-header">
        <Link href="/" className="back-button">
          ← Back to Home
        </Link>
        <h1>Apply as Gigfactory Expert</h1>
        <p>Join our network of construction professionals and contribute to innovative projects</p>
      </div>

      {/* Form Container */}
      <div className="expert-form-container">
        <form className="expert-application-form" onSubmit={handleFormSubmit}>
          
          {/* Personal Information Section */}
          <div className="form-section">
            <h2 className="form-section-title">Personal Information</h2>
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
            <h2 className="form-section-title">Professional Information</h2>
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
            <h2 className="form-section-title">Additional Information</h2>
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
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <Link href="/" className="cancel-btn">
              Cancel
            </Link>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExpertApplication
