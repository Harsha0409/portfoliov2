import { skillGroups } from '../data.js'
import Glyph from './Glyph.jsx'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead first="CORE" second="SKILLS" />
      <p className="section-lead" data-reveal>
        Production experience across cloud, data, hosting and frontend — from the database query and the CI/CD
        pipeline to the dashboard on screen.
      </p>
      <div className="skill-groups">
        {skillGroups.map((g, gi) => (
          <div className={`skill-group ${g.dark ? 'dark' : ''}`} key={g.title} data-reveal style={{ '--d': `${gi * 90}ms` }}>
            <h3>{g.title}</h3>
            <ul className="skill-grid">
              {g.skills.map((s, si) => (
                <li className="skill-card" key={s.name} data-reveal="pop" style={{ '--d': `${gi * 90 + si * 60}ms` }}>
                  <span className="skill-icon">
                    {s.glyph ? <Glyph name={s.glyph} /> : <img src={s.src} alt="" width="28" height="28" loading="lazy" />}
                  </span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
