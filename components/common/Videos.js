'use client'

import { useState } from 'react'

const Trust = () => {
  const [activeModal, setActiveModal] = useState(null)

  const videos = [
    {
      id: 1,
      name: "Gigfactory Company Video",
      videoId: "cU8iEKLeqvc?si=8pqIXKYRktopX4q8"
    },
    {
      id: 2,
      name: "Puneet Arora - AMS Project Consultants",
      videoId: "sC1WwWJkLAI?si=q4xHvLEguOl_CrJy"
    },
    {
      id: 3,
      name: "Harshad Rajadhyax - Sandersons",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      name: "Yayati Kene | Real Estate",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 5,
      name: "Ashish | Construction Expert",
      videoId: "dQw4w9WgXcQ"
    }
  ]

  return (
    <section className="trust-section">
      <div className="trust-container">

        <h2 className="trust-heading">
          Trusted by hundreds of Construction Industry Professionals
        </h2>

        {/* VIDEO SLIDER */}
        <div className="trust-slider">
          {videos.map((video) => (
            <div key={video.id} className="trust-card">

              <div
                className="video-box"
                onClick={() => setActiveModal(video.videoId)}
              >
                <div className="play-btn">▶</div>
              </div>

              <div className="video-name">
                {video.name}
              </div>

            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="slider-progress">
          <div className="progress-fill"></div>
        </div>

        {/* Description */}
        <p className="trust-desc">
          At Gigfactory, our success is measured by the confidence our clients place in us.
          Across 10+ million sq.ft. of delivered projects, we have partnered with developers,
          contractors, and consultants to bring clarity, coordination, and intelligence
          to complex construction projects.
        </p>

        <h3 className="trust-footer">Insights & Industry Knowledge</h3>

      </div>

      {/* MODAL */}
      {activeModal && (() => {
        // Helper to extract clean video ID regardless of whether user provided full URL or just ID
        let videoId = activeModal;
        if (activeModal.includes('youtube.com/watch')) {
          const urlParams = new URLSearchParams(activeModal.split('?')[1]);
          videoId = urlParams.get('v') || activeModal.split('?')[0];
        } else if (activeModal.includes('youtu.be/')) {
          videoId = activeModal.split('youtu.be/')[1].split('?')[0];
        } else if (activeModal.includes('youtube.com/embed/')) {
          videoId = activeModal.split('youtube.com/embed/')[1].split('?')[0];
        } else {
          videoId = activeModal.split('?')[0]; // simple ID, strip query params
        }

        return (
          <div className="modal" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setActiveModal(null)}>
                &times;
              </span>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          </div>
        );
      })()}
    </section>
  )
}

export default Trust