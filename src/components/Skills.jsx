import { useEffect, useRef, useState } from 'react'

const PROG = [
  { name: 'HTML5',       pct: 91 },
  { name: 'CSS3',        pct: 80 },
  { name: 'JavaScript',  pct: 70 },
  { name: 'ESP32',       pct: 88 },
]
const TECH = [
  { name: 'Robototexnika',       pct: 85 },
  { name: 'Elektronika',         pct: 80 },
  { name: '3D Modellashtirish',  pct: 50 },
  { name: 'IoT / Smart Systems', pct: 76 },
]

function Bar({ name, pct, robo }) {
  const ref = useRef()
  const [w, setW] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW(pct), 100) }, { threshold: .4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])
  return (
    <div className="sk-item" ref={ref}>
      <div className="sk-hd">
        <span>{name}</span>
        <span className="sk-pct">{pct}%</span>
      </div>
      <div className="sk-bar">
        <div className="sk-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sec-header">
        <div className="sec-tag">Bilim</div>
        <h2 className="sec-title">Ko'nikma<span>larim</span></h2>
        <p className="sec-sub">Dasturlash va texnik ko'nikmalar darajasi</p>
      </div>
      <div className="skills-grid">
        <div className="card sk-grp">
          <div className="sk-ttl">Dasturlash tillari</div>
          {PROG.map(s => <Bar key={s.name} {...s} />)}
        </div>
        <div className="card sk-grp robo">
          <div className="sk-ttl">Texnik ko'nikmalar</div>
          {TECH.map(s => <Bar key={s.name} {...s} robo />)}
        </div>
      </div>
    </section>
  )
}
