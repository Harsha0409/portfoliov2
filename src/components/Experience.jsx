import { experience } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section dark">
      <SectionHead first="WORK" second="EXPERIENCE" />
      <div className="timeline" data-timeline>
        <div className="tl-line" aria-hidden="true">
          <div className="tl-fill" />
        </div>
        {experience.map((job) => (
          <div className={`tl-item ${job.current ? 'current' : ''}`} key={job.role} data-tl-item>
            <div className="tl-date" data-reveal="left">{job.period}</div>
            <div className="tl-node" aria-hidden="true"><span /></div>
            <article className="tl-card" data-reveal="right">
              <h3>{job.role}</h3>
              <p className="tl-company">
                {job.company}
                {job.current && <span className="now">Current</span>}
              </p>
              <ul>
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <ul className="tags" aria-label="Technologies">
                {job.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          </div>
        ))}
        <div className="tl-item tl-start" aria-hidden="true">
          <div className="tl-date" />
          <div className="tl-node"><span /></div>
          <div className="tl-start-label" data-reveal>Where it started · 2024</div>
        </div>
      </div>
    </section>
  )
}
