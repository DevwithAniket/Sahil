import { motion } from 'framer-motion'

import { staggerContainer } from '@/animations/staggerContainer'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/constants/testimonials'

function TestimonialsSection() {
  return (
    <section className="bg-cream-50 px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div className="grid gap-5 md:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
