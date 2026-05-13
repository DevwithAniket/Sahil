import type { Variants } from 'framer-motion'

export const staggerContainer: Variants = {
  animate: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.11,
    },
  },
}
