import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Eye,
  Factory,
  Hammer,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  Package,
  Phone,
  Ruler,
  Send,
  Shield,
  Sparkles,
  Truck,
} from 'lucide-react'

const products = [
  {
    title: 'Marine Plywood',
    desc: 'High-density panels for kitchens, bathrooms, partitions, and moisture-prone interiors.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a06b3b4e5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Decorative Laminates',
    desc: 'Matte, suede, stone, metallic, and woodgrain finishes for refined surfaces.',
    img: 'https://images.unsplash.com/photo-1618220178908-b15c10669f2b?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Natural Veneers',
    desc: 'Hand-selected veneer flitches with warm grains and consistent character.',
    img: 'https://images.unsplash.com/photo-1595449015942-2e720d533349?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Block Boards',
    desc: 'Straight, sturdy boards for wardrobes, long shutters, counters, and furniture frames.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Wall Panels',
    desc: 'Acoustic, fluted, and designer panels that add texture to feature walls.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Premium Hardware',
    desc: 'Hinges, channels, handles, adhesives, and fittings curated for clean installation.',
    img: 'https://images.unsplash.com/photo-1621905251557-0b95b0a3b4b3?auto=format&fit=crop&w=900&q=85',
  },
]

const featureCards = [
  { icon: Shield, title: 'Calibrated Strength', desc: 'Uniform bonding, balanced layers, and stable cores for demanding sites.' },
  { icon: Leaf, title: 'Responsible Sourcing', desc: 'Suppliers are selected for traceability, efficiency, and lower material waste.' },
  { icon: Award, title: 'Premium Finish', desc: 'Surfaces are inspected for grain, tone, texture, and finishing compatibility.' },
  { icon: Hammer, title: 'Site-Ready Range', desc: 'Materials for furniture, partitions, cabinetry, retail, and hospitality work.' },
  { icon: Package, title: 'Protected Dispatch', desc: 'Careful bundling keeps panels clean, straight, and ready for installation.' },
  { icon: Eye, title: 'Design Guidance', desc: 'Our team helps match thickness, finish, and grain to each room and budget.' },
]

const gallery = [
  'https://images.unsplash.com/photo-1600566753051-9c218943a465?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1600585154526-93f189253061?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1600607687925-3b1c29d382f4?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=85',
]

