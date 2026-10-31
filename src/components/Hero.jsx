const stats = [
  { value: 'Since 2024', label: 'Building for the web' },
  { value: 'AWS · SQL', label: 'Cloud & data at Freshbus' },
  { value: 'Ops tooling', label: 'Dashboards, cron jobs & alerting' },
]

export default function Hero() {
  return (
    <section id="intro" className="hero">
      <p className="hero-hey hero-in" style={{ '--d': '0ms' }}>Hey, I’m</p>
      <h1 className="hero-name">
        <span className="hero-in" style={{ '--d': '100ms' }}>KURUVA</span>{' '}
        <span className="hero-in" style={{ '--d': '200ms' }}>HARSHA VARDHAN</span>
      </h1>
      <div className="hero-role">
        <div className="hero-role-line">
          <span className="ghost-word hero-in" style={{ '--d': '320ms' }}>SOFTWARE</span>
          <span className="based hero-in" style={{ '--d': '520ms' }}>BASED IN<br />HYDERABAD</span>
        </div>
        <span className="ghost-word indent hero-in" style={{ '--d': '420ms' }}>ENGINEER</span>
      </div>
      <div className="hero-bottom">
        <ul className="hero-stats">
          {stats.map((s, i) => (
            <li key={s.value} className="hero-in" style={{ '--d': `${620 + i * 90}ms` }}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="hero-cta hero-in" style={{ '--d': '900ms' }}>
          <a className="btn btn-dark" href="#projects">View projects</a>
          <a className="btn btn-outline" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
