import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-forest-400 via-cream-300 to-walnut-400 shadow-[0_0_22px_rgba(109,160,47,0.55)]"
      style={{ scaleX, width: '100%' }}
    />
  )
}

export default ScrollProgress
