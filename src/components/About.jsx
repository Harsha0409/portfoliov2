export default function About() {
  return (
    <section id="about" className="section dark">
      <div className="about-grid">
        <h2 className="about-title" data-reveal>ABOUT ME</h2>
        <div className="about-copy">
          <p data-reveal>
            I’m Harsha, a <span className="hl">Software Engineer at Freshbus</span> in Hyderabad. I build and run
            the systems that keep daily operations on track — <span className="hl">operational dashboards</span>,
            scheduled <span className="hl">cron jobs</span> and a real-time <span className="hl">alerting system</span>.
          </p>
          <p data-reveal>
            My day-to-day stack spans <span className="hl">AWS</span>, <span className="hl">Node.js</span>,{' '}
            <span className="hl">SQL</span> and <span className="hl">PostgreSQL</span> on the backend, and{' '}
            <span className="hl">React</span> / <span className="hl">Next.js</span> on the frontend — shipped through{' '}
            <span className="hl">CI/CD pipelines</span> to hosted environments. I care about data that is correct, jobs
            that run on time and dashboards people actually trust.
          </p>
          <p data-reveal>
            Before Freshbus I spent a year freelancing, shipping responsive websites and web apps for clients end to end.
            That taught me to own a problem fully — from requirements to production — and to communicate clearly along the way.
          </p>
          <p className="about-aside" data-reveal>
            Outside work I train at the gym — the same discipline and consistency I bring to keeping production reliable.
          </p>
        </div>
      </div>
    </section>
  )
}
