import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import { staggerContainer } from '@/animations/staggerContainer'
import FeatureCard from '@/components/ui/FeatureCard'
import { featureCards } from '@/constants/features'

function WhyUsSection() {
  return (
    <section id="why-us" className="botanical-dark-section relative overflow-hidden bg-walnut-800 px-5 py-28 text-cream-50 lg:px-8">
      <motion.div
        className="dark-branch left-[-3rem] top-10 hidden md:block"
        animate={{ rotate: [-5, 2, -5], y: [0, -8, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="dark-branch bottom-8 right-[-4rem] hidden rotate-180 md:block"
        animate={{ rotate: [182, 174, 182], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf right-[18%] top-[16%] opacity-40"
        animate={{ y: [0, -18, 0], x: [0, 8, 0], rotate: [18, 32, 18] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-300">Why Choose Us</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Every sheet is chosen for beauty, balance, and build quality</h2>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-lg leading-8 text-cream-200">
            We combine traditional material knowledge with a showroom experience: curated samples, practical guidance, reliable stock, and finishes that help designers create memorable rooms.
          </motion.p>
        </motion.div>

        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUsSection
