import { useEffect } from 'react'

export default function useScrollFx() {
  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    root.classList.add('fx')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

    const parallax = [...document.querySelectorAll('[data-parallax]')]
    const timelines = [...document.querySelectorAll('[data-timeline]')]
    const update = () => {
      const vh = window.innerHeight
      const max = root.scrollHeight - vh
      root.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : 0)

      for (const el of parallax) {
        const r = el.getBoundingClientRect()
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh))
        el.style.setProperty('--p', p.toFixed(3))
      }

      for (const tl of timelines) {
        const r = tl.getBoundingClientRect()
        const fill = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height))
        tl.style.setProperty('--fill', fill.toFixed(3))
        const reach = r.top + fill * r.height
        tl.querySelectorAll('[data-tl-item], .tl-start').forEach((item) => {
          const dot = item.querySelector('.tl-node span').getBoundingClientRect()
          item.classList.toggle('reached', dot.top + dot.height / 2 <= reach)
        })
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      root.classList.remove('fx')
    }
  }, [])
}
