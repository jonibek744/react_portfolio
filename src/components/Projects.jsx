import { useState } from 'react'

const PROJECTS = [
  { cat:'it',   icon:'ti-code',        title:'Portfolio Website',       desc:"Shaxsiy portfolio sayt. Responsive dizayn, animatsiyalar va zamonaviy UI asosida yaratilgan.", tech:['HTML','CSS','JavaScript'] },
  { cat:'it',   icon:'ti-help-circle', title:'Quiz Website',             desc:"Interaktiv savol-javob veb-ilovasi. Foydalanuvchi natijasini real vaqtda ko'rishi mumkin.",   tech:['HTML','CSS','JavaScript'] },
  { cat:'robo', icon:'ti-robot',       title:'Obstacle Avoiding Robot',  desc:"To'siqlarni avtomatik aniqlab harakatlanuvchi robot. Ultratovush sensori orqali ishlaydi.",   tech:['Arduino','Ultrasonic','C++'] },
  { cat:'robo', icon:'ti-bluetooth',   title:'Arduino Bluetooth Car',    desc:"Smartfon orqali Bluetooth yordamida boshqariladigan Arduino robot mashina.",                   tech:['Arduino','Bluetooth','C++'] },
  { cat:'robo', icon:'ti-flame',       title:'Gas Detection Alarm',      desc:"Gaz sizib chiqishini aniqlovchi signalizatsiya tizimi. Arduino va gaz sensori asosida.",       tech:['Arduino','Gas Sensor','C++'] },
  { cat:'robo', icon:'ti-car',         title:'ESP32 Remote Control Car', desc:"Wi-Fi orqali boshqariladigan ESP32 asosidagi robot mashina.",                                  tech:['ESP32','Wi-Fi','C++'] },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = PROJECTS.filter(p => filter === 'all' || p.cat === filter)

  return (
    <section id="projects" className="section">
      <div className="sec-header">
        <div className="sec-tag">Ishlar</div>
        <h2 className="sec-title">Mening <span>Loyihalarim</span></h2>
        <p className="sec-sub">IT va robototexnika sohasidagi asosiy loyihalarim</p>
      </div>

      <div className="proj-filter">
        {[['all','Barchasi'],['it','💻 IT Loyihalar'],['robo','🤖 Robototexnika']].map(([v,l]) => (
          <button key={v} className={`fb-btn${filter===v?' active':''}`} onClick={() => setFilter(v)}>{l}</button>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map(p => (
          <div className="card proj-card" key={p.title}>
            <div className={`p-icon ${p.cat === 'it' ? 'it' : 'ro'}`}>
              <i className={`ti ${p.icon}`} />
            </div>
            <div className="p-title">{p.title}</div>
            <div className="p-desc">{p.desc}</div>
            <div className="p-techs">
              {p.tech.map(t => (
                <span key={t} className={`tech ${p.cat === 'it' ? 'it' : 'ro'}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
