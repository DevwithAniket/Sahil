import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

import FormField from '@/components/ui/FormField'
import GlassPanel from '@/components/ui/GlassPanel'

const contactDetails = [
  { icon: MapPin, title: 'Address', text: '123 Industrial Area, Wood Market, Delhi - 110001' },
  { icon: Phone, title: 'Phone', text: '+91 11 2345 6789' },
  { icon: Mail, title: 'Email', text: 'contact@boseplywood.com' },
]

const productOptions = ['Product Interest', 'Plywood', 'Laminates', 'Veneers', 'Dealer Inquiry']

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-walnut-900 px-5 py-28 text-cream-50 lg:px-8">
      <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85" alt="Luxury wood interior" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-300">Contact</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Bring your next interior project to our material desk</h2>
          <p className="mt-6 text-lg leading-8 text-cream-200">Visit the showroom, ask for a project quote, or start a dealership conversation with our team.</p>
          <div className="mt-10 space-y-5">
            {contactDetails.map((item) => (
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

        <motion.form initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <GlassPanel dark className="grid gap-5 p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField type="text" placeholder="Your Name" />
              <FormField type="tel" placeholder="Phone Number" />
            </div>
            <FormField type="email" placeholder="Email Address" />
            <FormField fieldType="select" options={productOptions} />
            <FormField fieldType="textarea" placeholder="Tell us about your project" rows={5} className="resize-none" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-forest-600 px-8 py-4 font-semibold text-cream-50 shadow-xl shadow-forest-950/25 transition-colors hover:bg-forest-500">
              Send Message <Send className="h-5 w-5" />
            </button>
          </GlassPanel>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
