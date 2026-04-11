'use client'

import { useState, useEffect } from 'react'

const Hero = ({ onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/assets/1.png'
    },
    {
      id: 2,
      image: '/assets/hero2.png'
    },
    {
      id: 3,
      image: '/assets/3.png'
    },
    {
      id: 4,
      image: '/assets/4.png'
    },
    {
      id: 5,
      image: '/assets/5.png'
    },
    {
      id: 6,
      image: '/assets/6.png'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Global Capability Center for Construction Services
            </h1>
            <p className="hero-description">
              Technology-enabled platform for integrated BIM planning, designing & engineering.
              Project reference across 10+ Million Sqft.
            </p>
            <button onClick={onContactClick} className="hero-button">
              <span>Let's Connect →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
