const INFO = [
  ['Ism',           "Jonibek Jo'rayev"],
  ['Tug\'ilgan yil','2012'],
  ['Maktab',        '209-sonli maktab, Toshkent'],
  ['Sinf',          '9-sinf'],
  ['Yo\'nalish',    'IT va Robototexnika'],
  ['O\'quv markazi','Robbit Robototexnika Markazi'],
  ['Manzil',        'Toshkent, O\'zbekiston'],
]

const INTERESTS = [
  { icon: 'ti-robot',         color: 'var(--ac)',   label: 'Robototexnika' },
  { icon: 'ti-world',         color: '#60a5fa',     label: 'Web Dev'       },
]

const EDU = [
  { year: '2026 — Hozir', name: '209-sonli maktab',        desc: "9-sinf o'quvchisi"           },
  { year: '2026',          name: 'Arduino dasturlash',       desc: 'Asosiy kurs — sertifikat'    },
  { year: '2024 — 2025',   name: 'Web dasturlash asoslari', desc: 'HTML, CSS, Bootstrap, JavaScript' },
]

export default function About() {
  return (
    <div id="about" className="about-wrap">

      {/* Heading */}
      <div className="about-heading">
        <h2>
          <span className="white">Kim </span>
          <span className="teal">men</span>
          <span className="q">?</span>
        </h2>
      </div>
      <p className="about-tagline">IT va robototexnika sohasiga oshiq, 9-sinf o'quvchisi.</p>

      {/* Two columns */}
      <div className="about-cols">

        {/* LEFT — info cards */}
        <div className="info-cards">
          {INFO.map(([lbl, val]) => (
            <div className="info-card" key={lbl}>
              <div className="lbl">{lbl}</div>
              <div className="val">{val}</div>
            </div>
          ))}
        </div>

        {/* RIGHT — bio + interests */}
        <div className="about-right">
          <p className="bio-text">
            Men IT va robototexnika sohasiga chuqur qiziquvchi o'quvchiman. Dasturlash, elektronika va aqlli qurilmalar yaratish mening asosiy ish yo'nalishlarim hisoblanadi.
          </p>
          <p className="bio-text">
            Arduino va ESP32 platalarida turli loyihalar yarataman: aqlli uy tizimlari, olov va gaz detektori, masofadan boshqariladigan robotlar va boshqa foydali qurilmalar. JavaScript, HTML va CSS yordamida veb-ilovalar ham ishlab chiqaman.
          </p>
          <p className="bio-text">
            Robototexnika musobaqalarida faol ishtirok etaman va yangi texnologiyalarni o'rganishni davom ettiraman. Kelajakda muhandis va robototexnika mutaxassisi bo'lishni rejalashtiraman.
          </p>
          <div className="interests-row">
            {INTERESTS.map(({ icon, color, label }) => (
              <span className="int-tag" key={label}>
                <i className={`ti ${icon}`} style={{ fontSize: 15, color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="edu-section" id="talim">
        <div className="sec-tag">Ta'lim</div>
        <h3 className="syne" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, letterSpacing: -1, margin: '.5rem 0 1.5rem' }}>
          Ta'lim <span className="grad-text">Tarixi</span>
        </h3>
        <div className="edu-tl">
          {EDU.map((e, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-dot" />
              <div className="edu-card">
                <div className="edu-yr">{e.year}</div>
                <div className="edu-nm">{e.name}</div>
                <div className="edu-ds">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
