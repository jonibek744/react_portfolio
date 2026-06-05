import Typewriter from './Typewriter'

const sc = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            IT &amp; Robototexnika O'quvchisi
          </div>

          <h1>
            Jonibek
            <span className="line2">Jo'rayev</span>
          </h1>

          <Typewriter />

          <div className="hero-quote">
            IT va robototexnika sohasiga qiziqadigan yosh dasturchi va robototexnika ishqibozi.
            Zamonaviy web-saytlar, aqlli qurilmalar va robotlar yaratish bilan shug'ullanaman.
          </div>

          <div className="hero-btns">
            <button className="btn-p" onClick={() => sc('about')}>
              <i className="ti ti-user" style={{ fontSize: 15 }} /> Men haqimda
            </button>
            <button className="btn-o" onClick={() => sc('projects')}>
              <i className="ti ti-rocket" style={{ fontSize: 15 }} /> Loyihalarim
            </button>
            <button className="btn-o" onClick={() => sc('contact')}>
              <i className="ti ti-mail" style={{ fontSize: 15 }} /> Bog'lanish
            </button>
          </div>

          <div className="hero-stats">
            {[['5+', 'Loyihalar'], ['2+', 'Yillik tajriba'], ['5+', "Ko'nikmalar"]].map(([n, l]) => (
              <div className="stat" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — orbit (Active olib tashlandi) ── */}
        <div className="hero-right">
          <div className="ring1" />
          <div className="ring2" />
          <div className="avatar">JJ</div>

          {/* Top-left */}
          <div className="fb fb1">
            <span className="dot" style={{ background:'var(--ac)', boxShadow:'0 0 6px var(--ac)' }} />
            🤖 Robototexnik
          </div>
          {/* Top-right — bo'sh joy (Active olib tashlandi) */}

          {/* Bottom-left */}
          <div className="fb fb3">
            <span className="dot" style={{ background:'var(--ac2)', boxShadow:'0 0 6px var(--ac2)' }} />
            ⚡ Arduino
          </div>
          {/* Bottom-right */}
          <div className="fb fb4">
            <span className="dot" style={{ background:'#60a5fa', boxShadow:'0 0 6px #60a5fa' }} />
            &lt;/&gt; Dev
          </div>
        </div>
      </div>
    </section>
  )
}
