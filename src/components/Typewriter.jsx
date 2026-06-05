import { useState, useEffect } from 'react'

const WORDS = ['Web Developer', 'Robototexnik']

export default function Typewriter() {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = WORDS[wi]
    const delay = del ? 55 : 95
    const t = setTimeout(() => {
      if (!del) {
        const nc = ci + 1; setText(word.slice(0, nc)); setCi(nc)
        if (nc === word.length) setTimeout(() => setDel(true), 1300)
      } else {
        const nc = ci - 1; setText(word.slice(0, nc)); setCi(nc)
        if (nc === 0) { setDel(false); setWi(p => (p + 1) % WORDS.length) }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [ci, del, wi]) // eslint-disable-line

  return (
    <div className="typewriter">
      <span>{text}</span>
      <span className="cursor" />
    </div>
  )
}
