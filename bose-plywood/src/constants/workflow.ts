import { Factory, Ruler, Sparkles, Truck } from 'lucide-react'

import type { Feature } from '@/types/feature.types'

export const workflowSteps: Feature[] = [
  { icon: Sparkles, title: 'Finish Discovery', desc: 'Compare textures, grains, and tones in a calm material-led showroom setting.' },
  { icon: Ruler, title: 'Specification Support', desc: 'Choose the right grade, thickness, laminate, veneer, or panel for each room.' },
  { icon: Factory, title: 'Quality Check', desc: 'Inspect sheets for surface consistency, bonding, straightness, and packaging.' },
  { icon: Truck, title: 'Reliable Delivery', desc: 'Coordinate dispatches for retail orders, project sites, and dealer partners.' },
]
