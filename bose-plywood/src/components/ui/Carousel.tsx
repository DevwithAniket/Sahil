import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface CarouselProps {
  images: string[]
}

export default function Carousel({ images }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-55%'])

  return (
    <div ref={containerRef} className="relative h-[50vh] w-full overflow-hidden">
      <motion.div className="flex h-full gap-5" style={{ x }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="h-full w-[30vw] flex-shrink-0 overflow-hidden rounded-[8px]"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={`Gallery ${index}`} className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
