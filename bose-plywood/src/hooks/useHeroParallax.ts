import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -96])

  return { heroRef, heroY }
}
