import { motion } from 'framer-motion'

import { staggerContainer } from '@/animations/staggerContainer'
import GalleryImage from '@/components/ui/GalleryImage'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryImages } from '@/constants/gallery'

function GallerySection() {
  return (
    <section id="gallery" className="botanical-section relative overflow-hidden px-5 py-28 lg:px-8">
      <motion.div
        className="botanical-branch right-[-5rem] top-1/2 hidden md:block"
        animate={{ rotate: [-8, -1, -8], y: [0, -12, 0] }}
        transition={{ duration: 10.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf left-[14%] top-[20%] scale-75 opacity-55"
        animate={{ y: [0, 16, 0], x: [0, -8, 0], rotate: [-28, -8, -28] }}
        transition={{ duration: 7.7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto max-w-7xl">
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
