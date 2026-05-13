import type { HTMLAttributes, ReactNode } from 'react'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  dark?: boolean
}

function GlassPanel({ children, className = '', dark = false, ...props }: GlassPanelProps) {
  return (
    <div className={`${dark ? 'glass-dark-panel' : 'glass-panel'} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default GlassPanel
