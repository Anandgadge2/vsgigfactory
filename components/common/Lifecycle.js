'use client'

import { useState, useRef, Fragment, useEffect } from 'react'

const Lifecycle = ({ onContactClick }) => {
  const [activeStage, setActiveStage] = useState(null)
  const [hoveredStage, setHoveredStage] = useState(null)
  const lifecycleRef = useRef(null)

  // Handle click outside to close description
  useEffect(() => {
    const handleClickAnywhere = (event) => {
      // Check if click is on a stage circle
      const stageCircle = event.target.closest('.stage-circle')

      if (stageCircle) {
        // If clicking on a circle, let the circle's click handler handle it
        return
      } else if (lifecycleRef.current && lifecycleRef.current.contains(event.target)) {
        // If clicking anywhere else in the lifecycle section, close description
        setActiveStage(null)
      }
    }

    document.addEventListener('mousedown', handleClickAnywhere)
    return () => {
      document.removeEventListener('mousedown', handleClickAnywhere)
    }
  }, [])

  const stages = [
    {
      id: 1,
      name: 'Initiation',
      image: '/assets/Intiation Phase.png',
      description: 'Feasibility  &  concept  phase  planning',
      outputs: ['Project requirements', 'Stakeholder analysis', 'Initial scope definition', 'initial stage', 'project']
    },
    {
      id: 2,
      name: 'Pre-construction Planning',
      image: '/assets/Preconstruction Phase.png',
      description: 'Detailed planning and resource allocation',
      outputs: ['Project schedule', 'Resource planning', 'Budget estimation', 'Risk assessment']
    },
    {
      id: 3,
      name: 'Designing Development',
      image: '/assets/Design Development Phase.png',
      description: 'Architectural and engineering design development',
      outputs: ['Design documents', 'Engineering specifications', 'Material selection', 'Compliance checks']
    },
    {
      id: 4,
      name: 'Execution & Monitoring',
      image: '/assets/Execution Phase.png',
      description: 'Construction execution and progress monitoring',
      outputs: ['Construction progress', 'Quality control', 'Timeline tracking', 'Budget management']
    },
    {
      id: 5,
      name: 'Handover',
      image: '/assets/Handover Phase.png',
      description: 'Project completion and client handover',
      outputs: ['Final inspection', 'Documentation', 'Training', 'Project closure', 'final stage']
    }
  ]

  const handleStageClick = (stageId) => {
    setActiveStage(activeStage === stageId ? null : stageId)
  }

  const handleStageHover = (stageId) => {
    setHoveredStage(stageId);
  }

  const handleStageLeave = () => {
    setHoveredStage(null);
  }

  const shouldShowDescription = (stageId) => {
    return activeStage === stageId || hoveredStage === stageId
  }

  return (
    <section className={`lifecycle-section ${activeStage ? 'is-stage-active' : ''}`} ref={lifecycleRef}>
      <div className="container">
        <div className="lifecycle-header">
          <h2 className="lifecycle-title">End-to-End Construction Lifecycle Framework</h2>
          <p className="lifecycle-subtitle">
            Comprehensive project management from concept to completion
          </p>
        </div>

        <div className="lifecycle-stages">
          <Fragment key="stages-container">
            <div className="stages-container">
              {/* First Row - 3 circles */}
              <div className="stages-row first-row">
                {stages.slice(0, 3).map((stage, index) => (
                  <div key={stage.id} className="stage-wrapper">
                    <div className="stage-content">
                      <button
                        className={`stage-circle ${activeStage === stage.id ? 'active' : ''}`}
                        onClick={() => handleStageClick(stage.id)}
                        onMouseEnter={() => handleStageHover(stage.id)}
                        onMouseLeave={handleStageLeave}
                      >
                        <img src={stage.image} alt={stage.name} className="stage-image" />
                      </button>
                      <div className="stage-name">{stage.id}. {stage.name}</div>

                      {/* Description Box - Positioned below each circle */}
                      {shouldShowDescription(stage.id) && (
                        <div key={`description-${stage.id}`} className={`lifecycle-description ${shouldShowDescription(stage.id) ? 'show' : ''}`}>
                          <div className="description-arrow"></div>
                          <div className="description-content">
                            <div className="description-header">
                              <h3 className="description-title">
                                Stage {stage.id}: {stage.name}
                              </h3>
                            </div>
                            <div className="description-body">
                              <div className="description-text">
                                <p>{stage.description}</p>
                              </div>
                              <div className="description-outputs">
                                <h4 className="outputs-title">Output:</h4>
                                <ul className="outputs-list">
                                  {stage.outputs.map((output, index) => (
                                    <li key={index} className="output-item">
                                      <span className="output-bullet">✓</span>
                                      {output}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - 2 circles centered */}
              <div className={`stages-row second-row ${activeStage && activeStage <= 3 ? 'shift-down' : ''}`}>
                {stages.slice(3, 5).map((stage, index) => (
                  <div key={stage.id} className="stage-wrapper">
                    <div className="stage-content">
                      <button
                        className={`stage-circle ${activeStage === stage.id ? 'active' : ''}`}
                        onClick={() => handleStageClick(stage.id)}
                        onMouseEnter={() => handleStageHover(stage.id)}
                        onMouseLeave={handleStageLeave}
                      >
                        <img src={stage.image} alt={stage.name} className="stage-image" />
                      </button>
                      <div className="stage-name">{stage.id}. {stage.name}</div>

                      {/* Description Box - Positioned below each circle */}
                      {shouldShowDescription(stage.id) && (
                        <div key={`description-${stage.id}`} className={`lifecycle-description ${shouldShowDescription(stage.id) ? 'show' : ''}`}>
                          <div className="description-arrow"></div>
                          <div className="description-content">
                            <div className="description-header">
                              <h3 className="description-title">
                                Stage {stage.id}: {stage.name}
                              </h3>
                            </div>
                            <div className="description-body">
                              <div className="description-text">
                                <p>{stage.description}</p>
                              </div>
                              <div className="description-outputs">
                                <h4 className="outputs-title">Output:</h4>
                                <ul className="outputs-list">
                                  {stage.outputs.map((output, index) => (
                                    <li key={index} className="output-item">
                                      <span className="output-bullet">✓</span>
                                      {output}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        </div>

        {/* CTA Button - Dynamic positioning */}
        <div key="lifecycle-cta" className={`lifecycle-cta ${activeStage ? 'cta-shifted' : ''}`}>
          <button onClick={onContactClick} className="lifecycle-button">
            <span>Got a challenge or idea? Let's talk →</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Lifecycle
