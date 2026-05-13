import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Shield, Leaf, Award, Hammer, Package, Eye, Phone, Mail, MapPin, Send } from 'lucide-react'

function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 text-walnut-800">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="text-2xl font-display font-semibold text-walnut-700"
              whileHover={{ scale: 1.05 }}
            >
              Bose Plywood
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-walnut-600 hover:text-walnut-800 transition-colors">About</a>
              <a href="#products" className="text-walnut-600 hover:text-walnut-800 transition-colors">Products</a>
              <a href="#why-us" className="text-walnut-600 hover:text-walnut-800 transition-colors">Why Us</a>
              <a href="#gallery" className="text-walnut-600 hover:text-walnut-800 transition-colors">Gallery</a>
              <a href="#contact" className="text-walnut-600 hover:text-walnut-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-walnut-900/90 via-walnut-800/80 to-forest-900/70 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1566669437673-c571caabfd65?auto=format&fit=crop&w=1920&q=80')"
            }}
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-cream-50 mb-6 leading-tight">
              Crafting Spaces with Strength & Elegance
            </h1>
            <p className="text-xl md:text-2xl text-cream-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Premium plywood and interior materials for discerning architects and designers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-forest-600 text-cream-50 font-medium rounded-full hover:bg-forest-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Products
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-cream-200 text-cream-100 font-medium rounded-full hover:bg-cream-100 hover:text-walnut-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Dealership Inquiry
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cream-200" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
                About Bose Plywood
              </h2>
              <p className="text-lg text-walnut-600 mb-6 leading-relaxed">
                For over three decades, Bose Plywood has been the cornerstone of premium interior materials in the industry. Our journey began with a simple vision: to bring the finest quality wood products that blend nature's beauty with modern craftsmanship.
              </p>
              <p className="text-lg text-walnut-600 mb-8 leading-relaxed">
                Today, we stand as a trusted partner to architects, designers, and builders who demand excellence. Every sheet of plywood, every veneer, and every laminate that leaves our facility carries the mark of our commitment to quality.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-display text-walnut-700 mb-2">30+</p>
                  <p className="text-walnut-500">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-display text-walnut-700 mb-2">15K+</p>
                  <p className="text-walnut-500">Projects Completed</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={fadeInUp}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfe3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Wood workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-500 rounded-full opacity-20 blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              Premium Product Categories
            </h2>
            <p className="text-lg text-walnut-600 max-w-2xl mx-auto">
              Discover our curated collection of premium materials designed for exceptional interiors
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Plywood", desc: "Marine, Commercial & Decorative grades", img: "https://images.unsplash.com/photo-1600607687939-ce8a06b3b4e5" },
              { title: "Laminates", desc: "High-pressure decorative laminates", img: "https://images.unsplash.com/photo-1618220178908-b15c10669f2b" },
              { title: "Veneers", desc: "Natural and engineered wood veneers", img: "https://images.unsplash.com/photo-1595449015942-2e720d533349" },
              { title: "Decorative Panels", desc: "Designer panels for feature walls", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
              { title: "Hardware", desc: "Premium fittings and accessories", img: "https://images.unsplash.com/photo-1621905251557-0b95b0a3b4b3" },
            ].map((product, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-walnut-900/90 via-walnut-800/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display text-cream-50 mb-2">{product.title}</h3>
                  <p className="text-cream-200">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              Why Choose Bose Plywood
            </h2>
            <p className="text-lg text-walnut-600 max-w-2xl mx-auto">
              Our commitment to excellence in every detail
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Shield, title: "High Durability", desc: "Engineered for longevity and strength" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable sourcing and processes" },
              { icon: Award, title: "Premium Finish", desc: "Exceptional surface quality" },
              { icon: Hammer, title: "Moisture Resistant", desc: "Built to withstand humidity" },
              { icon: Package, title: "Long-lasting Strength", desc: "Decades of reliable performance" },
              { icon: Eye, title: "Trusted Quality", desc: "Industry-certified standards" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl glass hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-forest-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="text-xl font-display text-walnut-800 mb-3">{feature.title}</h3>
                <p className="text-walnut-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              Interior Inspirations
            </h2>
            <p className="text-lg text-walnut-600 max-w-2xl mx-auto">
              Showcasing the elegance of our materials in real spaces
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "https://images.unsplash.com/photo-1600566753051-9c218943a465",
              "https://images.unsplash.com/photo-1600585154526-93f189253061",
              "https://images.unsplash.com/photo-1600607687925-3b1c29d382f4",
              "https://images.unsplash.com/photo-1600566752355-35792bedcfe3",
              "https://images.unsplash.com/photo-1618220178908-b15c10669f2b",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "https://images.unsplash.com/photo-1600607687648-4f1c4bb8c8e7",
              "https://images.unsplash.com/photo-1600566753191-6b56a9a0a7b3",
            ].map((img, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              What Our Partners Say
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { quote: "Bose Plywood's materials elevate every project we undertake. Their quality is unmatched.", author: "Rajesh Mehta", role: "Principal Architect, Design Studio" },
              { quote: "Reliable, premium materials with consistent quality. A trusted partner for 15 years.", author: "Priya Sharma", role: "Interior Designer" },
              { quote: "The craftsmanship and attention to detail in every product speaks volumes about their commitment.", author: "Arjun Kapoor", role: "Project Manager" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl glass shadow-sm"
                variants={fadeInUp}
              >
                <p className="text-walnut-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-walnut-800">{testimonial.author}</p>
                  <p className="text-sm text-walnut-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              Become a Dealer
            </h2>
            <p className="text-lg text-walnut-600 mb-12">
              Partner with Bose Plywood to bring premium materials to your region. We seek passionate dealers committed to excellence.
            </p>
            <motion.button
              className="px-10 py-4 bg-walnut-700 text-cream-50 font-medium rounded-full hover:bg-walnut-800 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Inquiry
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-walnut-800 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-walnut-600 max-w-2xl mx-auto">
              Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-walnut-800 mb-1">Address</h4>
                    <p className="text-walnut-600">123 Industrial Area, Wood Market, Delhi - 110001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-walnut-800 mb-1">Phone</h4>
                    <p className="text-walnut-600">+91 11 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-walnut-800 mb-1">Email</h4>
                    <p className="text-walnut-600">contact@boseplywood.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-full border border-cream-300 focus:border-forest-500 focus:outline-none bg-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-full border border-cream-300 focus:border-forest-500 focus:outline-none bg-white transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border border-cream-300 focus:border-forest-500 focus:outline-none bg-white transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-forest-600 text-cream-50 font-medium rounded-full hover:bg-forest-700 transition-all shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-walnut-900 text-cream-100 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-display font-semibold mb-2">Bose Plywood</h3>
              <p className="text-cream-300">Premium materials for exceptional interiors</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-cream-300 text-sm">
                © 2024 Bose Plywood. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App