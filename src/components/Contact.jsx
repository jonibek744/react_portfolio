import { useState, useRef } from 'react'

const LINKS = [
  { icon:'ti-brand-telegram', lbl:'Telegram Account', val:'@jonibek_0429',          href:'https://t.me/jonibek_0429'           },
  { icon:'ti-broadcast',      lbl:'Telegram Channel', val:'@tech_robot_uz',          href:'https://t.me/tech_robot_uz'          },
  { icon:'ti-brand-github',   lbl:'GitHub',           val:'github.com/jonibek744',   href:'https://github.com/jonibek744'       },
  { icon:'ti-mail',           lbl:'Email',            val:'jonibekjorayev797@gmail.com', href:'mailto:jonibekjorayev797@gmail.com' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const nameRef  = useRef()
  const emailRef = useRef()
  const msgRef   = useRef()

  const validate = () => {
    const errs = {}
    if (!nameRef.current.value.trim())  errs.name  = "Ismingizni kiriting"
    if (!emailRef.current.value.trim()) errs.email = "Emailingizni kiriting"
    else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) errs.email = "Email noto'g'ri formatda"
    if (!msgRef.current.value.trim())   errs.msg   = "Xabaringizni kiriting"
    return errs
  }

  const handle = () => {
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSent(true)
    nameRef.current.value  = ''
    emailRef.current.value = ''
    msgRef.current.value   = ''
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="sec-header">
        <div className="sec-tag">Aloqa</div>
        <h2 className="sec-title">Bog'la<span>nish</span></h2>
        <p className="sec-sub">Menga istalgan vaqtda yozishingiz mumkin</p>
      </div>

      <div className="contact-grid">
        {/* Links */}
        <div>
          {LINKS.map(l => (
            <a key={l.val} className="c-link" href={l.href} target="_blank" rel="noreferrer">
              <i className={`ti ${l.icon} c-icon`} />
              <div>
                <div className="c-lbl">{l.lbl}</div>
                <div className="c-val">{l.val}</div>
              </div>
              <i className="ti ti-arrow-right" style={{ marginLeft:'auto', color:'var(--tx3)', fontSize:14 }} />
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="card form-card">
          <div className="form-ttl">Xabar yuborish</div>

          <div className="form-grp">
            <label>ISM</label>
            <input ref={nameRef} type="text" placeholder="Ismingizni kiriting"
              style={{ borderColor: errors.name ? '#f87171' : '' }}
              onChange={() => setErrors(e => ({ ...e, name: '' }))} />
            {errors.name && <div className="form-err">{errors.name}</div>}
          </div>

          <div className="form-grp">
            <label>EMAIL</label>
            <input ref={emailRef} type="email" placeholder="email@example.com"
              style={{ borderColor: errors.email ? '#f87171' : '' }}
              onChange={() => setErrors(e => ({ ...e, email: '' }))} />
            {errors.email && <div className="form-err">{errors.email}</div>}
          </div>

          <div className="form-grp">
            <label>XABAR</label>
            <textarea ref={msgRef} placeholder="Xabaringizni yozing..."
              style={{ borderColor: errors.msg ? '#f87171' : '' }}
              onChange={() => setErrors(e => ({ ...e, msg: '' }))} />
            {errors.msg && <div className="form-err">{errors.msg}</div>}
          </div>

          <button className="form-sub" onClick={handle}>
            {sent
              ? '✓ Yuborildi!'
              : <><span>Yuborish</span> <i className="ti ti-send" style={{ fontSize:14 }} /></>
            }
          </button>
        </div>
      </div>
    </section>
  )
}
