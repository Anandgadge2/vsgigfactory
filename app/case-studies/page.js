'use client'

import { useState } from 'react'
import { getContent } from '@/lib/content-store'

export default function CaseStudiesPage() {
  const [caseStudies] = useState(() => getContent().caseStudies)

  return (
    <main className="case-page">
      <section className="heading">
        <h1>Case Studies</h1>
        <p>Explore highlights and open the full PDF for detailed deliverables.</p>
      </section>

      <section className="cards">
        {caseStudies.map((study) => (
          <article className="card" key={study.id}>
            <img src={study.image} alt={study.title} />
            <div className="content">
              <span className="chip">{study.category}</span>
              <h2>{study.title}</h2>
              <p>{study.description}</p>
              <div className="meta">
                <span>Client: {study.client}</span>
                <span>Duration: {study.duration}</span>
              </div>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer" className="btn">View Full Case Study PDF</a>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        .case-page { padding: 24px; }
        .heading { max-width: 760px; margin: 0 auto 22px; text-align: center; }
        .heading p { color: #475569; }
        .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; display: grid; }
        .card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
        .content { padding: 14px; display: grid; gap: 10px; }
        .chip { width: fit-content; padding: 4px 10px; border-radius: 999px; background: #ecfeff; color: #0f766e; font-size: 12px; font-weight: 700; }
        h2 { margin: 0; font-size: 1.1rem; }
        p { margin: 0; color: #475569; }
        .meta { display: grid; gap: 4px; font-size: 13px; color: #334155; }
        .btn { margin-top: 4px; text-decoration: none; background: #0f172a; color: #fff; text-align: center; padding: 10px; border-radius: 8px; font-weight: 700; }

        @media (max-width: 1024px) { .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 680px) { .cards { grid-template-columns: 1fr; } .case-page { padding: 16px; } }
      `}</style>
    </main>
  )
}
