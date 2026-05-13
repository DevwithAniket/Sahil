import type { Variants } from 'framer-motion'

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}
