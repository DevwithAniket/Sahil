import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'

interface GalleryImageProps {
  img: string
  index: number
}

function GalleryImage({ img, index }: GalleryImageProps) {
  const isFeatured = index === 0 || index === 5

  return (
    <motion.div
      className={`group overflow-hidden rounded-[8px] shadow-lg shadow-walnut-900/12 ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
      variants={fadeInUp}
    >
      <img src={img} alt={`Interior inspiration ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </motion.div>
  )
}

export default GalleryImage
