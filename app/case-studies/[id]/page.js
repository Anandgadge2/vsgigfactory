'use client'

import { useMemo, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { getContent } from '@/lib/content-store'

export default function CaseStudyDetail({ params }) {
  const router = useRouter()
  const resolvedParams = use(params)
  const [caseStudies] = useState(() => getContent().caseStudies)

  const caseStudy = useMemo(
    () => caseStudies.find((item) => item.id === resolvedParams.id) ?? null,
    [caseStudies, resolvedParams.id],
  )

  if (!caseStudy) {
    return (
      <main style={{ padding: '24px' }}>
        <p>Case study not found.</p>
        <button onClick={() => router.push('/case-studies')}>Back</button>
      </main>
    )
  }

  return (
    <main className="detail-page">
      <button onClick={() => router.push('/case-studies')} className="back">← Back</button>
      <h1>{caseStudy.title}</h1>
      <p>{caseStudy.description}</p>
      <img src={caseStudy.image} alt={caseStudy.title} />
      <video src={caseStudy.video} controls />
      <a href={caseStudy.pdf} target="_blank" rel="noopener noreferrer">Open Case Study PDF</a>

      <style jsx>{`
        .detail-page { max-width: 960px; margin: 0 auto; padding: 20px; display: grid; gap: 12px; }
        img, video { width: 100%; border-radius: 12px; }
        .back { width: fit-content; }
      `}</style>
    </main>
  )
}
