export default function Contact() {
  return (
    <section id="contact" className="section dark">
      <p className="contact-kicker" data-reveal>CONTACT</p>
      <h2 className="contact-title" data-reveal style={{ '--d': '100ms' }}>Let’s build your next product.</h2>
      <a className="contact-email" href="mailto:harshadsk25@gmail.com" data-reveal style={{ '--d': '200ms' }}>
        harshadsk25@gmail.com
      </a>
      <div className="contact-links" data-reveal style={{ '--d': '250ms' }}>
        <a
          className="btn btn-linkedin"
          href="https://www.linkedin.com/in/harsha0409/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11z" />
          </svg>
          Connect on LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <dl className="contact-meta" data-reveal style={{ '--d': '300ms' }}>
        <div><dt>Location</dt><dd>Hyderabad, India</dd></div>
        <div><dt>Time zone</dt><dd>IST (UTC+5:30)</dd></div>
        <div><dt>Availability</dt><dd>Open to client projects</dd></div>
      </dl>
      <div className="align-line" data-parallax aria-hidden="true">
        <span>LET’S</span>
        <span>TALK</span>
      </div>
      <footer>© {new Date().getFullYear()} Kuruva Harsha Vardhan · Software Engineer · Hyderabad</footer>
    </section>
  )
}
