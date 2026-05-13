import { motion } from 'framer-motion'

import Button from '@/components/ui/Button'
import { navLinks } from '@/constants/navLinks'

function Navbar() {
  return (
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
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-walnut-600 transition-colors hover:text-forest-700">
              {item}
            </a>
          ))}
        </div>
        <Button href="#contact" variant="nav" className="px-5 py-3 text-sm">
          Enquire
        </Button>
      </div>
    </motion.nav>
  )
}

export default Navbar
