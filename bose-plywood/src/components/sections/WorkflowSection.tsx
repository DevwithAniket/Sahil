import { Layers3 } from 'lucide-react'
import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import { staggerContainer } from '@/animations/staggerContainer'
import GlassPanel from '@/components/ui/GlassPanel'
import SectionHeading from '@/components/ui/SectionHeading'
import { workflowSteps } from '@/constants/workflow'

function WorkflowSection() {
  return (
    <section className="bg-cream-50 px-5 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <SectionHeading eyebrow="How We Work" title="From concept board to finished installation" />
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-10 space-y-4">
            {workflowSteps.map((step) => (
              <GlassPanel key={step.title} className="flex gap-5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-forest-100 text-forest-700">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-walnut-800">{step.title}</h3>
                  <p className="mt-1 leading-7 text-walnut-600">{step.desc}</p>
                </div>
              </GlassPanel>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85" alt="Interior finish selection" className="h-72 w-full rounded-[8px] object-cover" />
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85" alt="Modern cabinet design" className="mt-12 h-72 w-full rounded-[8px] object-cover" />
          <div className="rounded-[8px] bg-forest-700 p-7 text-cream-50">
            <Layers3 className="mb-5 h-9 w-9" />
            <p className="font-display text-3xl font-semibold">Layered interiors start with layered materials.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85" alt="Warm living room" className="h-72 w-full rounded-[8px] object-cover" />
        </motion.div>
      </div>
    </section>
  )
}

export default WorkflowSection
