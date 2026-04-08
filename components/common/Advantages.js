'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './advantages-styles.css'

const Advantages = ({ onContactClick }) => {
  const router = useRouter()
  const [selectedAdvantageId, setSelectedAdvantageId] = useState(null)
  const modalContentRef = useRef(null)

  const advantagesData = [
    {
      id: 'construction-smart',
      key: 'Construction Smart',
      title: 'Construct Smart',
      subtitle: 'End-to-End Construction Intelligence',
      description: "We don't just deliver drawings — we deliver integrated project intelligence. From 3D BIM (LOD 100–500) to 4D planning, 6D asset management, and AI-powered automation, Gigfactory provides a unified ecosystem that connects:",
      points: [
        'Architecture',
        'Structure',
        'MEPF',
        'Planning',
        'BOQ & Quantity Take-Off',
        'Documentation',
        'Operations & Maintenance'
      ],
      footer: 'This ensures seamless coordination from concept to facility lifecycle.',
      images: ['/assets/A_architecture.png', '/assets/A_structure.png', '/assets/A_MEPF.png', '/assets/A_planning.png', '/assets/A_BOQ.png', '/assets/A_operations and maintenance.png']
    },
    {
      id: 'intelligence',
      key: 'Intelligence',
      title: 'Intelligence',
      subtitle: 'Data-Driven Insights',
      description: 'Our AI-powered intelligence system provides deep insights into construction processes, enabling data-driven decision making and predictive analytics for optimal project outcomes.',
      points: [
        'Real-time data analysis and reporting',
        'Predictive modeling for risk assessment',
        'Automated workflow optimization',
        'Machine learning for continuous improvement',
        'Advanced analytics dashboard'
      ],
      footer: 'Empowering your projects with intelligent foresight.',
    },
    {
      id: 'reduce-rework',
      key: 'Reduce Rework',
      title: 'Reduce Rework',
      subtitle: 'Proactive Error Prevention',
      description: 'Advanced quality control and error prevention systems that significantly reduce rework through proactive detection and correction of issues.',
      points: [
        'Automated clash detection',
        'Real-time quality monitoring',
        'Digital inspection workflows',
        'Error prediction algorithms',
        'Continuous quality assurance'
      ],
      footer: 'Minimizing errors, maximizing efficiency.',
    },
    {
      id: 'accelerate-delivery',
      key: 'Accelerate Delivery',
      title: 'Accelerate Delivery',
      subtitle: 'Streamlined Project Methodology',
      description: 'Streamlined project delivery methodologies that leverage technology and optimized workflows to significantly reduce construction timelines.',
      points: [
        'Parallel processing capabilities',
        'Automated scheduling optimization',
        'Resource leveling algorithms',
        'Progress tracking automation',
        'Integrated delivery management'
      ],
      footer: 'Fast-tracking your vision to completion.',
    },
    {
      id: 'optimize-cost',
      key: 'Optimize Cost',
      title: 'Optimize Cost',
      subtitle: 'Value Engineering & Efficiency',
      description: 'Comprehensive cost optimization strategies that leverage technology and data analytics to minimize expenses while maintaining quality.',
      points: [
        'Dynamic cost tracking and monitoring',
        'Automated budget alerts and controls',
        'Resource utilization optimization',
        'Supply chain cost analysis',
        'Value engineering recommendations'
      ],
      footer: 'Smart spending for superior results.',
    }
  ]

  const handleHighlightClick = (key) => {
    const advantage = advantagesData.find(a => a.key === key)
    if (advantage) {
      setSelectedAdvantageId(advantage.id)
    }
  }

  const closeModal = () => {
    setSelectedAdvantageId(null)
  }

  useEffect(() => {
    if (selectedAdvantageId) {
      const element = document.getElementById(`modal-section-${selectedAdvantageId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedAdvantageId])

  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-header">
          <h2 className="advantages-title">Advantages of working with Gigfactory</h2>
          <p className="advantages-subtitle">
            We don't just support projects - we improve performance across time, cost, coordination and lifecycle value.
          </p>
        </div>

        {/* All Words Cloud - Positioned Layout */}
        <div className="word-cloud-container">
          <span className="word-improved-accuracy">Improved accuracy</span>
          <span className="word-enhanced-coordination">Enhanced coordination</span>
          <span className="word-clarity-documentation">Clarity in documentation</span>
          <span className="word-standardized-outputs">Standardized outputs</span>
          <span className="word-reduced-errors">Reduced errors</span>
          <span className="word-faster-reviews">Faster reviews</span>
          <span className="word-construction-smart highlight" onClick={() => handleHighlightClick('Construction Smart')}>
            Construction Smart
          </span>
          <span className="word-better-quality">Better quality control</span>
          <span className="word-streamlined-workflows">Streamlined workflows</span>
          <span className="word-clear-communication">Clear communication</span>
          <span className="word-improved-collaboration">Improved collaboration</span>
          <span className="word-error-reduction">Error reduction</span>
          <span className="word-better-decision">Better decision making</span>
          <span className="word-enhanced-understanding">Enhanced understanding</span>
          <span className="word-intelligence highlight" onClick={() => handleHighlightClick('Intelligence')}>
            Intelligence
          </span>
          <span className="word-sequence-planning">Sequence planning</span>
          <span className="word-clash-free">Clash-Free Execution</span>
          <span className="word-integrated-coordination">Integrated Coordination</span>
          <span className="word-smart-collaboration">Smart Collaboration</span>
          <span className="word-realtime-monitoring">Real-time monitoring</span>
          <span className="word-structured-workflows">Structured workflows</span>
          <span className="word-reduce-rework highlight" onClick={() => handleHighlightClick('Reduce Rework')}>
            Reduce Rework
          </span>
          <span className="word-clear-construction">Clear construction intent</span>
          <span className="word-reduced-conflicts">Reduced design conflicts</span>
          <span className="word-interdisciplinary-coordination">Better interdisciplinary coordination</span>
          <span className="word-reduced-bottlenecks">Reduced bottlenecks</span>
          <span className="word-improved-compliance">Improved compliance</span>
          <span className="word-risk-mitigation">Risk mitigation strategies</span>
          <span className="word-accelerate-delivery highlight" onClick={() => handleHighlightClick('Accelerate Delivery')}>
            Accelerate Delivery
          </span>
          <span className="word-data-driven">Data-driven operations</span>
          <span className="word-cost-savings">Long-term cost savings</span>
          <span className="word-asset-tracking">Asset performance tracking</span>
          <span className="word-lifecycle-optimization">Lifecycle optimization</span>
          <span className="word-digital-continuity">Digital continuity</span>
          <span className="word-strategic-planning">Strategic planning</span>
          <span className="word-timeline-optimization">Timeline optimization</span>
          <span className="word-quality-assurance">Quality assurance</span>
          <span className="word-cost-overruns">Reduced cost overruns</span>
          <span className="word-quantity-validation">Quantity validation</span>
          <span className="word-procurement-optimization">Procurement optimization</span>
          <span className="word-waste-reduction">Waste reduction</span>
          <span className="word-cost-forecasting">Cost forecasting</span>
          <span className="word-optimize-cost highlight" onClick={() => handleHighlightClick('Optimize Cost')}>
            Optimize Cost
          </span>
        </div>

        {/* CTA Button */}
        <div className="advantages-cta">
          <button onClick={onContactClick} className="advantages-button">
            <span>Looking for smart construction solutions? Let's talk →</span>
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedAdvantageId && (
        <div className="advantage-modal-overlay" onClick={closeModal}>
          <div className="advantage-modal-content" onClick={(e) => e.stopPropagation()} ref={modalContentRef}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-scroll-container">
              {advantagesData.map((advantage) => (
                <div key={advantage.id} id={`modal-section-${advantage.id}`} className="modal-section">
                  <div className="modal-header">
                    <h2 className="modal-title">{advantage.title}</h2>
                    <div className="modal-accent"></div>
                  </div>
                  <div className="modal-body">
                    <h3 className="modal-subtitle">{advantage.subtitle}</h3>
                    <p className="modal-description">{advantage.description}</p>
                    <ul className="modal-points">
                      {advantage.points.map((point, index) => (
                        <li key={index} className="modal-point">
                          <span className="bullet">•</span>
                          <span className="point-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="modal-footer-text">{advantage.footer}</p>
                    
                    {advantage.images && (
                    <div className="modal-images">
                      {advantage.images.map((img, index) => (
                        <div key={index} className="modal-image-wrapper">
                          <img src={img} alt={`Visual representation ${index + 1}`} className="modal-image" />
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                  <div className="modal-section-divider"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Advantages