import { motion } from 'framer-motion'

export default function StaggerTitle({
  str,
  hasDot = false,
  delay = 0,
}: {
  str: string
  hasDot?: boolean
  delay?: number
}) {
  const arr = str.split('')

  return (
    <div className='flex items-center overflow-hidden gap-2.5'>
      <div className='relative'>
        {arr.map((c, k) => (
          <motion.div
            key={k}
            animate={{ y: ['0%', '-100%'] }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              delay: delay + 0.05 * k,
            }}
            className='inline-block relative'
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: delay + 0.05 * k + 2,
              }}
            >
              {c}
            </motion.span>
            <span className='absolute top-0 left-0 translate-y-full'>{c}</span>
          </motion.div>
        ))}
      </div>
      {hasDot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            delay: delay,
          }}
          className='size-9.5 bg-a-white rounded-full'
        />
      )}
    </div>
  )
}