function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120])

  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  }

  return (
    <div className="min-h-screen overflow-hidden bg-cream-100 text-walnut-800">
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-cream-50/40 bg-cream-100/65 shadow-[0_12px_40px_rgba(58,42,31,0.12)] backdrop-blur-2xl"
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="font-display text-2xl font-semibold tracking-normal text-walnut-800">
            Bose Plywood
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {['About', 'Products', 'Why Us', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-walnut-600 transition-colors hover:text-forest-700">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-[8px] bg-walnut-700 px-5 py-3 text-sm font-semibold text-cream-50 shadow-lg shadow-walnut-900/15 transition-colors hover:bg-forest-700">
            Enquire
          </a>
        </div>
      </motion.nav>

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
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-forest-600 px-7 py-4 font-semibold text-cream-50 shadow-xl shadow-forest-900/25 transition-colors hover:bg-forest-700">
                Explore Products <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-cream-50/50 bg-cream-50/10 px-7 py-4 font-semibold text-cream-50 backdrop-blur-xl transition-colors hover:bg-cream-50 hover:text-walnut-800">
                View Inspirations
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="glass-panel hidden p-4 lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
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
          </motion.div>
        </div>

        <motion.div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-8 w-8 text-cream-50" />
        </motion.div>
      </section>

      <section id="about" className="relative bg-cream-100 px-5 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="relative" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85" alt="Elegant wooden room" className="h-[560px] w-full rounded-[8px] object-cover shadow-2xl shadow-walnut-900/20" />
            <div className="glass-panel absolute -bottom-7 left-5 right-5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-700">Material consultation</p>
              <p className="mt-2 text-lg font-semibold text-walnut-800">From sheet selection to finish pairing, we help every surface feel intentional.</p>
            </div>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="section-eyebrow">About Bose Plywood</motion.p>
            <motion.h2 variants={fadeInUp} className="section-title">A warmer, sharper way to choose interior materials</motion.h2>
            <motion.p variants={fadeInUp} className="section-copy">
              Bose Plywood brings together dependable plywood, expressive veneers, rich laminates, wall panels, and hardware under one roof. Our range is built for daily site realities: precision cuts, moisture exposure, heavy use, and finishes that need to look good for years.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['15K+', 'project supplies'],
                ['250+', 'finish options'],
                ['24 hr', 'dispatch support'],
              ].map(([number, label]) => (
                <div key={label} className="glass-panel p-5">
                  <p className="font-display text-4xl font-semibold text-walnut-800">{number}</p>
                  <p className="mt-1 text-sm font-medium text-walnut-600">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="products" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-14 max-w-3xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <p className="section-eyebrow">Product Library</p>
            <h2 className="section-title">Brown warmth, beige calm, sap-green responsibility</h2>
            <p className="section-copy">Explore materials arranged for how modern interior teams actually build: strength first, finish second, service always.</p>
          </motion.div>

          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {products.map((product) => (
              <motion.article key={product.title} className="group glass-panel overflow-hidden p-3" variants={fadeInUp} whileHover={{ y: -6 }}>
                <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
                  <img src={product.img} alt={product.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-2xl font-semibold text-walnut-800">{product.title}</h3>
                  <p className="mt-2 leading-7 text-walnut-600">{product.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="why-us" className="bg-walnut-800 px-5 py-28 text-cream-50 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-300">Why Choose Us</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Every sheet is chosen for beauty, balance, and build quality</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg leading-8 text-cream-200">
              We combine traditional material knowledge with a showroom experience: curated samples, practical guidance, reliable stock, and finishes that help designers create memorable rooms.
            </motion.p>
          </motion.div>

          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {featureCards.map((feature) => (
              <motion.div key={feature.title} className="rounded-[8px] border border-cream-50/12 bg-cream-50/8 p-7 shadow-xl shadow-walnut-950/20 backdrop-blur-2xl" variants={fadeInUp} whileHover={{ y: -5 }}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[8px] bg-forest-500/20 text-forest-200">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-cream-200">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-50 px-5 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="section-eyebrow">How We Work</motion.p>
            <motion.h2 variants={fadeInUp} className="section-title">From concept board to finished installation</motion.h2>
            <motion.div variants={fadeInUp} className="mt-10 space-y-4">
              {[
                { icon: Sparkles, title: 'Finish Discovery', text: 'Compare textures, grains, and tones in a calm material-led showroom setting.' },
                { icon: Ruler, title: 'Specification Support', text: 'Choose the right grade, thickness, laminate, veneer, or panel for each room.' },
                { icon: Factory, title: 'Quality Check', text: 'Inspect sheets for surface consistency, bonding, straightness, and packaging.' },
                { icon: Truck, title: 'Reliable Delivery', text: 'Coordinate dispatches for retail orders, project sites, and dealer partners.' },
              ].map((step) => (
                <div key={step.title} className="glass-panel flex gap-5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-forest-100 text-forest-700">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-walnut-800">{step.title}</h3>
                    <p className="mt-1 leading-7 text-walnut-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85" alt="Interior finish selection" className="h-72 w-full rounded-[8px] object-cover" />
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85" alt="Modern cabinet design" className="mt-12 h-72 w-full rounded-[8px] object-cover" />
            <div className="rounded-[8px] bg-forest-700 p-7 text-cream-50">
              <Layers3 className="mb-5 h-9 w-9" />
              <p className="font-display text-3xl font-semibold">Layered interiors start with layered materials.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85" alt="Warm living room" className="h-72 w-full rounded-[8px] object-cover" />
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <p className="section-eyebrow">Interior Inspirations</p>
            <h2 className="section-title mx-auto max-w-3xl">Real rooms, richer surfaces, quieter luxury</h2>
          </motion.div>
          <motion.div className="grid auto-rows-[230px] gap-4 md:grid-cols-4" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {gallery.map((img, index) => (
              <motion.div key={img} className={`group overflow-hidden rounded-[8px] shadow-lg shadow-walnut-900/12 ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`} variants={fadeInUp}>
                <img src={img} alt={`Interior inspiration ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-50 px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="grid gap-5 md:grid-cols-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { quote: 'The finishes are consistent, the plywood is dependable, and their team understands what designers need on site.', author: 'Priya Sharma', role: 'Interior Designer' },
              { quote: 'Bose Plywood has become our first call for premium projects because they make selection and delivery simple.', author: 'Rajesh Mehta', role: 'Principal Architect' },
              { quote: 'Their veneer and laminate collections help us offer clients a much richer palette without slowing the build.', author: 'Vikram Singh', role: 'Project Manager' },
            ].map((testimonial) => (
              <motion.article key={testimonial.author} className="glass-panel p-7" variants={fadeInUp}>
                <div className="mb-6 flex gap-2 text-forest-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <CheckCircle2 key={star} className="h-5 w-5" />
                  ))}
                </div>
                <p className="leading-8 text-walnut-700">"{testimonial.quote}"</p>
                <div className="mt-7">
                  <p className="font-semibold text-walnut-800">{testimonial.author}</p>
                  <p className="text-sm text-walnut-500">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-walnut-900 px-5 py-28 text-cream-50 lg:px-8">
        <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85" alt="Luxury wood interior" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-300">Contact</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Bring your next interior project to our material desk</h2>
            <p className="mt-6 text-lg leading-8 text-cream-200">Visit the showroom, ask for a project quote, or start a dealership conversation with our team.</p>
            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, title: 'Address', text: '123 Industrial Area, Wood Market, Delhi - 110001' },
                { icon: Phone, title: 'Phone', text: '+91 11 2345 6789' },
                { icon: Mail, title: 'Email', text: 'contact@boseplywood.com' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="mt-1 h-6 w-6 text-forest-300" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-cream-200">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form className="glass-dark-panel grid gap-5 p-6 md:p-8" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" placeholder="Your Name" className="form-field" />
              <input type="tel" placeholder="Phone Number" className="form-field" />
            </div>
            <input type="email" placeholder="Email Address" className="form-field" />
            <select className="form-field">
              <option>Product Interest</option>
              <option>Plywood</option>
              <option>Laminates</option>
              <option>Veneers</option>
              <option>Dealer Inquiry</option>
            </select>
            <textarea placeholder="Tell us about your project" rows={5} className="form-field resize-none" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-forest-600 px-8 py-4 font-semibold text-cream-50 shadow-xl shadow-forest-950/25 transition-colors hover:bg-forest-500">
              Send Message <Send className="h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-[#0f0a07] px-5 py-12 text-cream-200 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream-50">Bose Plywood</h3>
            <p className="mt-2 text-sm">Premium materials for exceptional interiors</p>
          </div>
          <p className="text-sm">© 2026 Bose Plywood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
