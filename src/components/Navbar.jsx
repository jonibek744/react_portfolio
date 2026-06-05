import { useState } from 'react'

const sc = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 68
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const LINKS = [
  { id: 'about',    label: "Haqimda"    },
  { id: 'talim',    label: "Ta'lim"     },
  { id: 'projects', label: "Loyihalar"  },
  { id: 'blog',     label: "Blog"       },
  { id: 'contact',  label: "Bog'lanish" },
]

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '.9rem 2.5rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', background: 'rgba(7,7,15,.9)',
      backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--cb)'
    }}>

      {/* Logo */}
      <div className="logo" onClick={() => sc('hero')} style={{ cursor: 'pointer' }}>
        Jo'rayev Jonibek
      </div>

      {/* Desktop links */}
      <div className="nav-desktop-links">
        {LINKS.map((l) => (
          <button
            key={l.id}
            className={`nav-btn${active === l.id ? ' active' : ''}`}
            onClick={() => sc(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Desktop CTA */}
      <button className="nav-cta nav-cta-desktop" onClick={() => sc('contact')}>
        Aloqa <i className="ti ti-arrow-right" style={{ fontSize: 14 }} />
      </button>

      {/* Hamburger — mobile only */}
      <button className="hamburger-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span style={{ display: 'block', width: 22, height: 2, background: 'var(--tx2)', borderRadius: 2, marginBottom: 5 }} />
        <span style={{ display: 'block', width: 22, height: 2, background: 'var(--tx2)', borderRadius: 2, marginBottom: 5 }} />
        <span style={{ display: 'block', width: 22, height: 2, background: 'var(--tx2)', borderRadius: 2 }} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(7,7,15,.98)', display: 'flex', flexDirection: 'column',
          padding: '1.5rem 2rem', gap: '1rem',
          borderBottom: '1px solid var(--cb)', zIndex: 200
        }}>
          {LINKS.map((l) => (
            <button key={l.id}
              style={{ background: 'none', border: 'none', color: active === l.id ? 'var(--ac)' : 'var(--tx2)', fontSize: '.95rem', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", textAlign: 'left', padding: '.3rem 0' }}
              onClick={() => { sc(l.id); setOpen(false) }}>
              {l.label}
            </button>
          ))}
          <button className="nav-cta" style={{ width: 'fit-content', marginTop: '.5rem' }}
            onClick={() => { sc('contact'); setOpen(false) }}>
            Aloqa <i className="ti ti-arrow-right" style={{ fontSize: 14 }} />
          </button>
        </div>
      )}
    </nav>
  )
}
