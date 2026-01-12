'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [isHover, setIsHover] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const x = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const y = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target as Element | null

      const isInteractive = Boolean(
        target?.closest(
          `
        .cursor-pointer,
        [data-slot="stretched-link"],
        a,
        button,
        [role="button"],
        [data-cursor]
        `
        )
      )

      setIsHover(isInteractive)
    }

    document.addEventListener('mousemove', move)

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <motion.div
      className='pointer-events-none fixed top-0 left-0 z-9999 -translate-1/2 rounded-full border border-black bg-white'
      style={{ x, y }}
      animate={{
        width: isHover ? 80 : 20,
        height: isHover ? 80 : 20,
        mixBlendMode: isHover ? '' : 'difference',
        background: isHover ? 'transparent' : 'white',
        border: isHover ? '1px solid black' : '',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  )
}
