import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import Button from '@/components/ui/Button'
import { navLinks } from '@/constants/navLinks'

const getSectionId = (item: string) => item.toLowerCase().replace(' ', '-')

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(getSectionId(navLinks[0]))

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isSidebarOpen])

  useEffect(() => {
    const sectionIds = navLinks.map(getSectionId)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.38
      const currentSection = sections.reduce((current, section) => {
        if (section.offsetTop <= scrollPosition) {
          return section.id
        }

        return current
      }, sectionIds[0])

      const isPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      setActiveSection(isPageBottom ? sectionIds[sectionIds.length - 1] : currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-cream-50/40 bg-cream-100/65 shadow-[0_12px_40px_rgba(58,42,31,0.12)] backdrop-blur-2xl"
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="font-display text-2xl font-semibold tracking-normal text-walnut-800" onClick={closeSidebar}>
            Bose Plywood
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const sectionId = getSectionId(item)
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative rounded-[8px] px-3 py-2 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-walnut-900' : 'text-walnut-600 hover:text-forest-700'}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setActiveSection(sectionId)}
                >
                  {isActive ? (
                    <motion.span
                      className="active-nav-glass absolute inset-0 -z-10 rounded-[8px]"
                      layoutId="navbar-active-section"
                      transition={{ type: 'spring', stiffness: 360, damping: 30, mass: 0.85 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item}</span>
                  {isActive ? (
                    <motion.span
                      className="absolute -bottom-1 left-1/2 h-1 w-7 -translate-x-1/2 rounded-full bg-forest-500 shadow-[0_0_14px_rgba(109,160,47,0.75)]"
                      layoutId="navbar-active-dot"
                      transition={{ type: 'spring', stiffness: 360, damping: 30, mass: 0.85 }}
                    />
                  ) : null}
                </a>
              )
            })}
          </div>
          <div className="hidden md:block">
            <Button href="#contact" variant="nav" className="px-5 py-3 text-sm">
              Enquire
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-walnut-200/70 bg-cream-50/70 text-walnut-800 shadow-lg shadow-walnut-900/10 backdrop-blur-xl transition-colors hover:bg-forest-600 hover:text-cream-50 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSidebarOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-walnut-950/48 backdrop-blur-sm md:hidden"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeSidebar}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[55] flex h-dvh w-[min(86vw,22rem)] flex-col border-l border-cream-50/45 bg-cream-100/88 p-5 shadow-2xl shadow-walnut-950/35 backdrop-blur-2xl md:hidden"
              initial={{ x: '100%', opacity: 0.85 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.85 }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <a href="#" className="font-display text-2xl font-semibold text-walnut-800" onClick={closeSidebar}>
                  Bose Plywood
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-walnut-200/70 bg-cream-50/70 text-walnut-800 transition-colors hover:bg-walnut-800 hover:text-cream-50"
                  aria-label="Close navigation menu"
                  onClick={closeSidebar}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 rounded-[8px] border border-cream-50/70 bg-cream-50/48 p-3 shadow-xl shadow-walnut-900/10 backdrop-blur-xl">
                {navLinks.map((item, index) => {
                  const sectionId = getSectionId(item)
                  const isActive = activeSection === sectionId

                  return (
                    <motion.a
                      key={item}
                      href={`#${sectionId}`}
                      className={`relative flex items-center justify-between overflow-hidden rounded-[8px] px-4 py-4 font-semibold transition-colors ${isActive ? 'text-cream-50' : 'text-walnut-700 hover:bg-forest-600 hover:text-cream-50'}`}
                      aria-current={isActive ? 'page' : undefined}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.045, duration: 0.32 }}
                      onClick={() => {
                        setActiveSection(sectionId)
                        closeSidebar()
                      }}
                    >
                      {isActive ? (
                        <motion.span
                          className="absolute inset-0 bg-forest-700"
                          layoutId="sidebar-active-section"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      ) : null}
                      <span className="relative z-10">{item}</span>
                      <span className={`relative z-10 h-1.5 w-1.5 rounded-full ${isActive ? 'bg-cream-50' : 'bg-forest-500'}`} />
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-auto rounded-[8px] border border-forest-200/40 bg-forest-700/90 p-5 text-cream-50 shadow-2xl shadow-forest-950/20">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-100">Start a project</p>
                <p className="mt-3 text-sm leading-6 text-cream-100">Talk to Bose Plywood about products, finishes, or dealership enquiries.</p>
                <Button href="#contact" variant="secondary" className="mt-5 w-full border-cream-50/40 px-5 py-3" onClick={closeSidebar}>
                  Enquire Now
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Navbar
