import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import { staggerContainer } from '@/animations/staggerContainer'
import GlassPanel from '@/components/ui/GlassPanel'
import SectionHeading from '@/components/ui/SectionHeading'

const stats = [
  ['15K+', 'project supplies'],
  ['250+', 'finish options'],
  ['24 hr', 'dispatch support'],
]

function AboutSection() {
  return (
    <section id="about" className="relative bg-cream-100 px-5 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div className="relative" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85" alt="Elegant wooden room" className="h-[560px] w-full rounded-[8px] object-cover shadow-2xl shadow-walnut-900/20" />
          <GlassPanel className="absolute -bottom-7 left-5 right-5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-700">Material consultation</p>
            <p className="mt-2 text-lg font-semibold text-walnut-800">From sheet selection to finish pairing, we help every surface feel intentional.</p>
          </GlassPanel>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="About Bose Plywood"
              title="A warmer, sharper way to choose interior materials"
              copy="Bose Plywood brings together dependable plywood, expressive veneers, rich laminates, wall panels, and hardware under one roof. Our range is built for daily site realities: precision cuts, moisture exposure, heavy use, and finishes that need to look good for years."
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map(([number, label]) => (
              <GlassPanel key={label} className="p-5">
                <p className="font-display text-4xl font-semibold text-walnut-800">{number}</p>
                <p className="mt-1 text-sm font-medium text-walnut-600">{label}</p>
              </GlassPanel>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
