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

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream-100 text-walnut-800">
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

export default Home
