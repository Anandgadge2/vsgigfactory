'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "How does the GigScore system work for GigExperts on Gigfactory?",
    a: "The GigScore system helps gigowners choose the right GigExpert. It is based on Gigfactory’s vetting process and ratings from previous projects. It considers qualifications, portfolio, and feedback. Higher GigScore means more experienced and qualified experts."
  },
  {
    q: "How long does it take to complete a project on GigFactory?",
    a: "Project timelines vary based on scope and availability. It can range from one day to a year. Clear milestones and timelines help ensure timely completion. The platform also provides real-time tracking."
  },
  {
    q: "How do I make sure that my project stays within budget on Gigfactory?",
    a: "Clearly define scope, expectations, and outputs. Break the project into milestones for better tracking and cost control."
  },
  {
    q: "What happens if I'm not satisfied with the work delivered?",
    a: "You can communicate with the GigExpert to resolve issues. If unresolved, Gigfactory provides a dispute resolution process."
  },
  {
    q: "How can I ensure confidentiality of my project?",
    a: "Gigfactory enforces strict confidentiality policies, NDAs, and secure encrypted communication tools."
  },
  {
    q: "How can I track project progress?",
    a: "You can track milestones, communicate, share files, and request updates including video meetings."
  },
  {
    q: "Is there a limit to number of projects?",
    a: "No, you can post unlimited projects and work with multiple GigExperts."
  },
  {
    q: "Can I work with the same GigExpert on multiple projects?",
    a: "Yes, you can collaborate with the same expert across multiple projects and even mark them as preferred."
  },
  {
    q: "How do I ensure project quality and timely completion?",
    a: "Gigfactory vets experts, provides communication tools, and uses escrow payments to ensure quality and timely delivery."
  },
  {
    q: "How long does it take to find a suitable GigExpert?",
    a: "It depends on project scope, but GigScore helps you quickly find the best match."
  },
  {
    q: "Can I work with multiple GigExperts?",
    a: "Yes, you can assign different experts to different tasks or project stages."
  },
  {
    q: "Can I cancel a project?",
    a: "Yes, but completed milestone payments will be released to the expert. Always communicate before cancellation."
  }
]

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      <div className="faq-wrapper">

        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about Gigfactory</p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}