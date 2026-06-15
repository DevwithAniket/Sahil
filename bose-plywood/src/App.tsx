import { useState, useEffect } from 'react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import GallerySection from '@/components/sections/GallerySection'
import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import WorkflowSection from '@/components/sections/WorkflowSection'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackgroundMusicToggle from '@/components/ui/BackgroundMusicToggle'
import Loader from '@/components/ui/Loader'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#130e0a] text-[#fbfaf8]">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <ScrollProgress />
      <BackgroundMusicToggle />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <WorkflowSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />

      <Footer />
    </div>
  )
}

export default App