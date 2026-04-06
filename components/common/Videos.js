'use client'

import { useState } from 'react'

const Videos = () => {
  const [activeModal, setActiveModal] = useState(null)

  const videos = [
    {
      id: 1,
      name: "Puneet Arora - AMS Project Consultants",
      videoId: "cU8iEKLeqvc?si=8pqIXKYRktopX4q8"
    },
    {
      id: 2,
      name: "Harshad Rajadhyax - Sandersons",
      videoId: "qJLOReEmQE0?si=Za1t6SjBSyNdgp1N"
    },
    {
      id: 3,
      name: "Yayati Kene | Real Estate",
      videoId: "oaIkiqXfBqI?si=BY0LOl5_iXUr-KHz"
    },
    {
      id: 4,
      name: "Ashish | Construction Expert",
      videoId: "sC1WwWJkLAI?si=q4xHvLEguOl_CrJy"
    }
  ]

  return (
    <section className="videos-section">
      <div className="videos-container">

        {/* Header */}
        <div className="videos-header">
          <h2 className="videos-title">Trusted by hundreds of Construction Industry Professionals</h2>
        </div>

        {/* Video Slider with Horizontal Scroll */}
        <div className="videos-slider-container">
          <div className="videos-slider">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div
                  className="video-thumbnail"
                  onClick={() => setActiveModal(video.videoId)}
                >
                  <div className="play-overlay">
                    <div className="play-button">▶</div>
                  </div>
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId.split('?')[0]}/hqdefault.jpg`}
                    alt={video.name}
                    className="video-image"
                  />
                </div>
                <div className="video-info">
                  <h4 className="video-title">{video.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Description */}
        <div className="videos-description">
          <p>
            At Gigfactory, we pride ourselves on delivering exceptional BIM and construction solutions.
            Our video testimonials showcase real projects and client experiences across various sectors.
          </p>
        </div>
        {/* Insights & Industry Knowledge Section */}
        <div className="videos-middle-section">
          <div className="video-highlight insights-section">
            <h3>Insights & Industry Knowledge</h3>
            <p>Deep expertise in BIM technology and construction processes enables us to deliver innovative solutions.</p>
          </div>
        </div>

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
          <div className="video-modal" onClick={() => setActiveModal(null)}>
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

export default Videos