import { motion } from 'framer-motion'

import SectionHeading from '@/components/ui/SectionHeading'
import { galleryImages } from '@/constants/gallery'
import Carousel from '@/components/ui/Carousel'

function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <SectionHeading eyebrow="Interior Inspirations" title="Real rooms, richer surfaces, quieter luxury" align="center" className="mx-auto max-w-3xl" />
        </motion.div>
      </div>
      <Carousel images={galleryImages} />
    </section>
  )
}

export default GallerySection
