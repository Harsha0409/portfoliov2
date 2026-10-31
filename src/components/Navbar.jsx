import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <a href="#intro" className="brand" onClick={close}>
        <img src="/assets/avatar.webp" alt="" width="44" height="44" />
        <span>Harsha Vardhan</span>
      </a>

      <nav id="site-menu" className="nav-links" aria-label="Main">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </nav>

      <div className="nav-actions">
        <span className="status"><span className="active-btn" />Ready to work</span>
        <a className="btn btn-accent" href="#contact" onClick={close}>Hire Me</a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
