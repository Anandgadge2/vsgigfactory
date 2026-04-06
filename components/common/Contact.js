'use client'

import { useRouter } from 'next/navigation'

const Contact = () => {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = {
      name: e.target.name?.value || '',
      companyName: e.target.companyName?.value || '',
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    }
    
    // Here you would normally send the data to your backend
    console.log('Contact form submitted:', formData)
    
    // Show success message (you can replace this with a proper toast/notification)
    alert('Thank you for your message! We will get back to you soon.')
    
    // Reset form
    e.target.reset()
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="contact-header-content">
            <button onClick={handleBack} className="back-button">
              <span className="back-arrow">←</span>
              Back
            </button>
            <h2 className="contact-title">Get In Touch</h2>
          </div>
          <p className="contact-subtitle">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Company Name <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input required"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input required"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea required"
                placeholder="Tell us about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </div>

  
      </div>
    </section>
  )
}

export default Contact
