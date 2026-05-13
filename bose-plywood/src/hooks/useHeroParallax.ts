import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return { heroRef, heroY }
}
