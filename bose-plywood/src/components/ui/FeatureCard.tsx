import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import type { Feature } from '@/types/feature.types'

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      className="rounded-[8px] border border-cream-50/12 bg-cream-50/8 p-7 shadow-xl shadow-walnut-950/20 backdrop-blur-2xl"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[8px] bg-forest-500/20 text-forest-200">
        <feature.icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-2xl font-semibold">{feature.title}</h3>
      <p className="mt-3 leading-7 text-cream-200">{feature.desc}</p>
    </motion.div>
  )
}

export default FeatureCard
