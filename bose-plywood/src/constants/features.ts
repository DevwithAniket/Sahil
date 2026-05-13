import { Award, Eye, Hammer, Leaf, Package, Shield } from 'lucide-react'

import type { Feature } from '@/types/feature.types'

export const featureCards: Feature[] = [
  { icon: Shield, title: 'Calibrated Strength', desc: 'Uniform bonding, balanced layers, and stable cores for demanding sites.' },
  { icon: Leaf, title: 'Responsible Sourcing', desc: 'Suppliers are selected for traceability, efficiency, and lower material waste.' },
  { icon: Award, title: 'Premium Finish', desc: 'Surfaces are inspected for grain, tone, texture, and finishing compatibility.' },
  { icon: Hammer, title: 'Site-Ready Range', desc: 'Materials for furniture, partitions, cabinetry, retail, and hospitality work.' },
  { icon: Package, title: 'Protected Dispatch', desc: 'Careful bundling keeps panels clean, straight, and ready for installation.' },
  { icon: Eye, title: 'Design Guidance', desc: 'Our team helps match thickness, finish, and grain to each room and budget.' },
]
