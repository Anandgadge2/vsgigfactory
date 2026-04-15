'use client'

import { useState } from 'react'
import { getContent } from '@/lib/content-store'

export default function ProjectsPage() {
  const [projects] = useState(() => getContent().projects)

  return (
    <main className="projects-page">
      <section className="heading">
        <h1>Projects</h1>
        <p>Industry-standard responsive project showcase backed by Cloudinary assets.</p>
      </section>

      <section className="grid">
        {projects.map((project) => (
          <article className="card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="meta">
                <span>{project.type}</span>
                <span>{project.status}</span>
                <span>{project.area}</span>
                <span>{project.location}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        .projects-page { padding: 24px; }
        .heading { max-width: 760px; margin: 0 auto 22px; text-align: center; }
        .heading p { color: #475569; }
        .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .card { border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; background: #fff; }
        .card img { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
        .content { padding: 14px; display: grid; gap: 8px; }
        h2 { margin: 0; font-size: 1.1rem; }
        p { margin: 0; color: #475569; }
        .meta { display: flex; flex-wrap: wrap; gap: 6px; }
        .meta span { font-size: 12px; border: 1px solid #cbd5e1; border-radius: 999px; padding: 4px 8px; }

        @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 680px) { .grid { grid-template-columns: 1fr; } .projects-page { padding: 16px; } }
      `}</style>
    </main>
  )
}
