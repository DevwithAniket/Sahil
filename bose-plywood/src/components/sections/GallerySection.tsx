import { motion } from 'framer-motion'

import { staggerContainer } from '@/animations/staggerContainer'
import GalleryImage from '@/components/ui/GalleryImage'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryImages } from '@/constants/gallery'

function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <SectionHeading eyebrow="Interior Inspirations" title="Real rooms, richer surfaces, quieter luxury" align="center" className="mx-auto max-w-3xl" />
        </motion.div>
        <motion.div className="grid auto-rows-[230px] gap-4 md:grid-cols-4" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          {galleryImages.map((img, index) => (
            <GalleryImage key={img} img={img} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection
