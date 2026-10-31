import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import useScrollFx from './useScrollFx.js'

export default function App() {
  useScrollFx()
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
