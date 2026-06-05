import { useEffect, useState } from 'react'
import Orbs     from './components/Orbs'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Blog     from './components/Blog'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

// Nav linklar va ularning tegishli section id lari
// Haqimda → about section boshidan
// Ta'lim  → talim section boshidan (edu-section)
// Lekin active belgilash uchun "haqimda" faqat about..talim oralig'ida

export default function App() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 80

      const hero     = document.getElementById('hero')?.offsetTop     ?? 0
      const about    = document.getElementById('about')?.offsetTop    ?? 9999
      const talim    = document.getElementById('talim')?.offsetTop    ?? 9999
      const projects = document.getElementById('projects')?.offsetTop ?? 9999
      const blog     = document.getElementById('blog')?.offsetTop     ?? 9999
      const contact  = document.getElementById('contact')?.offsetTop  ?? 9999

      if      (y >= contact)  setActive('contact')
      else if (y >= blog)     setActive('blog')
      else if (y >= projects) setActive('projects')
      else if (y >= talim)    setActive('talim')
      else if (y >= about)    setActive('about')
      else                    setActive('hero')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Orbs />
      <Navbar active={active} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
