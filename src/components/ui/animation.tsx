import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StaggerTitle({ str, delay = 0 }: { str: string; delay?: number }) {
  const [initialAnimate, setInitialAnimate] = useState<boolean>(false)
  const arr = str.split('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialAnimate(true)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div className='flex items-center overflow-hidden gap-2.5'>
      <div className='relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={str}
            exit={{ y: '-50%', opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            {arr.map((c, k) => (
              <motion.div
                key={k + str}
                animate={{ y: ['0%', '-100%'] }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                  delay: initialAnimate ? 0.05 * k : delay + 0.05 * k,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className='inline-block relative'
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                    delay: initialAnimate ? 0.05 * k + 2 : delay + 0.05 * k + 2,
                  }}
                >
                  {c}
                </motion.span>
                <span className='absolute top-0 left-0 translate-y-full'>{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
