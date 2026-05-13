import { ArrowRight, ChevronDown, Leaf, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations/fadeInUp'
import { staggerContainer } from '@/animations/staggerContainer'
import Button from '@/components/ui/Button'
import GlassPanel from '@/components/ui/GlassPanel'
import { useHeroParallax } from '@/hooks/useHeroParallax'

function HeroSection() {
  const { heroRef, heroY } = useHeroParallax()

  return (
    <section ref={heroRef} className="relative isolate min-h-screen overflow-hidden px-5 pt-28">
      <motion.div className="pointer-events-none absolute inset-x-0 -top-16 bottom-[-7rem] z-0 will-change-transform" style={{ y: heroY }}>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(100deg,rgba(38,28,20,0.88)_0%,rgba(77,56,41,0.74)_46%,rgba(87,128,38,0.54)_100%)]" />
        <img
          src="https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=2200&q=90"
          alt="Warm wooden interiors"
          className="relative z-0 h-full w-full scale-105 object-cover"
        />
      </motion.div>

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 pb-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.p variants={fadeInUp} className="mb-5 inline-flex max-w-full rounded-[8px] border border-cream-50/35 bg-cream-50/15 px-4 py-2 text-sm font-semibold leading-6 text-cream-50 backdrop-blur-xl">
            Premium plywood, veneers, laminates, and interior materials
          </motion.p>
          <motion.h1 variants={fadeInUp} className="max-w-4xl font-display text-4xl leading-[1.04] text-cream-50 sm:text-5xl md:text-7xl lg:text-8xl">
            Crafting spaces with warm grain and lasting strength
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-7 max-w-2xl text-base leading-8 text-cream-100 sm:text-lg md:text-xl">
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
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 48, rotateY: -8, filter: 'blur(12px)' }}
          animate={{ opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.05, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute -left-8 top-12 h-28 w-28 rounded-full border border-cream-50/20 bg-forest-300/20 blur-2xl"
            animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.72, 0.45] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-8 bottom-10 h-36 w-36 rounded-full border border-cream-50/20 bg-walnut-200/20 blur-2xl"
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            <GlassPanel className="hero-glass-panel relative overflow-hidden p-4">
              <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent_32%,rgba(109,160,47,0.18)_68%,transparent)]" />
              <div className="relative grid grid-cols-[1.08fr_0.92fr] gap-4">
                <div className="relative overflow-hidden rounded-[8px]">
                  <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=700&q=85" alt="Plywood display" className="h-[26rem] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-900/62 via-transparent to-cream-50/10" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-cream-50/20 bg-walnut-900/36 p-4 text-cream-50 backdrop-blur-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-200">Curated Surfaces</p>
                    <p className="mt-2 font-display text-2xl font-semibold leading-tight">Warm tones selected for modern interior depth.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-[8px]">
                    <img src="https://images.unsplash.com/photo-1595514535215-24e688f99744?auto=format&fit=crop&w=700&q=85" alt="Wood texture" className="h-36 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cream-50/10 to-walnut-900/36" />
                  </div>
                  <div className="rounded-[8px] border border-cream-50/55 bg-cream-50/78 p-5 text-walnut-800 shadow-2xl shadow-walnut-900/10 backdrop-blur-2xl">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-forest-100 text-forest-700">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="font-display text-5xl font-semibold leading-none">30+</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-walnut-600">years of material expertise and finish pairing</p>
                  </div>
                  <div className="rounded-[8px] border border-forest-200/30 bg-forest-700/86 p-5 text-cream-50 shadow-2xl shadow-forest-950/25 backdrop-blur-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <Leaf className="h-5 w-5 text-forest-200" />
                      <p className="text-sm font-semibold uppercase tracking-[0.18em]">Sap green promise</p>
                    </div>
                    <p className="text-sm leading-6 text-cream-100">Stronger panels, cleaner sourcing, less waste.</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
          <motion.div
            className="absolute -bottom-6 left-10 rounded-[8px] border border-cream-50/30 bg-cream-50/18 px-5 py-3 text-sm font-semibold text-cream-50 shadow-2xl shadow-walnut-950/20 backdrop-blur-2xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Premium grade sheets, matched with calmer finishes
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="h-8 w-8 text-cream-50" />
      </motion.div>
    </section>
  )
}

export default HeroSection
