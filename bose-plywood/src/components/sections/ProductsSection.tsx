import { motion } from 'framer-motion'

import { staggerContainer } from '@/animations/staggerContainer'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/constants/products'

function ProductsSection() {
  return (
    <section id="products" className="botanical-section relative overflow-hidden px-5 py-28 lg:px-8">
      <motion.div
        className="floating-leaf right-[10%] top-[12%] scale-90 opacity-60"
        animate={{ y: [0, 18, 0], x: [0, -12, 0], rotate: [-16, 4, -16] }}
        transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf bottom-[10%] left-[12%] scale-75 opacity-50"
        animate={{ y: [0, -14, 0], x: [0, 8, 0], rotate: [24, 8, 24] }}
        transition={{ duration: 6.9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="botanical-branch left-[-4rem] bottom-10 hidden rotate-180 md:block"
        animate={{ rotate: [176, 184, 176], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div className="mb-14 max-w-3xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <SectionHeading
            eyebrow="Product Library"
            title="Brown warmth, beige calm, sap-green responsibility"
            copy="Explore materials arranged for how modern interior teams actually build: strength first, finish second, service always."
          />
        </motion.div>

        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
