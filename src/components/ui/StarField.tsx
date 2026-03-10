'use client'
import { useEffect, useRef } from 'react'

export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    let w = (c.width = c.offsetWidth)
    let h = (c.height = c.offsetHeight)
    const stars = Array.from({ length: 180 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.3,
      o: Math.random(),
      s: Math.random() * 0.02 + 0.005,
    }))
    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.o += s.s * (Math.random() > 0.5 ? 1 : -1)
        if (s.o < 0.2) s.o = 0.2
        if (s.o > 1) s.o = 1
        ctx.globalAlpha = s.o
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    const onResize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
    }
    window.addEventListener('resize', onResize)
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block' }} />
}
