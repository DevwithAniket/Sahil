import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import type { Testimonial } from '@/types/testimonial.types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article className="glass-panel p-7" variants={fadeInUp}>
      <div className="mb-6 flex gap-2 text-forest-600">
        {[1, 2, 3, 4, 5].map((star) => (
          <CheckCircle2 key={star} className="h-5 w-5" />
        ))}
      </div>
      <p className="leading-8 text-walnut-700">"{testimonial.quote}"</p>
      <div className="mt-7">
        <p className="font-semibold text-walnut-800">{testimonial.author}</p>
        <p className="text-sm text-walnut-500">{testimonial.role}</p>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
