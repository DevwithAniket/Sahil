import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import { staggerContainer } from '@/animations/staggerContainer'
import Button from '@/components/ui/Button'
import GlassPanel from '@/components/ui/GlassPanel'
import { useHeroParallax } from '@/hooks/useHeroParallax'

function HeroSection() {
  const { heroRef, heroY } = useHeroParallax()

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden px-5 pt-28">
      <motion.div className="absolute inset-0" style={{ y: heroY }}>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(100deg,rgba(38,28,20,0.88)_0%,rgba(77,56,41,0.74)_46%,rgba(87,128,38,0.54)_100%)]" />
        <img
          src="https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=2200&q=90"
          alt="Warm wooden interiors"
          className="h-full w-full scale-105 object-cover"
        />
      </motion.div>

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.p variants={fadeInUp} className="mb-5 inline-flex rounded-[8px] border border-cream-50/35 bg-cream-50/15 px-4 py-2 text-sm font-semibold text-cream-50 backdrop-blur-xl">
            Premium plywood, veneers, laminates, and interior materials
          </motion.p>
          <motion.h1 variants={fadeInUp} className="max-w-4xl font-display text-5xl leading-[1.02] text-cream-50 md:text-7xl lg:text-8xl">
            Crafting spaces with warm grain and lasting strength
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-7 max-w-2xl text-lg leading-8 text-cream-100 md:text-xl">
            A curated material house for architects, carpenters, builders, and homeowners who want refined finishes without compromising durability.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#products" className="px-7 py-4">
              Explore Products <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#gallery" variant="secondary" className="px-7 py-4">
              View Inspirations
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <GlassPanel className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=700&q=85" alt="Plywood display" className="h-72 w-full rounded-[8px] object-cover" />
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1595514535215-24e688f99744?auto=format&fit=crop&w=700&q=85" alt="Wood texture" className="h-32 w-full rounded-[8px] object-cover" />
                <div className="rounded-[8px] bg-cream-50/80 p-5 text-walnut-800 backdrop-blur-xl">
                  <p className="font-display text-4xl font-semibold">30+</p>
                  <p className="mt-1 text-sm font-medium text-walnut-600">years of material expertise</p>
                </div>
                <div className="rounded-[8px] bg-forest-700/85 p-5 text-cream-50 backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em]">Sap green promise</p>
                  <p className="mt-2 text-sm text-cream-100">Stronger panels, cleaner sourcing, less waste.</p>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="h-8 w-8 text-cream-50" />
      </motion.div>
    </section>
  )
}

export default HeroSection
