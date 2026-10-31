import { projects } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead first="SELECTED" second="PROJECTS" />
      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card ${p.featured ? 'featured' : ''}`}
            key={p.title}
            data-reveal="rise"
            style={{ '--d': `${p.featured ? 0 : (i - 1) * 120}ms` }}
          >
            <div className="project-img">
              <img src={p.image} alt={`${p.title} — ${p.subtitle}`} width={p.width} height={p.height} loading="lazy" decoding="async" />
            </div>
            <div className="project-info">
              <p className="project-sub">{p.subtitle}</p>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="tags" aria-label="Technologies">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="project-note" data-reveal>
        Client projects are kept private at the customer’s request — happy to walk through the work on a call.
      </p>
    </section>
  )
}
