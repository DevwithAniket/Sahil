import { motion } from 'framer-motion'

import { staggerContainer } from '@/animations/staggerContainer'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/constants/products'

function ProductsSection() {
  return (
    <section id="products" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
