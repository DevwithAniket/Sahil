import type { FormEvent } from 'react'
import { Leaf, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import FormField from '@/components/ui/FormField'
import GlassPanel from '@/components/ui/GlassPanel'
import { contactConfig } from '@/constants/contact'

const contactDetails = [
  { icon: MapPin, title: 'Address', text: '123 Industrial Area, Wood Market, Delhi - 110001' },
  { icon: Phone, title: 'Phone', text: contactConfig.phone },
  { icon: Mail, title: 'Email', text: contactConfig.email },
]

const productOptions = ['Product Interest', 'Plywood', 'Laminates', 'Veneers', 'Dealer Inquiry']

function ContactSection() {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const productInterest = String(formData.get('productInterest') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subject = `Product inquiry from ${name || 'website visitor'}`
    const body = [
      'New inquiry from Bose Plywood website:',
      '',
      `Name: ${name || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Product Interest: ${productInterest || 'Not selected'}`,
      '',
      'Message:',
      message || 'Not provided',
    ].join('\n')

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact-forest relative overflow-hidden bg-walnut-900 px-5 py-28 text-cream-50 lg:px-8">
      <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85" alt="Luxury wood interior" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(19,14,10,0.9),rgba(58,42,31,0.62)_48%,rgba(19,82,19,0.72))]" />
      <motion.div
        className="tree-silhouette tree-silhouette-left"
        animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="tree-silhouette tree-silhouette-right"
        animate={{ y: [0, 12, 0], rotate: [1.5, -1, 1.5] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf left-[8%] top-[18%]"
        animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [8, 26, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf right-[11%] top-[28%] scale-75"
        animate={{ y: [0, 20, 0], x: [0, -12, 0], rotate: [-18, -2, -18] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-leaf bottom-[17%] left-[42%] scale-90"
        animate={{ y: [0, -14, 0], x: [0, -8, 0], rotate: [32, 12, 32] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -28, filter: 'blur(8px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-300">Contact</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Bring your next interior project to our material desk</h2>
          <p className="mt-6 text-lg leading-8 text-cream-200">Visit the showroom, ask for a project quote, or start a dealership conversation with our team.</p>
          <div className="mt-10 grid gap-4">
            {contactDetails.map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-info-card flex gap-4 rounded-[8px] border border-cream-50/14 bg-cream-50/9 p-5 shadow-xl shadow-walnut-950/18 backdrop-blur-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.55 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-forest-400/18 text-forest-200">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-cream-200">{item.text}</p>
                </div>
              </motion.div>
            ))}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-contact-card group flex items-center gap-4 rounded-[8px] border border-forest-200/28 bg-forest-500/16 p-5 shadow-2xl shadow-forest-950/18 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.55 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25">
                <MessageCircle className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-semibold text-cream-50">Chat on WhatsApp</span>
                <span className="mt-1 block text-sm leading-6 text-cream-200">Open a direct chat with a ready message.</span>
              </span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 28, scale: 0.96, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <GlassPanel dark className="contact-form-panel relative grid gap-5 overflow-hidden p-6 md:p-8">
            <div className="pointer-events-none absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-forest-200/24 bg-forest-300/12 text-forest-100">
              <Leaf className="h-7 w-7" />
            </div>
            <div className="relative pr-14">
              <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-cream-50/16 bg-cream-50/9 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-forest-200">
                <Sparkles className="h-4 w-4" />
                Material Desk
              </div>
              <h3 className="font-display text-3xl font-semibold text-cream-50">Tell us what you are building</h3>
              <p className="mt-3 text-sm leading-6 text-cream-200">We will help you match plywood grade, finish, texture, and delivery support.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FormField type="text" name="name" placeholder="Your Name" required />
              <FormField type="tel" name="phone" placeholder="Phone Number" required />
            </div>
            <FormField type="email" name="email" placeholder="Email Address" required />
            <FormField fieldType="select" name="productInterest" options={productOptions} />
            <FormField fieldType="textarea" name="message" placeholder="Tell us about your project" rows={5} className="resize-none" required />
            <motion.button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-forest-600 px-8 py-4 font-semibold text-cream-50 shadow-xl shadow-forest-950/25 transition-colors hover:bg-forest-500"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send className="h-5 w-5" />
            </motion.button>
          </GlassPanel>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
