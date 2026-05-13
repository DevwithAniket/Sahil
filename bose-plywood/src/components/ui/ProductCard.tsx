import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import type { Product } from '@/types/product.types'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article className="group glass-panel overflow-hidden p-3" variants={fadeInUp} whileHover={{ y: -6 }}>
      <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
        <img src={product.img} alt={product.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-2xl font-semibold text-walnut-800">{product.title}</h3>
        <p className="mt-2 leading-7 text-walnut-600">{product.desc}</p>
      </div>
    </motion.article>
  )
}

export default ProductCard
